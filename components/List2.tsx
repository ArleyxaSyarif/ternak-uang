import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const List2 = ({ title, img }: { title: string, img: any }) => {
  return (
    <View style={tw` items-center`}>
        <Image source={img} style={tw`w-10 h-10 rounded-full bg-neutral-800 p-5`} />
        <Text style={tw`text-white text-center mt-1`}>{title}</Text>        
    </View>  )
}
export default List2

const styles = StyleSheet.create({})