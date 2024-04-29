import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  ImageSourcePropType,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { COLORS } from "../theme/theme";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

interface ItemDetailProps {
  id: number;
  name: string;
  image: ImageSourcePropType;
  newPrice: number;
  oldPrice?: number;
}

interface ItemProps {
  item: ItemDetailProps;
}
export default function CategoryProducts({ navigation }) {
  const data = [
    {
      id: 1,
      name: "Tuổi thơ dữ dội",
      image: require("../assets/tuoi-tho-du-doi.jpg"),
      newPrice: 75000,
      oldPrice: 12000,
    },
    {
      id: 2,
      name: "Tô bình yên-Vẽ hạnh phúc",
      image: require("../assets/2.jpg"),
      newPrice: 75000,
      oldPrice: 12000,
    },
    {
      id: 3,
      name: "Trôn lên mái nhà để khóc",
      image: require("../assets/3jpg.jpg"),
      newPrice: 75000,
      oldPrice: 12000,
    },
    {
      id: 4,
      name: "Thương",
      image: require("../assets/4.jpg"),
      newPrice: 75000,
      oldPrice: 12000,
    },
  ];

  const Item = ({ item }: ItemProps) => {
    const isEven = item.id % 2 == 0;
    return isEven ? (
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "column",
          width: screenWidth * 0.47,
          alignItems: "flex-start",
          marginLeft: screenWidth * 0.01,
          marginRight: screenWidth * 0.02,
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
            source={item.image}
          />
        </View>
        <View style={{ marginLeft: 20, marginRight: 20,flexDirection:'column',gap:10 }}>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
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
      </View>
    ) : (
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "column",
          width: screenWidth * 0.47,
          alignItems: "flex-start",
          marginRight: screenWidth * 0.01,
          marginLeft: screenWidth * 0.02,
          paddingBottom: 10,
          marginTop: 10,
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
            source={item.image}
          />
        </View>
        <View style={{ marginLeft: 20, marginRight: 20,flexDirection:'column',gap:10 }}>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
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
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          height: 60,
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
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="rgb(85, 85, 85)" />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, fontWeight: "500" }}>Văn học</Text>
        </View>
      </View>
      <View
        style={{
          height: 50,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
            <Text style={{ fontSize: 18 }}>Mặc định</Text>
            <FontAwesome6
              name="arrow-right-arrow-left"
              size={16}
              color={COLORS.primaryBackgroundBox}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
            <AntDesign name="filter" size={16} color="rgb(85, 85, 85)" />
            <Text style={{ fontSize: 18 }}>Bộ lọc</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={{ backgroundColor: "#f5f5f5", width: screenWidth }}
        numColumns={2}
        data={data}
        renderItem={Item}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
