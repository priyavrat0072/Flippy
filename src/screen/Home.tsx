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

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.main}>
              <View style={styles.imagecontainer}>
              <Image
                style={styles.image}
                source={{uri: item.image}}
              />
              </View>
              <View style={styles.details}>
                <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                <Text numberOfLines={2} style={styles.desc}>{item.description}</Text>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.price}>$ {item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <TouchableOpacity
        
        onPress={() => {
          auth().signOut();
        }}>
        <Text style={{fontSize:24}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:5,
    backgroundColor: '#f2f2f2',
  },
  main:{
    flex:1,
    flexDirection:'row',
    margin:3,
    backgroundColor:'#ffffff'
  },
  imagecontainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    height:100,
    width:100,
  },
  title:{
    fontSize:16,
    fontWeight:'600',
    marginBottom:2,
  },
  desc:{
    fontSize:12,
    marginBottom:2,
  },
  details:{
    marginLeft:5
  },
  category:{
    fontSize:12,
    fontWeight:'600',
  },
  price:{
    fontWeight:'700'
  }
  
  

});
