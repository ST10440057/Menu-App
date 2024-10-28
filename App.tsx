import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/Login';
import ChefScreen from './Screens/ChefScreen';
import AddItem from './Screens/AddItem';
import MenuScreen from './Screens/MenuScreen';
import EditItemScreen from './Screens/EditItem';

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
      <Stack.Screen name="LoginScreen" component={Login} options={{title:'Login'}}/>
      <Stack.Screen name="MenuScreen" component={MenuScreen} options={{title:'menue'}}/>
      <Stack.Screen name="AddItemScreen" component={AddItem} options={{title:'Add items'}}/>
      <Stack.Screen name="EditItemScreen" component={EditItemScreen} options={{title:'Edit items'}}/>
      <Stack.Screen name="ChefScreen" component={ChefScreen} options={{title:'Navigation'}}/>
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

