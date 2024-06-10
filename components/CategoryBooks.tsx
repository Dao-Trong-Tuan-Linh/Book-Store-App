import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { COLORS } from "../theme/theme";
import { Book } from "../screens/Home";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

interface CategoryBooksProps {
  navigation: any;
  books: Book[];
  category: string;
}

export const formatNumber = (numberString: string) => {
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const numberPercent = (newPrice: string, oldPrice: string) => {
  return Math.round((1 - Number(newPrice) / Number(oldPrice)) * 100);
};

export default function CategoryBooks({
  navigation,
  books,
  category,
}: CategoryBooksProps) {
  return (
    <View
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "600" }}>{category}</Text>
        <Text style={{ color: COLORS.primaryColorLink, fontSize: 16 }}>
          Xem tất cả
        </Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          {books.map((book) => (
            <View
              key={book.bid}
              style={{
                flexDirection: "column",
                width: screenWidth * 0.5,
                borderColor: COLORS.borderColorProduct,
                borderRadius: 5,
                alignItems: "center",
                paddingBottom: 10,
                borderWidth: 1,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("DetailBook", { book })
                }
              >
                <Image
                  style={{
                    width: screenWidth * 0.4,
                    height: screenHeight * 0.25,
                    resizeMode: "contain",
                  }}
                  source={{ uri: book.images[0] }}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "column",
                  width: screenWidth * 0.4,
                  alignItems: "flex-start",
                  gap: 10,
                }}
              >
                <View style={{ height: 40 }}>
                  <Text numberOfLines={2} ellipsizeMode="tail">
                    {book.bookName}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: 10,
                  }}
                >
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={{
                        color: COLORS.textNewPrice,
                        fontWeight: "600",
                      }}
                    >
                      {formatNumber(book.newPrice)} đ
                    </Text>
                    <Text
                      style={{
                        color: COLORS.textOldPrice,
                        textDecorationLine: "line-through",
                      }}
                    >
                      {formatNumber(book.oldPrice)} đ
                    </Text>
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
                    <Text style={{ color: COLORS.textWhiteColor }}>
                      -{numberPercent(book.newPrice, book.oldPrice)}%
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    width: "100%",
                    borderColor: COLORS.borderColorProduct,
                    borderWidth: 1,
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: COLORS.primaryBackgroundBox,
                      fontWeight: "600",
                    }}
                  >
                    Mua ngay
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
