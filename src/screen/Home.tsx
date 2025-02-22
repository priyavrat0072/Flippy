import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {theme} from '../theme/style';

const Home = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(res => setProducts(res));
  };
  // console.log(products)
  return (
    <View style={{flex:1}}>
      <FlatList
        data={products}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={{flex:1,flexDirection:'row'}}>
              <View>
              <Image
                style={{height: 60, width: 60}}
                source={{uri: item.image}}
              />
              </View>
              <View>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
                <Text>{item.category}</Text>
                <Text>{item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

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
