import { StyleSheet, Platform, View, Text, Image, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import List from '@/components/List';
import { useEffect, useState } from 'react';
import Card from '@/components/Card';

export default function HomeScreen() {


const [Visibel, setVisible] = useState(true);

const cardData = [
  {
    img: require('@/assets/images/post1.png'),
    title: "Yuk, Ikuti Tes Finansial! Tes Finansial",
    tgl: "Hari ini, 12:00 WIB",
    harga: "Free"
  },

  {
    img: require('@/assets/images/poster2.png'),
    title: "Yuk, Ikuti Tes Finansial! Tes Finansial",
    tgl: "Hari ini, 12:00 WIB",
    harga: "Free"
  },

  {
    img: require('@/assets/images/post1.png'),
    title: "Yuk, Ikuti Tes Finansial! Tes Finansial",
    tgl: "Hari ini, 12:00 WIB",
    harga: "Free"
  }
];

const cardData2 = [
  {
    img: require('@/assets/images/poster2.png'),
    title: "Yuk, Ikuti Tes Finansial! Tes Finansial",
    tgl: "Hari ini, 12:00 WIB",
    harga: "Free"
  },

  {
    img: require('@/assets/images/poster1.png'),
    title: "Yuk, Ikuti Tes Finansial! Tes Finansial",
    tgl: "Hari ini, 12:00 WIB",
    harga: "Free"
  },

  {
    img: require('@/assets/images/post1.png'),
    title: "Yuk, Ikuti Tes Finansial! Tes Finansial",
    tgl: "Hari ini, 12:00 WIB",
    harga: "Free"
  }
];

useEffect(() => {
  console.log('Rendering');


  return () => {
    console.log('Unmounting');
  };
}, []);

  return (
 <SafeAreaView style={tw`bg-black h-full w-full p-4`}>
  <View style={tw`flex-row items-center justify-between`}>
    <Text style={tw`text-white text-2xl`}>Hai, Calon Sultan</Text>

    <View style={tw`flex-row`}>
      <View>
        <Ionicons name="tv-outline" size={24} color="white" style={tw`mr-2`} />
        <View style={tw`w-2 h-2 bg-red-500 rounded-full absolute -top-1 -right-1`} />
      </View>
      <Ionicons name="person-outline" size={24} color="white" style={tw`mr-2`} />
    </View>  
  </View>
{Visibel && (
    <View style={tw`bg-neutral-800 p-2 rounded-1 mt-5`}>
      <View style={tw`flex-row items-center`}>
        <Ionicons name="notifications-outline" size={24} color="white" style={tw`mr-2 bg-neutral-500 p-1 rounded-full`} />

        <View>
          <Text style={tw`text-white`}>Nikmati insight, berita dan update terkini</Text>
          <Text style={tw`text-green-400`}>nyalakan notifikasi</Text>
        </View>

        <View style={tw`flex-1 items-end`}>
          <Ionicons name="close-outline" size={24} color="white" onPress={() => setVisible(false)} />
        </View>

      </View>
    </View>
)}


    <Image source={require('@/assets/images/poster.png')} style={tw`w-100% h-30 mt-5 rounded-2xl mr-3`}></Image>

<View style={tw`flex-wrap flex-row mt-5  justify-between`}>
  <View style={tw`flex-row justify-between w-full`}>
    <List title="Modul Akademi" icon="school-outline"></List>
    <List title="Community" icon="people-outline"></List>
  </View>
  <View style={tw`flex-row justify-between w-full`}>
    <List title="Event Live" icon="videocam-outline"></List>
    <List title="Grup Diskusi" icon="chatbubbles-outline"></List>  </View>
</View>

<View style={tw`w-100% h-15 bg-neutral-800 mt-3 rounded-xl` }>
        <View style={tw`flex flex-row items-center justify-center gap-1`}>
       <Image source={require('../../assets/images/logoyu.png')} style={tw`w-25 h-15`} />
          <View style={tw``}>
            <Text style={tw`text-white text-sm font-bold`}>
              Yuk, Ikuti Tes Finansial! <Text style={tw`text-green-300`}>Tes Finansial</Text>
            </Text>
            <Text style={tw`text-neutral-500 text-xs font-bold`}>
              Dapatkan Saran & Rekomendasi Belajarmu
            </Text>
          </View>
          <MaterialIcons name="navigate-next" size={24} color="black" style={tw`ml-3 p-2 rounded-full bg-green-500`} />
        </View>
        </View>


      <View style={tw`flex-row justify-between items-center mt-5 mb-5`}>
        <Text style={tw`text-white font-bold`}>Ikuti Live Stream</Text>
        <Text style={tw`text-white`}>Lihat Semua</Text>

      </View>
      <View style={tw`p-2`}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={tw`flex-row gap-4`}>
            {cardData.map((card, index) => (
                <Card key={index} img={card.img} title={card.title} tgl={card.tgl} harga={card.harga} />
              ))}
            </View>
          </ScrollView> 

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={tw`flex-row gap-4 mt-2`}>
              {cardData2.map((card, index) => (
                <Card key={index} img={card.img} title={card.title} tgl={card.tgl} harga={card.harga} />
              ))}

            </View>
          </ScrollView>  
        </View>




       </SafeAreaView>
  );
}
