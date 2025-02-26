import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screen/Home';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import ProductDetails from '../screen/ProductDetails';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen from '../screen/DrawerScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import categories from '../screen/categories';
import account from '../screen/account';
import cart from '../screen/cart';
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export const DrawerRoutes = (props: any) => {
  // console.log(props.userData._user.email)
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={props.userData._user.email.toUpperCase()} component={MyTabs} />
    </Drawer.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeRoutes" component={HomeRoutes} options={{
        tabBarIcon:({color,size})=>(
          <Fontisto name="home" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="categories" component={categories} options={{
        tabBarIcon:({color,size})=>(
          <MaterialIcons name="category" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="account" component={account} options={{
        tabBarIcon:({color,size})=>(
          <MaterialCommunityIcons name="account" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="cart" component={cart} options={{
        tabBarIcon:({color,size})=>(
          <EvilIcons name="cart" size={size} color={color} />
        )
      }}/>
    </Tab.Navigator>
  );
}

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

export const HomeRoutes = (props: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};






