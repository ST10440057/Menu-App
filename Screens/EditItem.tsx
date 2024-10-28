import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../util/stylesheet';
import { getData, saveItem } from '../Components/menuItem';
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

type EditItemScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'EditItemScreen'>;
};

function EditItem({ navigation }: EditItemScreenProps) {
  const [dishList, setDishList] = useState<DishItem[]>([]);
  const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);
  const [editedCourse, setEditedCourse] = useState("");
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedPrice, setEditedPrice] = useState(0);
  const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(); // Assuming getData() returns a promise
      setDishList(data);
      
      const total =dishList ? dishList.reduce((sum, item) => sum + item.price, 0) : 0;
      setTotalCost(total);
    };
  

    fetchData();
  }, [dishList]);


  const handleDishSelect = (dish: DishItem) => {
    setSelectedDish(dish);
    setEditedCourse(dish.course);
    setEditedName(dish.name);
    setEditedDescription(dish.description);
    setEditedPrice(dish.price);
  };

  const handleSaveChanges = () => {
    if (!selectedDish) return;

    const updatedDishList = dishList.map(dish => {
      if (dish.name === selectedDish.name) {
        return {
          name: editedName,
          course: editedCourse,
          description: editedDescription,
          price: editedPrice
        };
      }
      return dish;
    });

    saveItem(updatedDishList);
    setDishList(updatedDishList);
    setSelectedDish(null);
    Alert.alert("Success", "Item updated successfully!");
  };

  const handleDelete = () => {
    if (!selectedDish) return;

    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => {
            const updatedDishList = dishList.filter(
              dish => dish.name !== selectedDish.name
            );
            saveItem(updatedDishList);
            setDishList(updatedDishList);
            setSelectedDish(null);
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Edit Menu Items</Text>

        <Text style={styles.h2}>Select Item to Edit:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedDish?.name}
            onValueChange={(itemValue) => {
              const dish = dishList.find(d => d.name === itemValue);
              if (dish) handleDishSelect(dish);
            }}>
            <Picker.Item label="Select a dish" value="" />
            {dishList.map((dish, index) => (
              <Picker.Item label={dish.name} value={dish.name} key={index} />
            ))}
          </Picker>
        </View>

        {selectedDish && (
          <View>
            <Text style={styles.h2}>Course:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={editedCourse}
                onValueChange={(itemValue) => setEditedCourse(itemValue)}>
                {courseArr.map((item) => (
                  <Picker.Item label={item.name} value={item.name} key={item.id} />
                ))}
              </Picker>
            </View>

            <Text style={styles.h2}>Dish Name:</Text>
            <TextInput
              value={editedName}
              onChangeText={setEditedName}
              style={styles.TextInput}
            />

            <Text style={styles.h2}>Description:</Text>
            <TextInput
              value={editedDescription}
              onChangeText={setEditedDescription}
              style={styles.TextInput}
            />

            <Text style={styles.h2}>Price:</Text>
            <TextInput
              value={editedPrice.toString()}
              onChangeText={(text) => setEditedPrice(Number(text))}
              style={styles.TextInput}
              keyboardType="numeric"
            />

            <TouchableOpacity style={styles.confirmButton} onPress={handleSaveChanges}>
              <Text style={styles.confirmButtonText}>Save Changes</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.confirmButton, { backgroundColor: 'red' }]} 
              onPress={handleDelete}
            >
              <Text style={styles.confirmButtonText}>Delete Item</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default EditItem;