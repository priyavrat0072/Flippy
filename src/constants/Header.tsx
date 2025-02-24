import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = (props:any) => {
    console.log(props)
  return (
    <View style={styles.container}>
      <Text style={styles.centertext}>{props.name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#2e2eb8',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    borderWidth:1,
    borderColor: '#ff8c1a',
  },
  centertext: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight:'700',
    
  },
});
