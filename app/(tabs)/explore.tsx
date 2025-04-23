import { StyleSheet, Image, Platform, View, Text, ScrollView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';
import { useState } from 'react';
import Card from '@/components/Card';
import List from '@/components/List';
import List2 from '@/components/List2';
import Card2 from '@/components/Card2';

export default function TabTwoScreen() {
  
const [Visibel, setVisible] = useState(true);

const listData = [
  {
    title: "Manajemen Income",
    img: require('@/assets/images/income.png')
  },  
  {
    title: "Asuransi",
    img: require('@/assets/images/asuransi.png')
  },  
  {
    title: "Saham",
    img: require('@/assets/images/saham.png')
  },  
  {
    title: "Reksa Dana",
    img: require('@/assets/images/dana.png')
  },  
]

const listData2 = [
  {
    title: "Crypto currency",
    img: require('@/assets/images/crypto.png')
  },  
  {
    title: "Peer to Peer Lending",
    img: require('@/assets/images/peer.png')
  },  
  {
    title: "Obligasi",
    img: require('@/assets/images/obligasi2.png')
  },  
  {
    title: "Lainnya",
    img: require('@/assets/images/lain.png')
  },  
]

const cardData = [
  {
    title: "Modul Akademi",
    img: require('@/assets/images/poster1.png'),
    btn: "Lihat",
    desc: "Modul akademi"
  },
  {
    title: "Modul Akademi",
    img: require('@/assets/images/post1.png'),
    btn: "Lihat",
    desc: "Modul akademi"
  },
  {
    title: "Modul Akademi",
    img: require('@/assets/images/post1.png'),
    btn: "Lihat",
    desc: "Modul akademi"
  },
]


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

<View style={tw`bg-neutral-900 p-2 rounded-5 mt-5 h-53 w-100%`}>
    <View style={tw`flex-row flex-wrap justify-between`}>
       {listData.map((item, index) => (
        <View key={index} style={tw`w-1/4 p-1`}>
          <List2 title={item.title} img={item.img}></List2>
        </View>
      ))}
    </View>
    <View style={tw`flex-row flex-wrap justify-between mt-4`}>
    {listData2.map((item, index) => (
        <View key={index} style={tw`w-1/4 p-1`}>
          <List2 title={item.title} img={item.img}></List2>
        </View>
      ))}
    </View>
</View>





      <View style={tw`flex-row justify-between items-center mt-5 mb-5`}>
        <Text style={tw`text-white font-bold`}>🎉 Terbaru di ternak uang</Text>

      </View>
      <View style={tw`p-2`}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           
                       
           
          </ScrollView> 

          

               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View  style={tw`bg-transparent h-70 w-full mt-8 flex-row gap-8`}>
                        {cardData.map((item, index) => (
                          <View key={index} style={tw`bg-neutral-800 p-2 rounded-1`}>
                            <Card2 title={item.title} img={item.img} btn={item.btn} desc={item.desc}></Card2>
                          </View>
                        ))}
                    </View>
               </ScrollView>          
                    
        </View>

        <View style={tw`flex-row justify-between items-center mt-5 mb-5`}>
        <Text style={tw`text-white font-bold`}>Stock Watchlist</Text>
        <Text style={tw`text-white font-bold`}>Lihat Semua</Text>


      </View>



        

       </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
