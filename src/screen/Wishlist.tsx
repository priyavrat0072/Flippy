import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removefromwishlist } from '../redux/slices/WishListSlice';

const Wishlist = () => {
  const dispatch = useDispatch()
  const wishlistProduct = useSelector(state => state.wishlist.data);
  // const [wishListData, setWishListData] = useState(wishlistProduct)
  console.log('wishlistProduct--------', wishlistProduct);
  return (
    <View>
      <FlatList
        data={wishlistProduct}
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
            <TouchableOpacity style={styles.cancelbtn} onPress={()=>{dispatch(removefromwishlist(item))}}>
              <Text style={styles.canceltext}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Wishlist;

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
    marginTop:25,
    marginLeft:5,
    backgroundColor: '#ff9999',
    width: 30,
    height: 30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
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
  canceltext:{
    fontSize:16,
    fontWeight:'500'
  },
  category:{

  }
});
