import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const Button = ({title, warna}) => {
  return (
    <View style={tw`bg-green-400 p-2 rounded-xl mt-5`}>
      <Text style={tw`text-center font-bold text-lg text-[${warna}]`}>{title}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})