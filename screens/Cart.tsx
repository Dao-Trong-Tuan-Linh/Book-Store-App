import React from 'react'
import {View,Text, TouchableOpacity} from "react-native"
import { COLORS } from '../theme/theme'
import { AntDesign } from '@expo/vector-icons';


export default function Cart({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.primaryBackgroundBox, height: 80, flexDirection: 'row', alignItems: 'flex-end', paddingLeft: 20,paddingBottom:15 }}>
        <TouchableOpacity style={{zIndex:1}} onPress={() => navigation.navigate('Tab',{screen:'Home'})}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <View style={{ position: 'absolute', left: 0, right: 0,bottom:15, alignItems: 'center' }}>
          <Text style={{ color: 'white',fontSize:16,fontWeight:'600' }}>Giỏ hàng</Text>
        </View>
      </View>
    </View>
  )
}
