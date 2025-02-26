import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';


const cart = () => {
  const cartProduct = useSelector(state => state.cart.data);
  // console.log('cartProduct---------',cartProduct);
  return (
    <View>
      <FlatList 
      data={cartProduct}
      renderItem={({item,index})=>(
        <View>
          <Image style={{height:200,width:200}} source={{uri:item.image}} />
          <Text>{item.title}</Text>
          <Text>{item.price}</Text>
          <Text>{item.category}</Text>
        </View>
      )}
      />
    </View>
  );
};

export default cart;

const styles = StyleSheet.create({});
