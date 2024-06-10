import React, { useMemo, useState, useRef, useContext, useEffect,useId } from "react";
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
import { AuthContext } from "../context/AuthContext";
import { AuthContextType } from "../context/AuthContext";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { BookCart } from "./DetailBook";
import { ICart } from "./DetailBook";
import CheckOrder from "../components/CheckOrder";
import uuid from "react-native-uuid"

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

interface InfoUser {
  uid:string,
  fullName:string,
  email:string,
  phone:string
}
export default function DeliveryAddress({ navigation, route }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedWard, setSelectedWard] = useState<string | null>(null);
  const [address, setAddress] = useState("");
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState<BookCart[]>([]);
  

  const { currentUser } = useContext(AuthContext) as AuthContextType;

  useEffect(() => {
    const handleGetInfoUser = async () => {
      try {
        if (currentUser) {
          const infoUser = (await getDoc(doc(db, "users", currentUser.uid))).data();
          if (infoUser) {
            setFullName(infoUser.fullName);
            setPhone(infoUser.phone);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    const handleGetCart = async () => {
      try {
        if (currentUser) {
          const cartData = (await getDoc(doc(db, "carts", currentUser.uid))).data();
          if (cartData) {
            setCart(cartData.books);
          }
        } else {
          navigation.navigate("Tab", { screen: "Login" });
        }
      } catch (error) {
        console.log(error);
      }
    };

    handleGetInfoUser();
    handleGetCart();
  }, [currentUser, navigation]);

  useEffect(() => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += Number(cart[i].newPrice) * Number(cart[i].quantity);
    }
    setTotal(totalPrice);
  }, [cart]);

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
      return VNLocalPlus.getDistrictsByProvinceCode(selectedProvince).map((item) => ({
        label: item.name,
        value: item.code,
      }));
    }
    return [];
  }, [selectedProvince]);

  const wards = useMemo(() => {
    if (selectedDistrict) {
      return VNLocalPlus.getWardsByDistrictCode(selectedDistrict).map((item) => ({
        label: item.name,
        value: item.code,
      }));
    }
    return [];
  }, [selectedDistrict]);

  const handleSubmit = async () => {
    try {
      const oid = uuid.v4() as string
      if(currentUser && selectedProvince && selectedDistrict && selectedWard) {
        await setDoc(doc(db, "orders", oid), {
          oid,
          uid: currentUser?.uid,
          fullName,
          phone,
          province: VNLocalPlus.getWardByCode(selectedWard).provinceName,
          district: VNLocalPlus.getWardByCode(selectedWard).districtName,
          ward: VNLocalPlus.getWardByCode(selectedWard).name,
          address,
          paymentMethod: "cod",
          books: cart,
          totalPrice: total,
          deliveryStatus:"Đang xử lí"
        });
        await updateDoc(doc(db,"carts",currentUser.uid),{
          books:[]
        })
        setFullName("")
        setAddress("")
        setPhone("")
        setSelectedProvince(null)
        setSelectedDistrict(null)
        setSelectedWard(null)
        navigation.navigate("PurchaseOrder")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DismissKeyboard>
      <View style={{ flex: 1, backgroundColor: "white" }}>
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
            <CheckOrder cart={cart}/>
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
       <TouchableOpacity onPress={handleSubmit} style={{width:'70%',height:50,backgroundColor:COLORS.primaryBackgroundBox,borderRadius:5,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'#fff',fontSize:20,fontWeight:'600'}}>Xác nhận thanh toán</Text>
       </TouchableOpacity>
      </View>
      </View>
    </DismissKeyboard>
  );
}
