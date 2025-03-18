import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtocart } from '../redux/slices/CartSlice'
import { addtowishlist } from '../redux/slices/WishListSlice'


const ProductDetails = (props:any) => {
   
    const [productDtl,setproductDtl] = useState(props.route.params.prod)
    
    const dispatch = useDispatch()

    

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri:productDtl.image}} />
      <Text style={styles.title}>{productDtl.title}</Text>
      <Text style={styles.description} numberOfLines={3}>{productDtl.description}</Text>
      <Text style={styles.category}>{productDtl.category.toUpperCase()}</Text>
      <Text style={styles.price}>Price : ${productDtl.price}</Text>
      <View style={styles.btncontainer}>
      <View style={styles.btns}>
      <TouchableOpacity onPress={()=>(dispatch(addtocart(productDtl)))} style={styles.btn}>
        <Text style={styles.btntxt}>Add to cart</Text>
      </TouchableOpacity >
      <TouchableOpacity onPress={()=>(dispatch(addtowishlist(productDtl)))} style={[styles.btn,{backgroundColor:'#99ffcc'}]}>
        <Text style={styles.btntxt}>Wishlist</Text>
      </TouchableOpacity >
      </View>
      </View>
    </ScrollView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ffffff',
    margin:5
  },
  image:{
    height:400,
    marginBottom:10
    
  },
  title:{
    fontSize:20,
    marginBottom:10
  },
  description:{
    fontSize:12,
    color:'grey',
    marginBottom:10
  },
  category:{
    fontSize:16,
    textDecorationLine:'underline',
    marginBottom:10
  },
  price:{
    fontSize:20,
    fontWeight:600,
    marginBottom:10
  },
  btncontainer:{
    alignItems:'center'
  },
  btn:{
    margin:10,
    backgroundColor:'#ffa64d',
    padding:10,
    height:50,
    width:180,
    alignItems:'center',
    borderRadius: 20,
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
  },
  btntxt:{
    fontSize:20
  },
  btns:{
    flexDirection:'row'
  }

})