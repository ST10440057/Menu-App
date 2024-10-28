import AsyncStorage from '@react-native-async-storage/async-storage';

// Define and export the saveItem function
export const saveItem = async (menuArr: Array<{ name: string, description: string, price: number, course: string }>) => {
  if (menuArr.length > 0) {
    try {
      const jsonValue = JSON.stringify(menuArr);
      await AsyncStorage.setItem('my-key', jsonValue);
    } catch (e) {
      // Handle the error
      console.error("Error saving data: ", e);
    }
  }
};


export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('my-key');
        if (jsonValue != null){
            menuArr = JSON.parse(jsonValue);
        }
        return menuArr;
      
    } catch (e) {
      // Handle the error
      console.error("Error loading data: ", e);
    }
  };