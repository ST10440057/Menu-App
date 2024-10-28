import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../util/types';
import styles from '../util/stylesheet';

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'LoginScreen'>;
};

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    if (username === null || password === null) {
      console.error('Username or password is null');
      return;
    }
    if (username === "Christoffel" && password === "1234") {
      navigation.navigate('ChefScreen');
    } else {
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

export default Login;