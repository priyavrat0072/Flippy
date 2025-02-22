import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screen/Home';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';

const Stack = createNativeStackNavigator();
export const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};


export const HomeRoutes = () => {
  // console.log('Home Routes Triggerd')
  return(
    <Stack.Navigator>
    <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{headerShown: false}}/>
  </Stack.Navigator>
  )
};

