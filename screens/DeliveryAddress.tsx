import React, { useMemo, useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
  Dimensions,Platform
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../theme/theme";
import VNLocalPlus from "vn-local-plus";
import SelectComponent from "../components/SelectComponent";
import Ionicons from '@expo/vector-icons/Ionicons';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function DeliveryAddress({ navigation, route }) {
  const [fullName,setFullName] = useState("")
  const [phone,setPhone] = useState("")
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedWard,setSelectedWard] = useState<string | null>(null);
  const [address,setAddress] = useState("")

  const provinces = useMemo(
    () =>
      VNLocalPlus.getProvinces().map((item) => ({
        label: item.name,
        value: item.code,
      })),
    []
  );

  const districts = useMemo(() => {
    if (selectedProvince) {
      return VNLocalPlus.getDistrictsByProvinceCode(selectedProvince).map(item => ({
        label: item.name,
        value: item.code,
      }));
    }
    return [];
  }, [selectedProvince]);

  const wards = useMemo(() => {
    if (selectedDistrict) {
      return VNLocalPlus.getWardsByDistrictCode(selectedDistrict).map(item => ({
        label: item.name,
        value: item.code,
      }));
    }
    return [];
  }, [selectedDistrict]);

  
  return (
    <DismissKeyboard>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            position: "relative",
            top:0,
            left:0,
            right:0,
            backgroundColor: COLORS.primaryBackgroundBox,
            height: 90,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={{ position: "absolute", top: 55, left: 20,zIndex:1}}
          >
            <AntDesign name="arrowleft" size={24} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              color: "#fff",
              fontWeight: "600",
              textAlign: "center",
              marginTop: 55,
            }}
          >
            Địa chỉ nhận hàng
          </Text>
        </View>
        <ScrollView style={{ paddingTop: 10, paddingHorizontal: 10 }}>
          <View>
          <Text style={{ fontSize: 16 }}>
            Vui lòng nhập đầy đủ thông tin của bạn
          </Text>
          </View>

          <View style={{ marginTop: 10, gap: 20 }}>
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
                  value={fullName}
                  onChangeText={(e) => setFullName(e)}
                  placeholder="Nhập họ tên"
                />
              </Pressable>
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
                value={phone}
                onChangeText={(e) => setPhone(e)}
                  style={{ width: "100%", height: "100%" }}
                  placeholder="Nhập số điện thoại"
                  keyboardType="numeric"
                />
              </Pressable>
            </View>

            <View style={{ gap: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Tỉnh/Thành phố
              </Text>
              <SelectComponent selectedValue={selectedProvince} setSelectedValue={setSelectedProvince} items={provinces} label="Chọn tỉnh/thành phố"/>
            </View>
            <View style={{ gap: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Quận/huyện
              </Text>
              <SelectComponent selectedValue={selectedDistrict} setSelectedValue={setSelectedDistrict} items={districts} label="Chọn quận/huyện"/>
            </View>
            <View style={{ gap: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Phường/xã
              </Text>
              <SelectComponent selectedValue={selectedWard} setSelectedValue={setSelectedWard} items={wards} label="Chọn phường/xã"/>
            </View>
            <View style={{ gap: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Địa chỉ</Text>
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
                  value={address}
                  onChangeText={(e) => setAddress(e)}
                  placeholder="Nhập địa chỉ"
                />
              </Pressable>
            </View>
            <View style={{ gap: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Phương thức thanh toán</Text>
              <View style={{flexDirection:'row'}}>
              <Ionicons name="cash-outline" size={24} color="black" />
              <Text>Thanh toán bằng tiền mặt khi nhận hàng</Text>
              </View>
            </View>
            <View style={{ gap: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Kiểm tra lại đơn hàng</Text>
              <View style={{flexDirection:'row',alignItems:'center',borderTopColor:'#e6e9ec',borderTopWidth:1}}>
              <Image
                      style={{
                        width: screenWidth * 0.36,
                        height: screenHeight * 0.2,
                        resizeMode: "contain",
                      }}
                      source={{uri:"https://cdn0.fahasa.com/media/catalog/product/i/m/image_187162.jpg"}}
                    />
              <View style={{gap:5}}>
                <Text numberOfLines={4}>“Chém" Tiếng Anh Không Cần Động Não - Tặng Kèm Bộ Video Luyện Nghe-Nói + Sổ Học Từ Vựng “Chém" Tiếng Anh Không Cần Động Não - Tặng Kèm Bộ Video Luyện Nghe-Nói + Sổ Học Từ Vựng</Text>
                <View style={{flexDirection:'row',gap:10}}>
                <Text
                          style={{
                            color: COLORS.textNewPrice,
                            fontWeight: "600",
                          }}
                        >
                          52.000 đ
                        </Text>
                        <Text
                          style={{
                            color: COLORS.textOldPrice,
                            textDecorationLine: "line-through",
                          }}
                        >
                          80.000 đ
                        </Text>
                </View>
                <Text>Số lượng:1</Text>
                </View>      
              </View>
            </View>
          </View>
        </ScrollView>
        <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 90,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor: "white",
          ...Platform.select({
            ios: {
              shadowColor: "#ccc",
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.7,
              shadowRadius: 4,
            },
            android: {
              elevation: 8,
            },
          }),
          flexDirection: "row",
        }}
      >
       <TouchableOpacity style={{width:'70%',height:50,backgroundColor:COLORS.primaryBackgroundBox,borderRadius:5,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'#fff',fontSize:20,fontWeight:'600'}}>Xác nhận thanh toán</Text>
       </TouchableOpacity>
      </View>
      </ScrollView>
    </DismissKeyboard>
  );
}
