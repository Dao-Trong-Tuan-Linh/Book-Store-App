import React from "react";
import { BookCart } from "../screens/DetailBook";
import { View, Image, Text, Dimensions } from "react-native";
import { formatNumber } from "../components/CategoryBooks";
import { COLORS } from "../theme/theme";

interface CheckOrderProps {
  cart: BookCart[];
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function CheckOrder({ cart }: CheckOrderProps) {
  return (
    <View style={{ gap: 5, marginBottom: 120 }}>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>
        Kiểm tra lại đơn hàng
      </Text>
      {cart.map((b) => (
        <View
          key={b.bid}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderTopColor: "#e6e9ec",
            borderTopWidth: 1,
          }}
        >
          <Image
            style={{
              width: screenWidth * 0.36,
              height: screenHeight * 0.2,
              resizeMode: "contain",
            }}
            source={{ uri: b.image }}
          />
          <View style={{ gap: 5 }}>
            <Text numberOfLines={4}>{b.bookName}</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text
                style={{
                  color: COLORS.textNewPrice,
                  fontWeight: "600",
                }}
              >
                {formatNumber(b.newPrice)} đ
              </Text>
              <Text
                style={{
                  color: COLORS.textOldPrice,
                  textDecorationLine: "line-through",
                }}
              >
                {formatNumber(b.oldPrice)} đ
              </Text>
            </View>
            <Text>Số lượng:{b.quantity}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
