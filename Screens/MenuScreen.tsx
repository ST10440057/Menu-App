import { useState, useEffect } from "react";
import { View, Text, FlatList, Alert } from 'react-native';
import styles from '../util/stylesheet';
import { getData } from '../Components/menuItem'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, DishItem } from '../util/types';
import { RouteProp } from '@react-navigation/native';



type MenuScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'MenuScreen'>;
  route: RouteProp<RootStackParamList, 'MenuScreen'>;
};

function MenuScreen({ navigation, route }: MenuScreenProps) {
  const { customerId } = route.params;
  const [customerDishes, setCustomerDishes] = useState<DishItem[]>([]);
  
  // Find customer name from ID
  const customerName = "Customer " +  customerId;


  useEffect(() => {
    loadCustomerDishes();
  }, []);

  const loadCustomerDishes = async () => {
    try {
      const allDishes = await getData();

      if (allDishes) {
        // Filter dishes directly by customerId
        const filteredDishes = allDishes.filter(dish => dish.customerId === customerId);
        setCustomerDishes(filteredDishes);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load dishes');
    }
  };

  const calculateTotal = () => {
    return customerDishes.reduce((sum, dish) => sum + dish.price, 0);
  };

  const renderDishItem = ({ item }: { item: DishItem }) => (
    <View style={styles.dishItem}>
      <Text style={styles.dishText}>
        {item.course}: {item.name}
      </Text>
      <Text style={styles.dishDescription}>
        {item.description}
      </Text>
      <Text style={styles.dishPrice}>
        R{item.price.toFixed(2)}
      </Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.welcomeText}>{customerName}'s Order</Text>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footerContainer}>
      <Text style={styles.totalText}>
        Total: R{calculateTotal().toFixed(2)}
      </Text>
    </View>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListText}>No dishes ordered yet</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={customerDishes}
        renderItem={renderDishItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmptyList}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

export default MenuScreen;