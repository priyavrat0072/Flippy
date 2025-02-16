import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const userLogin = async () => {
    if (!email || !password) {
      console.log('Please fill out the empty fields');
    }
    try {
      const newReg = await auth().signInWithEmailAndPassword(email, password);
      console.log('Sign in done');
      return newReg;
    } catch (error) {
      console.log('Email or Password incorrect');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Email</Text>
      <TextInput
        style={styles.txtinput}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />

      <Text style={styles.text}>Enter Password</Text>
      <TextInput
        style={styles.txtinput}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity onPress={() => userLogin()}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => reset()}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  txtinput: {
    height: 50,
    width: 250,
    borderWidth: 1,
    fontSize: 24,
  },
});
