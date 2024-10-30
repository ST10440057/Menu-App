import React, { useState, useEffect } from 'react';
import { 
  Text, 
  TouchableOpacity, 
  TextInput, 
  Alert, 
  FlatList, 
  View, 
  KeyboardAvoidingView, 
  Platform, 
  SafeAreaView 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../util/stylesheet';
import { saveItem, getData } from '../Components/menuItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, DishItem, customers } from '../util/types';

type EditItemScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'EditItemScreen'>;
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

function EditItemScreen({ navigation }: EditItemScreenProps) {
  const [dishList, setDishList] = useState<DishItem[]>([]);
  const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);
  const [editedDish, setEditedDish] = useState<DishItem | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getData();
    if (data) {
      setDishList(data as DishItem[]);
    }
  };

  const handleEdit = (dish: DishItem) => {
    setSelectedDish(dish);
    setEditedDish({ ...dish });
  };

  const handleSave = async () => {
    if (!editedDish) return;

    const updatedDishList = dishList.map(dish =>
      dish === selectedDish ? editedDish : dish
    );

    await saveItem(updatedDishList);
    setDishList(updatedDishList);
    setSelectedDish(null);
    setEditedDish(null);
    Alert.alert('Success', 'Dish updated successfully');
  };

  const handleDelete = async () => {
    if (!selectedDish) return;

    const updatedDishList = dishList.filter(dish => dish !== selectedDish);
    await saveItem(updatedDishList);
    setDishList(updatedDishList);
    setSelectedDish(null);
    setEditedDish(null);
    Alert.alert('Success', 'Dish deleted successfully');
  };

  const renderItem = ({ item }: { item: DishItem }) => (
    <TouchableOpacity onPress={() => handleEdit(item)} style={styles.menuItemListEntry}>
      <Text>{item.name} - {item.course}</Text>
    </TouchableOpacity>
  );

  const renderEditForm = () => {
    if (!selectedDish || !editedDish) return null;

    return (
      <View style={styles.dishEditFormContainer}>
        <Text style={styles.emptyListText}>Edit Dish</Text>

        <Text style={styles.editFormLabel}>Customer:</Text>
        <View style={styles.customerPickerWrapper}>
          <Picker
            style={styles.coursePickerStyle}
            selectedValue={editedDish.customerId}
            onValueChange={(itemValue) => setEditedDish({ ...editedDish, customerId: itemValue })}>
            {customers.map((customer) => (
              <Picker.Item label={customer.name} value={customer.id} key={customer.id} />
            ))}
          </Picker>
        </View>

        <Text style={styles.editFormLabel}>Course:</Text>
        <View style={styles.coursePickerWrapper}>
          <Picker
            style={styles.coursePickerStyle}
            selectedValue={editedDish.course}
            onValueChange={(itemValue) => setEditedDish({ ...editedDish, course: itemValue })}>
            {courseArr.map((item) => (
              <Picker.Item label={item.name} value={item.name} key={item.id} />
            ))}
          </Picker>
        </View>

        <Text style={styles.editFormLabel}>Dish:</Text>
        <TextInput
          value={editedDish.name}
          onChangeText={(text) => setEditedDish({ ...editedDish, name: text })}
          style={styles.dishInputField}
        />

        <Text style={styles.editFormLabel}>Description:</Text>
        <TextInput
          value={editedDish.description}
          onChangeText={(text) => setEditedDish({ ...editedDish, description: text })}
          style={styles.dishDescriptionInput}
          multiline
        />

        <Text style={styles.editFormLabel}>Cost:</Text>
        <TextInput
          value={editedDish.price.toString()}
          onChangeText={(text) => setEditedDish({ ...editedDish, price: Number(text) })}
          style={styles.dishPriceInput}
          keyboardType='numeric'
        />

        <TouchableOpacity style={styles.saveChangesButton} onPress={handleSave}>
          <Text style={styles.saveChangesButtonText}>Save Changes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteDishButton} onPress={handleDelete}>
          <Text style={styles.deleteDishButtonText}>Delete Dish</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.editScreenSafeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.editScreenKeyboardAvoid}
      >
        <FlatList
          ListHeaderComponent={() => (
            <Text style={styles.welcomeText}>Edit Menu Items</Text>
          )}
          data={dishList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.menuItemsList}
          ListFooterComponent={renderEditForm}
          contentContainerStyle={styles.menuItemsListContent}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default EditItemScreen;