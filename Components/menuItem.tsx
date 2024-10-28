import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

type DishItem = {
  name: string;
  course: string;
  description: string;
  price: number;
};

// Define and export the saveItem function
export const saveItem = async (menuArr: Array<{ name: string, description: string, price: number, course: string }>) => {
  if (menuArr.length > 0) {
    try {
      const jsonValue = JSON.stringify(menuArr);
      await AsyncStorage.setItem('@menu-items', jsonValue);
    } catch (e) {
      // Handle the error
      Alert.alert("Error saving data: " + e);
    }
  }
};


export const getData = async () => {
    let tempArr: DishItem[] = []; // Initialize the array
    /*
    try {
        const jsonValue = await AsyncStorage.getItem('my-key');
        if (jsonValue != null) {
            menuArr = JSON.parse(jsonValue); // Populate the array with loaded data
        }
        return menuArr; // Return the populated array
      
    } catch (e) {
      // Handle the error
      console.error("Error loading data: ", e);
      return [];
    }
    */
    try {
      const jsonValue = await AsyncStorage.getItem('@menu-items');
      if (jsonValue != null) {
          tempArr = JSON.parse(jsonValue); // Populate the array with loaded data
      } else {
        tempArr = []; // If no data is found, return an empty array
        //Alert.alert('Error retrieving  data');

      }

  } catch (e) {
    // Handle the error
    Alert.alert("Error loading data: " + e);
  }
  return tempArr; 
};

