import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { COLORS } from "../theme/theme";
import { AntDesign } from "@expo/vector-icons";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Login({ navigation, route }) {
  const [isNavigation, setIsNavigation] = useState(false);

  useEffect(() => {
    if (route.params.isNavigation) {
      setIsNavigation(route.params.isNavigation);
    }
  }, []);
  return (
    <DismissKeyboard>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>
          {isNavigation ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color="#999" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Tab',{screen:'Account'})}>
                <Text style={{ fontSize: 16, color: "#999" }}>Bỏ qua</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ alignItems: "flex-end" }}
            >
              <AntDesign name="close" size={24} color="black" />
            </Pressable>
          )}
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontSize: 24, fontWeight: "600" }}>Đăng nhập</Text>
            <View style={{ marginTop: 30, gap: 20 }}>
              <View style={{ gap: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                  Số điện thoại
                </Text>
                <Pressable
                  style={{
                    height: 40,
                    borderColor: "#222",
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingLeft: 10,
                  }}
                >
                  <TextInput
                    style={{ width: "100%", height: "100%" }}
                    placeholder="Nhập số điện thoại"
                    keyboardType="numeric"
                  />
                </Pressable>
              </View>
              <View style={{ gap: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                  Mật khẩu
                </Text>
                <Pressable
                  style={{
                    height: 40,
                    borderColor: "#222",
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingLeft: 10,
                  }}
                >
                  <TextInput
                    style={{ width: "100%", height: "100%" }}
                    placeholder="Nhập mật khẩu"
                  />
                </Pressable>
              </View>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 30,
                backgroundColor: COLORS.primaryBackgroundBox,
                height: 46,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Text>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Register", { isNavigation: true })
            }
          >
            <Text style={{ color: COLORS.primaryBackgroundColor }}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
}
