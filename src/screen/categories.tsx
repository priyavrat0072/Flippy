import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const categories = props => {
  const navigation = useNavigation();
  // console.log(props.route.params.category);
  const [category, setCategory] = useState([]);
  let categoryType = props.route.params.category;
  // console.log('categoryType---------', categoryType);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    await fetch(
      `https://fakestoreapi.in/api/products/category?type=${categoryType}`,
    )
      .then(res => res.json())
      .then(res => setCategory(res));
  };
  console.log('categoryList---------', category);

  return (
    <View>
      <FlatList
        data={category.products}
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

export default categories;

const styles = StyleSheet.create({
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
});
