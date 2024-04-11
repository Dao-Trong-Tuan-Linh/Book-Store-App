import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Platform,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { COLORS } from "../theme/theme";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "pinar"

export default function DetailBook({ navigation }) {
  const images = [
    {id:0,img:require("../assets/tuoi-tho-du-doi.jpg")},{id:1,img:require("../assets/truyen-thieu-nhi.jpg")}
  ]
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 80,
          backgroundColor: COLORS.primaryBackgroundBox,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            paddingLeft: 15,
            paddingRight: 10,
            paddingBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Tab", { screen: "Home" })}
            >
              <AntDesign name="home" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <AntDesign name="shoppingcart" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={{ backgroundColor: "#e8e8e8" }}>
        <View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "white",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                paddingBottom: 8,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height:'100%'
              }}
            >
              <View
                style={{
                  width: 300,
                  height: 300,
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              >
                <Carousel showsControls={false}>
                {images.map((item) => (
                  <Image
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  source={item.img}
                  key={item.id}
                />
                ))}
                </Carousel>
              </View>

            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: "white",
          ...Platform.select({
            ios: {
              shadowColor: "#ccc",
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.7,
              shadowRadius: 4,
            },
            android: {
              elevation: 8,
            },
          }),
          flexDirection: "row",
        }}
      >
        <View
          style={{
            paddingHorizontal: 10,
            width: "30%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderRightWidth: 1,
            borderRightColor: "#666",
          }}
        >
          <TouchableOpacity>
            <AntDesign name="minus" size={20} color="#666" />
          </TouchableOpacity>
          <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>
            1
          </Text>
          <TouchableOpacity>
            <AntDesign name="plus" size={20} color="#666" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "40%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: COLORS.textNewPrice,
            }}
          >
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "30%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.primaryBackgroundBox,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
            Mua ngay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
