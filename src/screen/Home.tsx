import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {theme} from '../theme/style';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import {useDispatch} from 'react-redux';
import {addProducts} from '../redux/slices/ProductSlice';

const Home = () => {
  const [products, setProducts] = useState<any>([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await fetch('https://fakestoreapi.in/api/products')
      .then(res => res.json())
      .then(res => {
        dispatch(addProducts(res));
        setProducts(res.products);
        
      });
  };
  // console.log('products--------', products);
  return (
    <View style={styles.container}>
      <View>
      <ScrollView horizontal={true} style={styles.horizontalView}>
        <TouchableOpacity  style={styles.categoryView} onPress={()=>navigation.navigate('categories',{category:'tv'})}>
          <View>
            <Image
              style={styles.imgContainer}
              source={require('../assets/tv.jpg')}
            />
          </View>
        </TouchableOpacity >
        <TouchableOpacity style={styles.categoryView} onPress={()=>navigation.navigate('categories',{category:'audio'})}>
          <View>
            <Image
              style={styles.imgContainer}
              source={require('../assets/hdpn.jpeg')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryView} onPress={()=>navigation.navigate('categories',{category:'laptop'})}>
          <View>
            <Image
              style={styles.imgContainer}
              source={require('../assets/laptop.jpg')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryView} onPress={()=>navigation.navigate('categories',{category:'gaming'})}>
          <View>
            <Image
              style={styles.imgContainer}
              source={require('../assets/game.jpeg')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryView} onPress={()=>navigation.navigate('categories',{category:'mobile'})}>
          <View>
            <Image
              style={styles.imgContainer}
              source={require('../assets/mobile.jpeg')}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
      </View>
      <FlatList
        data={products}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.main}
              onPress={() => {
                navigation.navigate('ProductDetails', {prod: item});
              }}>
              <View style={styles.imagecontainer}>
                <Image style={styles.image} source={{uri: item.image}} />
              </View>
              <View style={styles.details}>
                <Text numberOfLines={1} style={styles.title}>
                  {item.title}
                </Text>
                <Text numberOfLines={2} style={styles.desc}>
                  {item.description}
                </Text>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.price}>$ {item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f2f2f2',
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    margin: 3,
    backgroundColor: '#ffffff',
  },
  imagecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  desc: {
    fontSize: 12,
    marginBottom: 2,
    color: '#527a7a',
  },
  details: {
    marginLeft: 5,
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
  },
  price: {
    fontWeight: '700',
    color: '#009933',
  },
  horizontalView: {
    flexDirection: 'row',
    margin: 5,
    // marginBottom:15,
    backgroundColor:'#FFFFFF'
  },
  imgContainer: {
    height: 60,
    width: 60,
  },
  categoryView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#ff8c1a',
    margin:10
  },
});
