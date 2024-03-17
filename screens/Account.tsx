import React from "react"
import { AntDesign } from "@expo/vector-icons"
import { useRef, useState } from "react"
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ToastAndroid, SafeAreaView, Platform, Pressable, Image, Button } from "react-native"
// import {SliderBox} from "react-native-image-slider-box"
import { COLORS } from "../theme/theme"
export default function Account() {
  return (
    <SafeAreaView style={{ padding: Platform.OS === "android" ? 40 : 0, flex: 1, backgroundColor: 'white' }}>
      <View>
        <View style={{
          backgroundColor: COLORS.primaryBackgroundColor,
          paddingBottom: 40,
        }}>
          <View>
            <Image style={{ width: 100, height: 30, borderTopRightRadius: 80, borderBottomRightRadius: 80 }} source={require('../assets/tokyolifelogo.webp')} />
          </View>
          <View style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ color: 'white', textAlign: 'center', borderRadius: 5, width: 400, height: 40, fontWeight: 'bold', fontSize: 40, letterSpacing: 7 }}>TOKYOLIFE</Text>
            <Text style={{ color: 'white', padding: 10, textAlign: 'center', borderRadius: 5, width: 400, height: 50, fontSize: 16 }}> Kết nối để nhận nhiều ưu đãi</Text>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <TouchableOpacity
                onPress={() => {
                  /* Xử lý khi nhấn vào nút đăng nhập */
                }}
                style={{
                  backgroundColor: COLORS.primaryBackgroundColor,
                  borderRadius: 5,
                  width: 130,
                  height: 30,
                  borderWidth: 1,
                  borderColor: 'white',
                  marginTop: 20,
                  marginHorizontal: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ color: 'white', fontSize: 17 }}>Đăng nhập</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  /* Xử lý khi nhấn vào nút đăng ký */
                }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 50,
                  width: 130,
                  height: 30,
                  marginTop: 20,
                  marginHorizontal: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ color: 'black', fontSize: 17 }}>Đăng ký</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </View>
      <View style={{
        marginTop: 20,
        backgroundColor: "#DCDCDC",
        paddingBottom: 50
      }}>
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <Text style={{ fontWeight: 'bold', marginRight: 77, marginLeft: 20, fontSize: 16 }}>Đơn hàng của tôi</Text>
          <TouchableOpacity>
            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16, marginLeft: 77, marginRight: 20 }}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          marginTop: 15,
          // marginLeft: 30,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <TouchableOpacity style={{
            marginLeft: 25,
          }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 30, height: 30 }} source={require('../assets/checkout.png')} />
            </View>
            <Text style={{ marginTop: 3 }}>Chờ thanh toán</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            marginLeft: 25,
          }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 30, height: 30 }} source={require('../assets/box.png')} />
            </View>
            <Text style={{ marginTop: 3 }}>Đang xử lý</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            marginLeft: 25,
          }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 30, height: 30 }} source={require('../assets/truck.png')} />
            </View>
            <Text style={{ marginTop: 3 }}>Đang giao</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            marginLeft: 25,
          }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 30, height: 30 }} source={require('../assets/badge.png')} />
            </View>
            <Text style={{ marginTop: 3 }}>Đã giao</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <Image style={{ width: 30, height: 30 }} source={require('../assets/heart.png')} />
          <Text style={{ fontSize: 17, marginLeft: 10 }}>Sản phẩm yêu thích</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 10, marginBottom: 10, marginHorizontal: 20, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
        <TouchableOpacity
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <Image style={{ width: 30, height: 30 }} source={require('../assets/like.png')} />
          <Text style={{ fontSize: 17, marginLeft: 10 }}>Đánh giá của tôi</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 10, marginBottom: 10, marginHorizontal: 20, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
        <TouchableOpacity
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <Image style={{ width: 30, height: 30 }} source={require('../assets/user.png')} />
          <Text style={{ fontSize: 17, marginLeft: 10 }}>Thông tin tài khoản</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 10, marginBottom: 10, marginHorizontal: 20, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
        <TouchableOpacity
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <Image style={{ width: 30, height: 30 }} source={require('../assets/comment.png')} />
          <Text style={{ fontSize: 17, marginLeft: 10 }}>Hỗ trợ khách hàng</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 10, marginBottom: 10, marginHorizontal: 20, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
        <TouchableOpacity
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <Image style={{ width: 30, height: 30 }} source={require('../assets/birthday-cake.png')} />
          <Text style={{ fontSize: 17, marginLeft: 10 }}>Chính sách sinh nhật App member</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 10, marginBottom: 10, marginHorizontal: 20, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
        <TouchableOpacity
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <Image style={{ width: 30, height: 30 }} source={require('../assets/document.png')} />
          <Text style={{ fontSize: 17, marginLeft: 10 }}>Chính sách tích điểm tiêu điểm</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 10, marginBottom: 10, marginHorizontal: 20, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
        <TouchableOpacity
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <Image style={{ width: 30, height: 30 }} source={require('../assets/shield.png')} />
          <Text style={{ fontSize: 17, marginLeft: 10 }}>Chính sách bảo mật</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 10, marginBottom: 10, marginHorizontal: 20, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
        <TouchableOpacity
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <Image style={{ width: 30, height: 30 }} source={require('../assets/contact.png')} />
          <Text style={{ fontSize: 17, marginLeft: 10 }}>Liên hệ với TokyoLife</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 10, marginBottom: 10, marginHorizontal: 20, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
        <TouchableOpacity
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <Image style={{ width: 30, height: 30 }} source={require('../assets/phone.png')} />
          <Text style={{ fontSize: 17, marginLeft: 10 }}>Hotline 0364494459</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
