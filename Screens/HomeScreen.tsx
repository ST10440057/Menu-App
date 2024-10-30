
import {  View, Text,TouchableOpacity,} from 'react-native';
import styles from '../util/stylesheet';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../util/types';



type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};


function HomeScreen({navigation}:HomeScreenProps) {
    return (
      <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Christoffel's restaurant</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CustomerScreen')}>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Chef Login</Text>
      </TouchableOpacity>
    </View>
    );
  }
  export default HomeScreen;
