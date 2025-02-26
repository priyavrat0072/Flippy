import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtocart } from '../redux/slices/CartSlice'


const ProductDetails = (props:any) => {
    // console.log(props.route.params.prod)
    const [productDtl,setproductDtl] = useState(props.route.params.prod)
    // console.log('productDtl--------',productDtl)
    const dispatch = useDispatch()

    

  return (
    <View>
      <Image style={{height:200,width:200}} source={{uri:productDtl.image}} />
      <Text>{productDtl.title}</Text>
      <Text>{productDtl.description}</Text>
      <Text>{productDtl.category}</Text>
      <Text>{productDtl.price}</Text>
      <TouchableOpacity onPress={()=>(dispatch(addtocart(productDtl)))}>
        <Text style={{fontSize:30}}>Add to cart</Text>
      </TouchableOpacity >
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})