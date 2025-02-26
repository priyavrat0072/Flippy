import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const categories = () => {
  const products = useSelector(state=>state)
  console.log('selectorProducts',products)
  return (
    <View>
      <Text>categories</Text>
    </View>
  )
}

export default categories

const styles = StyleSheet.create({})