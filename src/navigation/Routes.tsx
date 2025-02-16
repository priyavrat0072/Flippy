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
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export const HomePage = () => {
  <Stack.Navigator>
    <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{headerShown: true}}/>
  </Stack.Navigator>;
};

const styles = StyleSheet.create({});
