import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const searchproducts = useSelector(state => state);
  const [oldData, setOldData] = useState(searchproducts.product.data.products);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const [searchedList, setSearchedList] = useState(oldData);
  console.log('searchedList----------------', searchedList);

  const filterData = textdata => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(textdata.toLowerCase());
    });
    setSearchedList(newData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="search item here....."
        value={search}
        onChangeText={text => {
          setSearch(text);
          filterData(text);
        }}
        style={styles.inputbox}
      />

      <FlatList
        data={searchedList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.main}
              onPress={() => {
                navigation.navigate('ProductDetails',{prod:item});
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

export default Search;

const styles = StyleSheet.create({
  container: {},

  inputbox: {
    height: 50,
    width: 390,
    borderWidth: 2,
    fontSize: 17,
    marginBottom: 5,
    borderRadius: 15,
    borderColor: '#ff8c1a',
    margin: 10,
    textAlign: 'center',
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
});
