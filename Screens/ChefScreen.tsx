
import styles from '../util/stylesheet';
import { View, Text, TouchableOpacity, ImageBackground, } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../util/types';



type ChefScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ChefScreen'>;
};

 function ChefScreen( { navigation }:ChefScreenProps ){
    return( 
      <ImageBackground 
 source={require('../assets/Background.jpg')}
 resizeMode="cover"
  style={styles.container}
>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddItemScreen')}>
        <Text style={styles.buttonText}>Add menu item/s</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditItemScreen')}>
        <Text style={styles.buttonText}>Edit menu item/s</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Back home</Text>
      </TouchableOpacity>
    </ImageBackground>
  
  
    )
  }

  export default ChefScreen;