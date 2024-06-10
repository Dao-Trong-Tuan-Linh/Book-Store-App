import React, { useState, useEffect } from "react";
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
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import { auth,db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import ShowAlert from "../components/ShowAlert";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Register({ navigation, route }) {
  const [isNavigation, setIsNavigation] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    errorFullName: "",
    errorPhone: "",
    errorEmail: "",
    errorPassword: "",
  });
  

  useEffect(() => {
    if (route.params.isNavigation) {
      setIsNavigation(route.params.isNavigation);
    }
  }, []);

  useEffect(() => {
    if (!fullName) {
      setError((prevState) => ({
        ...prevState,
        errorFullName: "Vui lòng nhập họ tên của bạn",
      }));
    } else {
      setError((prevState) => ({ ...prevState, errorFullName: "" }));
    }

    if (!email) {
      setError((prevState) => ({
        ...prevState,
        errorEmail: "Vui lòng nhập email của bạn",
      }));
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError((prevState) => ({
        ...prevState,
        errorEmail: "Email của bạn chưa hợp lệ",
      }));
    }else {
      setError((prevState) => ({
        ...prevState,
        errorEmail: "",}))
    }

    if(!phone) {
      setError((prevState) => ({
        ...prevState,
        errorPhone: "Vui lòng nhập số điện thoại của bạn",
      }));
    } else if(phone.length != 10) {
      setError((prevState) => ({
        ...prevState,
        errorPhone: "Số điện thoại chưa hợp lệ",
      }));
    }else {
      setError((prevState) => ({
        ...prevState,
        errorPhone: "",}))
    }

    if(!password) {
      setError((prevState) => ({
        ...prevState,
        errorPassword: "Vui lòng nhập mật khẩu của bạn",
      }));
    } else if(password.length < 6) {
      setError((prevState) => ({
        ...prevState,
        errorPassword: "Mật khẩu của bạn cần ít nhất 6 ký tự",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        errorPassword: "",}))
    }
  }, [fullName, password, phone,email]);

  const handleRegister = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user,{
        displayName:fullName,
      })
      await setDoc(doc(db,"users",res.user.uid),{
        uid:res.user.uid,
        fullName,
        email,
        phone
      })
      await setDoc(doc(db,"carts",res.user.uid),{
        uid:res.user.uid,
        books:[]
      })
      navigation.navigate("Tab", { screen: "Login" })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DismissKeyboard>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 50 }}>
          {isNavigation ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Tab", { screen: "Account" })
                }
              >
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
            <Text style={{ fontSize: 24, fontWeight: "600" }}>Đăng ký</Text>
            <View style={{ marginTop: 30, gap: 20 }}>
              <View style={{ gap: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>Họ tên</Text>
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
                    placeholder="Nhập họ tên"
                    value={fullName}
                    onChangeText={(e) => setFullName(e)}
                  />
                </Pressable>
                {error.errorFullName && (
                  <Text style={{ color: COLORS.primaryBackgroundBox }}>
                    {error.errorFullName}
                  </Text>
                )}
              </View>
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
                    value={phone}
                    onChangeText={(e) => setPhone(e)}
                  />
                </Pressable>
                {error.errorPhone && (
                  <Text style={{ color: COLORS.primaryBackgroundBox }}>
                    {error.errorPhone}
                  </Text>
                )}
              </View>
              <View style={{ gap: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>Email</Text>
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
                    placeholder="Nhập email"
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                  />
                </Pressable>
                {error.errorEmail && (
                  <Text style={{ color: COLORS.primaryBackgroundBox }}>
                    {error.errorEmail}
                  </Text>
                )}
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
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    secureTextEntry={true} 
                  />
                </Pressable>
                {error.errorPassword && (
                  <Text style={{ color: COLORS.primaryBackgroundBox }}>
                    {error.errorPassword}
                  </Text>
                )}
              </View>
            </View>
            <TouchableOpacity
            onPress={() => handleRegister()}
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
                Đăng ký
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
          <Text>Bạn đã có tài khoản?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login", { isNavigation: true })}
          >
            <Text style={{ color: COLORS.primaryBackgroundColor }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    </DismissKeyboard>
  );
}
