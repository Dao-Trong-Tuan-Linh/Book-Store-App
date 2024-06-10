import React,{useState} from 'react'
import {View,Pressable,TextInput,TouchableOpacity} from "react-native"
import { COLORS } from '../theme/theme'
import { AntDesign } from "@expo/vector-icons";
import { Book } from '../screens/Home';
import { collection, query, where, limit, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function HeaderHome({navigation}) {
  const [searchQuery,setSearchQuery] = useState("")
  
  return (
    <View
    style={{
      height:100,
      backgroundColor: COLORS.primaryBackgroundBox,
      padding: 10,
    }}
  >
    <View
      style={{
        marginTop:45,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingRight: 15,
      }}
    >
      <Pressable  
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 7,
          gap: 10,
          backgroundColor: "white",
          borderRadius: 3,
          height: 38,
          flex: 1,
        }}
      >
        <AntDesign
          style={{ paddingLeft: 10 }}
          name="search1"
          size={22}
          color="black"
        />
        <TextInput
        value={searchQuery}
        onChangeText={(e) => setSearchQuery(e)}
        onSubmitEditing={() => navigation.navigate("SearchBooks",{searchQuery})}
          style={{ width: "100%" }}
          placeholder="Nhập sách cần tìm ở đây"
        />
      </Pressable>
      <TouchableOpacity
        style={{ position: "relative" }}
        onPress={() => navigation.navigate("Cart")}
      >
        <AntDesign name="shoppingcart" size={28} color="white" />
        {/* <View
          style={{
            position: "absolute",
            top: -10,
            left: 10,
            width: 24,
            height: 24,
            borderRadius: 50,
            backgroundColor: COLORS.primaryBackgroundBox,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "500" }}>5</Text>
        </View> */}
      </TouchableOpacity>
    </View>
  </View>
  )
}
