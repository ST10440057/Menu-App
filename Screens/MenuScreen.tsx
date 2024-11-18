import { useState, useEffect } from "react";
import { View, Text, FlatList, Alert, ImageBackground } from 'react-native';
import RNPickerSelect from 'react-native-picker-select'; // You'll need to install this
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
  const [allDishes, setAllDishes] = useState<DishItem[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>('All');

  // Find customer name from ID
  const customerName = "Customer " +  customerId;

  useEffect(() => {
    loadCustomerDishes();
  }, []);

  useEffect(() => {
    filterDishes();
  }, [selectedCourse, allDishes]);

  const loadCustomerDishes = async () => {
    try {
      const dishes = await getData();

      if (dishes) {
        // Filter dishes by customerId
        const filteredDishes = dishes.filter(dish => dish.customerId === customerId);
        setAllDishes(filteredDishes);
        setCustomerDishes(filteredDishes);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load dishes');
    }
  };

  const filterDishes = () => {
    if (selectedCourse === 'All') {
      setCustomerDishes(allDishes);
    } else {
      const filtered = allDishes.filter(dish => dish.course === selectedCourse);
      setCustomerDishes(filtered);
    }
  };

  const calculateTotal = () => {
    return customerDishes.reduce((sum, dish) => sum + dish.price, 0);
  };

  // Get unique courses
  const courses = ['All', ...new Set(allDishes.map(dish => dish.course))];

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
      
      {/* Course Picker */}
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedCourse(value)}
          items={courses.map(course => ({ label: course, value: course }))}
          value={selectedCourse}
          placeholder={{}}
          style={{
            inputIOS: styles.pickerInput,
            inputAndroid: styles.pickerInput,
          }}
        />
      </View>
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
      <Text style={styles.emptyListText}>
        {selectedCourse === 'All' 
          ? 'No dishes ordered yet' 
          : `No ${selectedCourse} dishes ordered`}
      </Text>
    </View>
  );

  return (
    <ImageBackground 
      source={require('../assets/Background.jpg')}
      resizeMode="cover"
      style={styles.container}
    >
      <FlatList
        data={customerDishes}
        renderItem={renderDishItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmptyList}
        contentContainerStyle={styles.flatListContent}
      />
    </ImageBackground>
  );
}

export default MenuScreen;