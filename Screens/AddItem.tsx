import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../util/stylesheet';
import  {saveItem, getData} from '../Components/menuItem'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../util/types';

type DishItem = {
  name: string;
  course: string;
  description: string;
  price: number;
};

const courseArr = [
  { id: 1, name: "Hors D'Oeuvre", type: "Hors D'Oeuvre" },
  { id: 2, name: "Amuse-Bouche", type: "Amuse-Bouche" },
  { id: 3, name: "Soup", type: "Soup" },
  { id: 4, name: "Salad", type: "Salad" },
  { id: 5, name: "Appetiser", type: "Appetiser" },
  { id: 6, name: "Fish", type: "Fish" },
  { id: 7, name: "First Main Course", type: "First Main Course" },
  { id: 8, name: "Palate Cleanser", type: "Palate Cleanser" },
  { id: 9, name: "Second Main Course", type: "Second Main Course" },
  { id: 10, name: "Cheese", type: "Cheese" },
  { id: 11, name: "Dessert", type: "Dessert" },
  { id: 12, name: "Mignardise", type: "Mignardise" },
];


type AddItemScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AddItemScreen'>;
};

function AddItem({navigation}:AddItemScreenProps) {
  const [course, setCourse] = useState("");
  const [dishName, setDishName] = useState("");
  const [dishDescription, setDishDescription] = useState("");
  const [dishPrice, setPrice] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [dishList, setDishList] = useState<DishItem[]>([]);

  

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(); // Assuming getData() returns a promise
      setDishList(data);
    };
    const calculateTotalCost = () => {
      const total = dishList.reduce((sum, item) => sum + item.price, 0);
      setTotalCost(total);
    };

    fetchData();
    calculateTotalCost();
  }, [dishList]);

  if (!course || !dishName || !dishDescription || !dishPrice) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Add Menu Item</Text>
        <Text style={styles.h2}>Course:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={course}
            onValueChange={(itemValue) => setCourse(itemValue)}>
            <Picker.Item label="Select a course" value="" />
            {courseArr.map((item) => (
              <Picker.Item label={item.name} value={item.name} key={item.id} />
            ))}
          </Picker>
        </View>

        <Text style={styles.h2}>Dish:</Text>
        <TextInput value={dishName} onChangeText={(text) => setDishName(text)} placeholder='Enter Dish Name' style={styles.TextInput} />
        
        <Text style={styles.h2}>Description:</Text>
        <TextInput value={dishDescription} onChangeText={(text) => setDishDescription(text)} placeholder='Enter Dish Description' style={styles.TextInput} />
        
        <Text style={styles.h2}>Cost:</Text>
        <TextInput value={dishPrice.toString()} onChangeText={(text) => setPrice(Number(text))} placeholder='Enter Dish price' style={styles.TextInput} keyboardType='numeric' />

        <TouchableOpacity style={styles.confirmButton} onPress={() => {

          if (course === null || dishName === null || dishDescription === null || dishPrice === null) {
          saveItem(dishList);
          }

        }}>
          <Text style={styles.confirmButtonText}>Save</Text>
        </TouchableOpacity>
        
        <Text style={styles.h2}>Dish List:</Text>
        {dishList.map((item, index) => (
          <Text key={index} style={styles.h2}>name: {item.name} - Course: {item.course} - Description: {item.description} - Price: R{item.price}</Text>
        ))}

        <Text style={styles.h2}>Total Cost: R{totalCost.toString()}</Text> 
      </View>
    </ScrollView>
  );
}
export default AddItem;