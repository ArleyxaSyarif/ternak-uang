import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '@/components/Button'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

const signup = () => {
  return (
    <SafeAreaView style={tw`bg-black h-full w-full p-4`}>
      <View>
        
                  <View style={tw`flex-row items-center relative mb-5`}>
                    <Ionicons style={tw`text-gray-500 absolute left-0`} name="arrow-back" size={24} color="white" />
                    <Text style={tw`text-white text-2xl font-bold flex-1 text-center`}>Daftar</Text>
                  </View>        
          <View style={tw`flex-col mt-50`}>
              <TextInput placeholder='Email' style={tw`bg-neutral-800 border border-gray-400 p-4 rounded-xl mt-5 text-white`} placeholderTextColor={"white"}/>
              <TextInput placeholder='Password' style={tw`bg-neutral-800 border border-gray-400 p-4 rounded-xl mt-5 mb-5`} placeholderTextColor={"white"}/>
              
              <Link href="/auth/signin" asChild>
                <TouchableOpacity>
                  <Button title="Daftar" warna=""></Button>
                </TouchableOpacity>
              </Link>


                <Text style={tw`text-gray-500 mt-3`}>Dengan mendaftar kamu menyetujui Syarat dan Ketentuan. </Text>
                <Text style={tw`text-gray-500`}>Privacy Police dan Disclaimer.</Text>
        
              </View>    

       
          
  

      </View>
    </SafeAreaView>
  )
}

export default signup