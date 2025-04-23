import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import Button from '@/components/Button'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'

const signin = () => {
  return (
    <SafeAreaView style={tw`bg-black h-full w-full p-4`}>
      <View>
        <View style={tw`flex flex-col items-end `}>
          <Text style={tw`text-gray-500`}>Lewati</Text>
        </View>
        
          <View style={tw`flex-col mt-50`}>
              <Text style={tw`text-white text-2xl font-bold`}>TERNAKUANG</Text>
              <TextInput placeholder='Email' style={tw`bg-neutral-800 border border-gray-400 p-4 rounded-xl mt-5 text-white`} placeholderTextColor={"white"}/>
              <TextInput placeholder='Password' style={tw`bg-neutral-800 border border-gray-400 p-4 rounded-xl mt-5`} placeholderTextColor={"white"}/>
              <View style={tw`flex-row justify-between mt-2`}>
                <TouchableOpacity>
                  <Text style={tw`text-gray-400`}>Ingatkan Saya</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={tw`text-gray-400`}>Lupa Password?</Text>
                </TouchableOpacity>
              </View>


              <Link href="/(tabs)/home" asChild>
                <TouchableOpacity>
                   <Button title="Login" warna=""/>
                </TouchableOpacity>
              </Link>

              <Text style={tw`text-gray-400 text-center mt-2`}>Belum Punya Akun? <Link href="/auth/signup" style={tw`text-green-400`}>Daftar</Link></Text>

              <Text style={tw`text-gray-500 text-center mt-14`}>Atau Masuk Melalui</Text>
              <Text style={tw`border-b border-gray-600`}/>
              <View style={tw`flex-row justify-center gap-5 mt-4`}>
                <Ionicons style={tw`border border-gray-500 p-4 rounded-3`} name="logo-google" size={24} color="white" />
                <Ionicons style={tw`border border-gray-500 p-4 rounded-3`} name="logo-apple" size={24} color="white" />
              </View>
              </View>    

       
          
  

      </View>
    </SafeAreaView>
  )
}

export default signin