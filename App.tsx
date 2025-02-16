import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './src/screen/Home';
import {NavigationContainer} from '@react-navigation/native';
import { AuthRoutes } from './src/navigation/Routes';

function App() {
  return (
    <NavigationContainer>
      <AuthRoutes/>
    </NavigationContainer>
  );
}

export default App;
