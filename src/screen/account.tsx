import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';


const account = () => {
  return (
    <View>
      <Text>account</Text>
      <TouchableOpacity
        
        onPress={() => {
          auth().signOut();
        }}>
        <Text style={{fontSize:24}}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default account

const styles = StyleSheet.create({})