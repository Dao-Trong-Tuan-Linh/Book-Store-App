import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Pressable,
  TouchableOpacity
} from "react-native";
import { COLORS } from "../theme/theme";

const screenWidth = Dimensions.get("window").width;

export default function Account({ navigation, route }) {
  //  const navigation = useNavigation()
  return (
    <>
    <ScrollView style={{width:screenWidth,flex:1,backgroundColor:'white'}}>
        <View style={{width:screenWidth}}>
        <View style={{position:'relative',alignItems:'center',justifyContent:'center'}}>
          <ImageBackground style={{width:screenWidth,height:250}} source={require('../assets/banner.jpg')} resizeMode="cover"/>
          <View style={{position:'absolute',alignItems:'center'}}>
          <Text style={{fontSize:24,fontWeight:'600',color:'white'}}>Book Store</Text>
          <Text style={{fontSize:16,fontWeight:'400',color:'white'}}>Kết nối để nhận nhiều ưu đãi</Text>
          </View>
          <View style={{position:'absolute',bottom:20,flexDirection:'row',justifyContent:'space-around',width:screenWidth}}>
            <TouchableOpacity onPress={() => navigation.navigate('Login',{ isNavigation: false })} style={{width:screenWidth/2 - 50,paddingTop:10,paddingBottom:10,borderColor:'white',borderWidth:1,borderRadius:5,alignItems:'center'}}>
              <Text style={{color:'white'}}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register',{ isNavigation: false })} style={{width:screenWidth/2 - 50,paddingTop:10,paddingBottom:10,backgroundColor:'white',borderRadius:5,alignItems:'center'}}>
              <Text style={{color:'#222'}}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop:20}}>
          <View style={{paddingTop:15,paddingBottom:15,paddingLeft:10,paddingRight:10,backgroundColor:'#f8f1e4',gap:20}}>
            <View style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between'}}>
              <Text>Đơn hàng của tôi</Text>
              <Pressable>
                <Text style={{color:COLORS.primaryBackgroundBox}}>Xem tất cả</Text>
              </Pressable>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Pressable style={{flexDirection:'column',alignItems:'center'}}>
              <MaterialIcons name="payment" size={27} color="black" />
              <Text>Chờ thanh toán</Text>
              </Pressable>
              <Pressable style={{flexDirection:'column',alignItems:'center'}}>
              <AntDesign name="inbox" size={27} color="black" />
              <Text>Đang xử lý</Text>
              </Pressable>
              <Pressable style={{flexDirection:'column',alignItems:'center'}}>
              <MaterialCommunityIcons name="truck-fast-outline" size={27} color="black" />
              <Text>Đang giao</Text>
              </Pressable>
              <Pressable style={{flexDirection:'column',alignItems:'center'}}>
              <SimpleLineIcons name="badge" size={27} color="black" />
              <Text>Đã giao</Text>
              </Pressable>
            </View>
          </View>
          <View style={{paddingLeft:10,paddingRight:10}}>
            <Pressable style={{paddingTop:20,flexDirection:'row',gap:10}}>
            <EvilIcons name="heart" size={34} color="black" />
            <View style={{borderBottomColor:'#ccc',borderBottomWidth:1,flex:1}}>
              <Text>Sản phẩm yêu thích</Text>
            </View>
            </Pressable>
            <Pressable style={{paddingTop:20,flexDirection:'row',gap:10}}>
            <EvilIcons name="like" size={34} color="black" />
            <View style={{borderBottomColor:'#ccc',borderBottomWidth:1,flex:1}}>
              <Text>Đánh giá của tôi</Text>
            </View>
            </Pressable>
            <Pressable style={{paddingTop:20,flexDirection:'row',gap:10}}>
            <MaterialCommunityIcons name="account" size={34} color="black" />
            <View style={{borderBottomColor:'#ccc',borderBottomWidth:1,flex:1}}>
              <Text>Thông tin tài khoản</Text>
            </View>
            </Pressable>
            <Pressable style={{paddingTop:20,flexDirection:'row',gap:10}}>
            <MaterialCommunityIcons name="message-question-outline" size={34} color="black" />
            <View style={{borderBottomColor:'#ccc',borderBottomWidth:1,flex:1}}>
              <Text>Hỗ trợ khách hàng</Text>
            </View>
            </Pressable>
            <Pressable style={{paddingTop:20,flexDirection:'row',gap:10}}>
            <FontAwesome5 name="birthday-cake" size={34} color="black" />
            <View style={{borderBottomColor:'#ccc',borderBottomWidth:1,flex:1}}>
              <Text>Chính sách sinh nhật App member</Text>
            </View>
            </Pressable>
            <Pressable style={{paddingTop:20,flexDirection:'row',gap:10}}>
            <Ionicons name="document-text-outline" size={34} color="black" />
            <View style={{borderBottomColor:'#ccc',borderBottomWidth:1,flex:1}}>
              <Text>Chính sách Tích điểm - Tiêu điểm</Text>
            </View>
            </Pressable>
            <Pressable style={{paddingTop:20,flexDirection:'row',gap:10}}>
            <Feather name="shield" size={34} color="black" />
            <View style={{borderBottomColor:'#ccc',borderBottomWidth:1,flex:1}}>
              <Text>Chính sách bảo mật</Text>
            </View>
            </Pressable>
            <Pressable style={{paddingTop:20,flexDirection:'row',gap:10}}>
            <AntDesign name="contacts" size={34} color="black" />
            <View style={{borderBottomColor:'#ccc',borderBottomWidth:1,flex:1}}>
              <Text>Liên hệ với chúng tôi</Text>
            </View>
            </Pressable>
          </View>
        </View>
        </View>
      </ScrollView>
    </>
  );
}
