import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../util/types';
import {  View } from 'react-native';

type MenuScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'MenuScreen'>;
  };

function MenuScreen({navigation}:MenuScreenProps){
    return(
        <View></View>

    )


}

export default MenuScreen;