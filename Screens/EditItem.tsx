import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../util/types';
import {  View } from 'react-native';

type EditItemScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'MenuScreen'>;
  };

function EditItemScreen({navigation}:EditItemScreenProps){
    return(
        <View>

        </View>

    )


}

export default EditItemScreen;