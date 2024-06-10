import React, { useMemo, useRef } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { COLORS } from "../theme/theme";
import DialogBottom from "../components/DialogBottom";
import BottomSheet from "@gorhom/bottom-sheet";
import useGetBooksByCategory from "../hooks/useGetBooksByCategory";
import { Book } from "./Home";
import useSearchBooks from "../hooks/useSearchBooks";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;



interface ItemProps {
  item: Book;
}

export default function CategoryProducts({ navigation,route }) {
  console.log(route.params.searchQuery)
  const bottomSheetRef = useRef<BottomSheet>(null);

  const Item = ({ item }: ItemProps) => {
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate("DetailBook", { book:item })}
      style={{
        backgroundColor: "white",
        flexDirection: "column",
        width: screenWidth * 0.47,
        alignItems: "flex-start",
        marginLeft: screenWidth * 0.01,
        marginRight: screenWidth * 0.01,
        marginTop: 10,
        paddingBottom: 10,
      }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: screenWidth * 0.4,
            height: screenHeight * 0.3,
            resizeMode: "contain",
          }}
          source={{ uri: `${item.images[0]}` }}
        />
      </View>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          flexDirection: "column",
          gap: 10,
        }}
      >
        <View style={{ height: 40 }}>
          <Text style={{ fontSize: 16 }} numberOfLines={2}>
            {item.bookName}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                color: COLORS.textOldPrice,
                textDecorationLine: "line-through",
                fontSize: 16,
              }}
            >
              {item.oldPrice}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: COLORS.textNewPrice,
                  fontWeight: "600",
                  fontSize: 18,
                }}
              >
                {item.newPrice}
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: 3,
              borderRadius: 2,
              backgroundColor: COLORS.primaryBackgroundBox,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: COLORS.textWhiteColor }}>-20%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    )
  };
  const {loading,books} = useSearchBooks(route.params.searchQuery)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          height: 90,
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          alignItems: "flex-start",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 10,
            paddingLeft: 20,
            gap: 120,
            position:'relative'
          }}
        >
          <TouchableOpacity style={{position:'absolute',left:20,bottom:20}} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="rgb(85, 85, 85)" />
          </TouchableOpacity>
          <View style={{position:'absolute',left:130,bottom:20}}>
          <Text style={{ fontSize: 22, fontWeight: "500"}}>Kết quả tìm kiếm</Text>
          </View>
        </View>
      </View>
      <FlatList
        style={{ backgroundColor: "#f5f5f5", width: screenWidth }}
        numColumns={2}
        data={books}
        renderItem={Item}
        keyExtractor={(item) => item.bid}
      />
      <DialogBottom bottomSheetRef={bottomSheetRef} />
    </SafeAreaView>
  );
}

