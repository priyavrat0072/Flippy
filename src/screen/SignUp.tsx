import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const SignUp = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    setEmail('');
    setPassword('');
    setUserName('');
  };

  const signUpDetails= async()=>{

    if(!email || !password || !username)
    {
        console.log("Please fill out the empty fields")
    }
    try{
        const newReg = await auth().createUserWithEmailAndPassword(email,password)
        firestore().collection('users').doc(newReg.user.uid).set({
          name: username,
          email: newReg.user.email,
          uid: newReg.user.uid
        })
          }catch(err){
        console.log('Registration Unsuccessful! Try again');
  
      }

  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Enter Username</Text>
      <TextInput
        style={styles.txtinput}
        value={username}
        onChangeText={txt => setUserName(txt)}
      />

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

      <TouchableOpacity onPress={() => signUpDetails()}>
        <Text>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => reset()}>
        <Text>Reset</Text>
      </TouchableOpacity>

    </View>
  );
};

export default SignUp;
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
