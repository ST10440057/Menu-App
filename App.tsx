import {useState, } from 'react';
import { Button, View, Text,TouchableOpacity,StyleSheet, TextInput, Alert, ImageBackground, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';

//import image from '';





type RootStackPeramList = {
  Home:undefined;
  Login:undefined;
  Menu:undefined;
  Nav:undefined;
  AddItem:undefined;
  EditItem:undefined;
};

type ScreenProps<T extends keyof RootStackPeramList> ={
navigation:NativeStackNavigationProp <RootStackPeramList,T>;

};





function HomeScreen({ navigation }:ScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
    <Text style={styles.welcomeText}>Welcome to Christoffel's restaurant</Text>
    
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
      <Text style={styles.buttonText}>Menu</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
      <Text style={styles.buttonText}>Chef Login</Text>
    </TouchableOpacity>
  </View>
  );
}

function Login({ navigation }:ScreenProps<'Login'>) {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [course, setCourse] = useState(""); 

  const handleSubmit =() =>{
      if(username == "Christoffel" && password=="1234"){
        navigation.navigate('Nav');                                                                         
      }else{
        Alert.alert("Error", "The username or password is incorrect");
      }


  }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
 
        <Text style={styles.title}>Chef Login</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Input username"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Input password"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={handleSubmit}>
          <Text style={styles.continueButtonText}>continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function Nav({ navigation }:ScreenProps<'Nav'>){
  return( 
    <View style={styles.container}>
    
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddItem')}>
      <Text style={styles.buttonText}>Add menu item/s</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditItem')}>
      <Text style={styles.buttonText}>Edit menu item/s</Text>
    </TouchableOpacity>
  </View>


  )
}

function Menu({ navigation }:ScreenProps<'Menu'>) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function AddItem({ navigation }: ScreenProps<'AddItem'>) {
  const [dishList, setDishList] = useState<{ name: string; course: string; description: string; price: number }[]>([]);
  const [dishName, setDishName] = useState('');
  const [course, setCourse] = useState(''); 
  const [dishDescription, setDishDescription] = useState(''); 
  const [dishPrice, setPrice] = useState(0);
  const [totalCost, setTotalCost] = useState(0); 

  const courseArr = [
    { id: 1, name: 'Hors D’Oeuvre', type: 'Hors D’Oeuvre' },
    { id: 2, name: 'Amuse-Bouche', type: 'Amuse-Bouche' },
    { id: 3, name: 'Soup', type: 'Soup' },
    { id: 4, name: 'Salad', type: 'Salad' },
    { id: 5, name: 'Appetiser', type: 'Appetiser' },
    { id: 6, name: 'Fish', type: 'Fish' },
    { id: 7, name: 'First Main Course', type: 'First Main Course' },
    { id: 8, name: 'Palate Cleanser', type: 'Palate Cleanser' },
    { id: 9, name: 'Second Main Course', type: 'Second Main Course' },
    { id: 10, name: 'Cheese', type: 'Cheese' },
    { id: 11, name: 'Dessert', type: 'Dessert' },
    { id: 12, name: 'Mignardise', type: 'Mignardise' },
  ];

  const saveItem = () => {
    if (dishName && course && dishDescription && dishPrice) {
      setDishList([...dishList, { name: dishName, course: course, description: dishDescription, price: dishPrice }]);
      setDishName('');
      setCourse(''); 
      setDishDescription('');
      setPrice(0);
      const newTotalCost = dishList.reduce((acc, item) => acc + item.price, 0) + dishPrice;
      setTotalCost(newTotalCost);
      Alert.alert("Success", "Item saved successfully!");
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  };

  return (
    <ScrollView>
      <View  style={styles.container}>
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
      <TextInput value={dishPrice.toString()} onChangeText={(text) => setPrice(Number(text))} placeholder='Enter Dish price' style={styles.TextInput} />

      <TouchableOpacity style={styles.confirmButton} onPress={saveItem}>
        <Text style={styles.confirmButtonText}>Save</Text>
      </TouchableOpacity>
      
      <Text style={styles.h2}>Dish List:</Text>
      {dishList.map((item, index) => (
        <Text key={index} style={styles.h2}>name:{item.name} - Course: {item.course} - Description: {item.description} - Price: {item.price}</Text>
      ))}

      <Text style={styles.h2}>Total Cost: {totalCost.toString()}</Text> 
    </View>
    </ScrollView>
  );
}

function EditItem({ navigation }:ScreenProps<'EditItem'>) {
  return (
    <View>

      
      

    </View>
  );
}




const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTintColor: 'black',
      headerStyle: { backgroundColor: 'grey' },
    }}>
      <Stack.Screen name="Home" component={HomeScreen}  
      options={{title: 'Home',}}/>
      <Stack.Screen name="Login" component={Login} options={{title:'Login'}}/>
      <Stack.Screen name="Menu" component={Menu} options={{title:'menue'}}/>
      <Stack.Screen name="AddItem" component={AddItem} options={{title:'Add items'}}/>
      <Stack.Screen name="EditItem" component={EditItem} options={{title:'Edit items'}}/>
      <Stack.Screen name="Nav" component={Nav} options={{title:'Navigation'}}/>
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
  
        <MyStack />

    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 50, 
    width:'100%',
    padding:50,
    marginLeft: 'auto', 
    marginRight: 'auto', 
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeText: {
    width:400,
    padding:50,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    backgroundColor:'#BEBEBE',
    borderRadius:10,
  },
  h2:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#d3d3d3',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  loginContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    maxWidth: 500,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  confirmButton: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width:400,
  },
  confirmButtonText: {
    fontWeight: 'bold',
  },
  pickerContainer:{
    borderRadius:20,
    backgroundColor:'dodgerblue',
    margin:10,
    overflow:'hidden',
  },
  picker:{
    width:400,
    height: 70,
    backgroundColor: 'dodgerblue',
    borderRadius:10,
    color:'white',
    justifyContent:'center',
    textAlign:'center',
    
  },
  TextInput:{
    width:400,
    height: 70,
    backgroundColor: 'white',
    borderRadius:10,
    borderBlockColor:'dodgerblue',
    padding:10,
    margin:30,
  }
  
});
