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

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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

export const DrawerRoutes = (props: any) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HEllo" component={MyTabs} />
      <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeRoutes" component={HomeRoutes} />
      <Tab.Screen name="orders" component={HomeRoutes} />
     
    </Tab.Navigator>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>NOTIFICATION</Text>
    </View>
  );
}
