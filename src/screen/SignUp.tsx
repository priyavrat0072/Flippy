import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const reset = () => {
    setEmail('');
    setPassword('');
    setUserName('');
  };

  const signUpDetails = async () => {
    if (!email || !password || !username) {
      console.log('Please fill out the empty fields');
    }
    try {
      const newReg = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      firestore().collection('users').doc(newReg.user.uid).set({
        name: username,
        email: newReg.user.email,
        uid: newReg.user.uid,
      });
    } catch (err) {
      console.log('Registration Unsuccessful! Try again');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagebox}>
        <Image
          style={styles.imageContainer}
          source={require('../assets/flippyImg.png')}
        />
      </View>
      <View style={styles.insideContainer}>
        <Text style={styles.mainText}>Sign-Up</Text>
        <View style={styles.card}>
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

          <TouchableOpacity style={styles.signup} onPress={() => signUpDetails()}>
            <Text style={styles.signuptext}>Sign-Up</Text>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
          <Text style={styles.plaintext}>Already a user?</Text>
          <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
            <Text  style={styles.logintext}>Login</Text>
          </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2eb8',
  },

  imagebox: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    height: 200,
    width: 300,
    tintColor: '#ffffff',
  },
  insideContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 15,
    color: '#99e6ff',
  },
  card: {
    justifyContent: 'center',
    paddingLeft: 25,
    height: 370,
    width: 300,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ff8c1a',
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0044cc',
    marginBottom: 5,
  },

  txtinput: {
    height: 50,
    width: 250,
    borderWidth: 2,
    fontSize: 17,
    marginBottom: 5,
    borderRadius: 15,
    borderColor: '#ff8c1a',
  },
  signup: {
    marginTop: 5,
    // position:'relative',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#00b359',
    width: 100,
    marginLeft: 85,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ff8c1a',
  },

  signuptext: {
    fontSize: 22,
    color: '#FFFFFF',
  },
  loginContainer:{
    // flex:1,
    flexDirection:'row',
    marginTop:10,
    marginLeft:60,
  },
  plaintext:{
    marginRight:5
  },
  logintext:{
    color:'#3333cc',
    textDecorationLine:'underline',
    fontWeight:'600'
  }
});
