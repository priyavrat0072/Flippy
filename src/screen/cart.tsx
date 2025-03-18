import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { removefromcart } from '../redux/slices/CartSlice';

const cart = () => {
  const cartProduct = useSelector(state => state.cart.data);
  const dispatch = useDispatch()
  return (
    <View>
      <FlatList
        data={cartProduct}
        renderItem={({item, index}) => (
          <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.image}} />
            <View style={styles.details}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.price}> Price : ${item.price}</Text>
              <Text style={styles.category}>{item.category}</Text>
            </View>
            <TouchableOpacity style={styles.cancelbtn} onPress={()=>{dispatch(removefromcart(item))}}>
              <Text style={styles.canceltext}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
  },
  details: {
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    width: 250,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  price: {
    color: '#00994d',
  },
  cancelbtn: {
    marginTop: 25,
    marginLeft: 5,
    backgroundColor: '#ff9999',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#000000',
  },
  canceltext: {
    fontSize: 16,
    fontWeight: '500',
  },
  category: {},
});
