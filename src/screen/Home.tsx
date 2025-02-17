import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Kuch bhi"></Button>
      <TouchableOpacity
        onPress={() => {
          auth().signOut();
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
