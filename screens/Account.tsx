import React from "react"
import { AntDesign } from "@expo/vector-icons"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useRef, useState } from "react"
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ToastAndroid, SafeAreaView, Platform, Pressable, Image, Button } from "react-native"
// import {SliderBox} from "react-native-image-slider-box"
import { COLORS } from "../theme/theme"
export default function Account() {
  return (
    <SafeAreaView style={{ padding: Platform.OS === "android" ? 40 : 0, flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
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
                <MaterialIcons name="payment" size={27} color="black" />
              </View>
              <Text style={{ marginTop: 3 }}>Chờ thanh toán</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              marginLeft: 25,
            }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <AntDesign name="inbox" size={27} color="black" />
              </View>
              <Text style={{ marginTop: 3 }}>Đang xử lý</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              marginLeft: 25,
            }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <MaterialCommunityIcons name="truck-fast-outline" size={27} color="black" />
              </View>
              <Text style={{ marginTop: 3 }}>Đang giao</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              marginLeft: 25,
            }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <SimpleLineIcons name="badge" size={27} color="black" />
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
            <EvilIcons name="heart" size={34} color="black" />
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
            <EvilIcons name="like" size={34} color="black" />
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
            <MaterialCommunityIcons name="account" size={34} color="black" />
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
            <MaterialCommunityIcons name="message-question-outline" size={34} color="black" />
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
            <FontAwesome5 name="birthday-cake" size={34} color="black" />
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
            <Ionicons name="document-text-outline" size={34} color="black" />
            <Text style={{ fontSize: 17, marginLeft: 10 }}>Chính sách Tích điểm-Tiêu điểm</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 10, marginBottom: 10, marginHorizontal: 20, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
          <TouchableOpacity
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Feather name="shield" size={34} color="black" />
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
            <AntDesign name="contacts" size={34} color="black" />
            <Text style={{ fontSize: 17, marginLeft: 10 }}>Liên hệ với TokyoLife</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 10, marginBottom: 10, marginHorizontal: 20, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
          <TouchableOpacity
            style={{
              marginTop: 10,
              marginBottom: 50,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Feather name="phone" size={34} color="black" />
            <Text style={{ fontSize: 17, marginLeft: 10 }}>Hotline 0364494459</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
