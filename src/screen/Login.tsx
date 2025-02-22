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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

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
      return newReg;
    } catch (error) {
      console.log('Email or Password incorrect');
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
        <Text style={styles.mainText}>Login</Text>
        <View style={styles.card}>
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
          <TouchableOpacity style={styles.login} onPress={() => userLogin()}>
            <Text style={styles.logintext}>Login</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.plaintext}>Don't have a account?</Text>

            <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signuptext}>Sign-Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
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
  mainText: {
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 15,
    color: '#99e6ff',
  },
  insideContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    justifyContent: 'center',
    paddingLeft: 25,
    height: 300,
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
    // textAlign:'center',bitu
    height: 50,
    width: 250,
    borderWidth: 2,
    fontSize: 17,
    // textAlignVertical:'bottom',
    marginBottom: 5,
    borderRadius: 15,
    borderColor: '#ff8c1a',
  },

  login: {
    marginTop: 5,
    // position:'relative',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#00b359',
    width: 90,
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

  logintext: {
    fontSize: 22,
    color: '#FFFFFF',
  },
  signupContainer:{
    // flex:1,
    flexDirection:'row',
    marginTop:10,
    marginLeft:40,
  },
  plaintext:{
    marginRight:5
  },
  signup:{
    
  },
  signuptext:{
    color:'#3333cc',
    textDecorationLine:'underline',
    fontWeight:'600'
  }

});
