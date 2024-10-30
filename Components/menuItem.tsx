// menuItem.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DishItem } from '../util/types';

interface StorageItem {
  CustomerID: number;
  name: string;
  description: string;
  price: number;
  course: string;
}


export const saveItem = async (items: DishItem[]): Promise<void> => {
  try {
    // Map DishItem[] to StorageItem[] to maintain compatibility
    const mappedItems = items.map(item => ({
      CustomerID: item.customerId,
      name: item.name,
      description: item.description,
      price: item.price,
      course: item.course
    }));
    
    await AsyncStorage.setItem('menuItems', JSON.stringify(mappedItems));
  } catch (error) {
    console.error('Error saving items:', error);
    throw error;
  }
};

export const getData = async (): Promise<DishItem[] | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem('menuItems');
    if (jsonValue != null) {
      // Convert StorageItem[] back to DishItem[]
      const storageItems: StorageItem[] = JSON.parse(jsonValue);
      return storageItems.map(item => ({
        customerId: item.CustomerID,
        name: item.name,
        description: item.description,
        price: item.price,
        course: item.course
      }));
    }
    return null;
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};