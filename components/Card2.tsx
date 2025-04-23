import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Card2 = ({title, img, btn, desc}: any) => {
  return (
    <View style={tw`bg-neutral-800 w-80 rounded-xl shadow-lg overflow-hidden`}>
      <Image source={img} style={tw`w-100% h-40`} />
      <View style={tw`p-4`}>
        <Text style={tw`text-lg font-bold mb-2 text-white`}>{title}</Text>
        <View style={tw`flex-row justify-between items-center mt-2`}>
          <Text style={tw`text-xs text-gray-400 flex-1 mr-4 `}>{desc}</Text>
          <TouchableOpacity style={tw`bg-white px-8 py-2 rounded-lg`}>
            <Text style={tw`text-sm font-semibold`}>{btn}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>  
    )
}

export default Card2