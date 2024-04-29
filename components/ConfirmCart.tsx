import React from "react";
import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../theme/theme";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

interface ConfirmCartProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: any;
}
export default function ConfirmCart({
  isVisible,
  setIsVisible,
  navigation,
}: ConfirmCartProps) {
  return (
    <Modal
      style={{ flex: 1 }}
      isVisible={isVisible}
      deviceWidth={screenWidth}
      deviceHeight={screenHeight}
    >
      <View
        style={{
          paddingHorizontal: 10,
          paddingTop: 20,
          paddingBottom: 40,
          backgroundColor: "white",
          gap: 30,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <AntDesign
            name="checkcircle"
            size={32}
            color={COLORS.primaryYellowColor}
          />
          <Text>Sản phẩm đã được thêm vào giỏ hàng</Text>
        </View>
        <View style={{ gap: 20 }}>
          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            style={{
              width: "100%",
              height: 60,
              backgroundColor: COLORS.buttonBrownColor,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#333" }}>Tiếp tục mua hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cart")
              setIsVisible(false)
            }}
            style={{
              width: "100%",
              height: 60,
              backgroundColor: COLORS.primaryYellowColor,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Xem giỏ hàng & thanh toán</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
