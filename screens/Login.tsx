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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import ShowAlert from "../components/ShowAlert";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Login({ navigation, route }) {
  const [isNavigation, setIsNavigation] = useState(false);
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [errors,setErrors] = useState({errorEmail:"",errorPassword:""})
  const [errorInfo,setErrorInfo] = useState(false)

  useEffect(() => {
    if (route.params.isNavigation) {
      setIsNavigation(route.params.isNavigation);
    }
  }, []);

  useEffect(() => {
    if (!email) {
      setErrors((prevState) => ({
        ...prevState,
        errorEmail: "Vui lòng nhập email của bạn",
      }));
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors((prevState) => ({
        ...prevState,
        errorEmail: "Email của bạn chưa hợp lệ",
      }));
    }else {
      setErrors((prevState) => ({
        ...prevState,
        errorEmail: "",}))
    }

    if(!password) {
      setErrors((prevState) => ({
        ...prevState,
        errorPassword: "Vui lòng nhập mật khẩu của bạn",
      }));
    } else if(password.length < 6) {
      setErrors((prevState) => ({
        ...prevState,
        errorPassword: "Mật khẩu của bạn cần ít nhất 6 ký tự",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        errorPassword: "",}))
    }
  },[email,password])

  useEffect(() => {
    if(errorInfo) ShowAlert({title:'Thông báo',message:'Email hay mật khẩu chưa đúng'})
  },[errorInfo])

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth,email,password)
      navigation.navigate("Tab", { screen: "Account" })
    } catch (error) {
    setErrorInfo(true)
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
                  Email
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
                    placeholder="Nhập email của bạn..."
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                  />
                </Pressable>
                {errors.errorEmail && (
                  <Text style={{ color: COLORS.primaryBackgroundBox }}>
                    {errors.errorEmail}
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
                    placeholder="Nhập mật khẩu của bạn..."
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    secureTextEntry={true} 
                  />
                </Pressable>
                {errors.errorPassword && (
                  <Text style={{ color: COLORS.primaryBackgroundBox }}>
                    {errors.errorPassword}
                  </Text>
                )}
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
              disabled={!email || !password}
              onPress={() => handleLogin()}
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
