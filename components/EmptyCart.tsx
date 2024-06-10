import React from 'react'
import {View,Image,Text,TouchableOpacity} from "react-native"
export default function EmptyCart({navigation}) {
  return (
    <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 20,
          backgroundColor:'#f5f5f5'
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/empty-cart.png")}
        />
        <Text>Bạn chưa có sản phẩm trong giỏ hàng</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tab", { screen: "Home" })}
          style={{
            width: 200,
            height: 50,
            backgroundColor: "#ff9227",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
            Mua sắm ngay
          </Text>
        </TouchableOpacity>
      </View> 
  )
}
