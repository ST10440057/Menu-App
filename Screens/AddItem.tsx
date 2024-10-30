import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../util/stylesheet';
import  {saveItem, getData} from '../Components/menuItem'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, DishItem, customers } from '../util/types';

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
  const [customerId, setCustomerId] = useState<number | null>(null);
  const [totalCost, setTotalCost] = useState(0);
  const [dishList, setDishList] = useState<DishItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      if (data) {
        setDishList(data as DishItem[]);
        const total = data.reduce((sum, item) => sum + item.price, 0);
        setTotalCost(total);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Add Menu Item</Text>
        
        <Text style={styles.h2}>Customer:</Text>
        <View style={styles.pickerContainer}>
  <Picker
    style={styles.picker}
    selectedValue={customerId}
    onValueChange={(itemValue) => setCustomerId(itemValue)}>
    <Picker.Item label="Select a customer" value={null} />
    {customers.map((customer) => (
      <Picker.Item label={customer.name} value={customer.id} key={customer.id} />
    ))}
  </Picker>
</View>

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
        <TextInput 
          value={dishName} 
          onChangeText={(text) => setDishName(text)} 
          placeholder='Enter Dish Name' 
          style={styles.TextInput} 
        />
        
        <Text style={styles.h2}>Description:</Text>
        <TextInput 
          value={dishDescription} 
          onChangeText={(text) => setDishDescription(text)} 
          placeholder='Enter Dish Description' 
          style={styles.TextInput} 
        />
        
        <Text style={styles.h2}>Cost:</Text>
        <TextInput 
          value={dishPrice.toString()} 
          onChangeText={(text) => setPrice(Number(text))} 
          placeholder='Enter Dish price' 
          style={styles.TextInput} 
          keyboardType='numeric' 
        />

        <TouchableOpacity 
          style={styles.confirmButton} 
          onPress={() => {
            if (!customerId || !course || !dishName || !dishDescription || dishPrice <= 0) {
              Alert.alert("Error", "Please fill in all fields correctly");
              return;
            }
          
            const newDish: DishItem = {
              name: dishName,
              course: course,
              description: dishDescription,
              price: dishPrice,
              customerId: customerId
            };
          
            const updatedDishList = [...dishList, newDish];
            setDishList(updatedDishList);
            saveItem(updatedDishList);
          
            const newTotalCost = totalCost + dishPrice;
            setTotalCost(newTotalCost);
          
            setCustomerId(null);
            setCourse("");
            setDishName("");
            setDishDescription("");
            setPrice(0);
          
            const selectedCustomerName = customers.find(c => c.id === customerId)?.name || "Unknown customer";
            Alert.alert("Success", `Dish added successfully for ${selectedCustomerName}`);
          }}>
          <Text style={styles.confirmButtonText}>Save</Text>
        </TouchableOpacity>
        
        <Text style={styles.h2}>Dish List:</Text>
        {dishList.map((item, index) => {
          const customerName = customers.find(c => c.id === item.customerId)?.name || "Unknown customer";
          return (
            <Text key={index} style={styles.h2}>
              Customer: {customerName} - Name: {item.name} - Course: {item.course} - Description: {item.description} - Price: R{item.price}
            </Text>
          );
        })}

        <Text style={styles.h2}>Total Cost: R{totalCost.toString()}</Text> 
      </View>
    </ScrollView>
  );
}

export default AddItem;