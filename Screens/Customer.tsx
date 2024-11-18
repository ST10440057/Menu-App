import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../util/types';
import styles from '../util/stylesheet';
import MenuScreen from './MenuScreen';

type CustomerScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'CustomerScreen'>;
};

function CustomerScreen({ navigation }: CustomerScreenProps) {
  return (
    <ImageBackground 
    source={require('../assets/Background.jpg')}
    resizeMode="cover"
     style={styles.container}
   >
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('MenuScreen', { customerId: 1 })}
      >
        <Text style={styles.buttonText}>Customer 1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('MenuScreen', { customerId: 2 })}
      >
        <Text style={styles.buttonText}>Customer 2</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('MenuScreen', { customerId: 3 })}
      >
        <Text style={styles.buttonText}>Customer 3</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default CustomerScreen;