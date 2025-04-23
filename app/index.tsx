import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Button from '@/components/Button'
import { Link } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView style={tw`bg-black h-full w-full p-4`}>
      <View>
        <View style={tw`flex flex-col items-end `}>
          <Text style={tw`text-gray-500`}>Lewati</Text>
        </View>



        
        <View style={tw`mx-auto`}>
            <Image source={require('../assets/images/Bg-hp.png')} style={tw`w-90 h-120`} />
            <Image source={require('../assets/images/bg-hp2.png')} style={tw`w-50 h-30 mt-[-380] rounded-2xl`} />
            <Image source={require('../assets/images/bg-hp3.png')} style={tw`w-30 h-20 mt-[-130] ml-55 rounded-2xl`} />
            <Image source={require('../assets/images/bg-hp4.png')} style={tw`w-30 h-20 mt-1 ml-55 rounded-2xl`} />
            <View style={tw`w-40 h-10 rounded-2xl bg-neutral-700 mt-[-10] ml-10 flex-row`}>
                <Image source={require('../assets/images/bg-pause.png')} style={tw`w-10 h-10 mt-[-2]`} />
                <View style={tw`w-20 h-10 ml-[-30]`}>
            <View style={tw`w-25 rounded-2xl ml-10 mt-2.5  h-1.5 bg-gray-500`} />
            <View style={tw`w-25 rounded-2xl ml-10 mt-2 h-1.5 bg-gray-500`} />
            <View style={tw`w-13 rounded-2xl ml-10 mt-[-6] h-1.5 bg-green-500`} />
                </View>
            </View>
            <View style={tw`ml-5 mt-5`}>
                <View style={tw`w-16 rounded-2xl ml-25 h-0.8 bg-gray-500`} />
                <View style={tw`w-23 rounded-2xl ml-25 mt-2 h-0.8 bg-gray-500`} />
                <View style={tw`w-27 ml-25 mt-2 rounded-2xl h-0.8 bg-gray-500`} />
                <View style={tw`w-14 ml-25 mt-2 h-0.8 rounded-2xl bg-gray-500`} />
                <View style={tw`w-18 ml-25 mt-2 h-0.8 bg-gray-500 rounded-2xl`} />
            </View>
        </View>



        <View style={tw`flex-col items-center mt-24`}>
          <Text style={tw`text-white text-2xl font-bold text-center`}>Belajar Investasi</Text>
          <Text style={tw`text-white text-2xl font-bold text-center`}> & Keuangan Pribadi</Text>
          <Text style={tw`text-gray-500 mt-4 text-center`}>Belajar paling gampang praktis & interaktif dengan</Text>
          <Text style={tw`text-gray-500 text-center`}>menonton video secara online dengan lebih dadri 150+ Videos</Text>
          <Text style={tw`text-gray-500 text-center`}>dari mention yang sudah ahli di bidangnya</Text>
        </View>

        <Link href="/auth/signin" asChild>
            <TouchableOpacity>
              <Button title="Mulai Sekarang" warna="black" />
            </TouchableOpacity>
        </Link>

        <TouchableOpacity style={tw`flex-col items-center mt-4 border border-white rounded-lg p-4`}>
          <Text style={tw`text-white text-center`}>Login</Text>
        </TouchableOpacity>
          
  

      </View>
    </SafeAreaView>
  )
}

export default index