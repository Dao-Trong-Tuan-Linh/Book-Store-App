import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform,
} from "react-native";
import { COLORS } from "../theme/theme";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { CheckBox } from "react-native-btr";
import { AuthContext } from "../context/AuthContext";
import { AuthContextType } from "../context/AuthContext";
import { BookCart, ICart } from "./DetailBook";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Spinner from "react-native-loading-spinner-overlay";
import { formatNumber, numberPercent } from "../components/CategoryBooks";
import EmptyCart from "../components/EmptyCart";


export default function Cart({ navigation }) {
  const { currentUser } = useContext(AuthContext) as AuthContextType;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [cart, setCart] = useState<BookCart[]>([]);
  const [loading, setLoading] = useState(false);
  const [isLoading,setIsLoading] = useState(false)
  const [total,setTotal] = useState(0)

  const handleGetCart = async () => {
    try {
      if (currentUser) {
        setLoading(true);
        const cartData = (
          await getDoc(doc(db, "carts", currentUser?.uid))
        ).data() as ICart;
        setCart(cartData.books);
      } else {
        navigation.navigate("Tab", { screen: "Login" });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBookInCart = async(bid:string) => {
    try {
      if(currentUser) {
        setIsLoading(true)
        const updateCart = cart.filter(b => b.bid != bid)
      await updateDoc(doc(db,"carts",currentUser.uid),{
        books:updateCart
      })
      setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleMinusQuantity = async (book:BookCart) => {
    try {
      if(currentUser) {
        setIsLoading(true)
        const updateBook = {
          bid:book.bid,
          bookName:book.bookName,
          image:book.image,
          newPrice:book.newPrice,
          oldPrice:book.oldPrice,
          quantity:book.quantity > 1 ? book.quantity - 1 : book.quantity
        }
        const updateBooks = cart.filter(b => b.bid != updateBook.bid)
        const updateArray = [updateBook,...updateBooks]
      await updateDoc(doc(db,"carts",currentUser.uid),{
        books:updateArray
      })
      setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddQuantity = async (book:BookCart) => {
    try {
      if(currentUser) {
        setIsLoading(true)
        const updateBook = {
          bid:book.bid,
          bookName:book.bookName,
          image:book.image,
          newPrice:book.newPrice,
          oldPrice:book.oldPrice,
          quantity:book.quantity + 1
        }
        const updateBooks = cart.filter(b => b.bid != updateBook.bid)
        const updateArray = [updateBook,...updateBooks]
      await updateDoc(doc(db,"carts",currentUser.uid),{
        books:updateArray
      })
      setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleGetCart();
  }, [isLoading]);

  useEffect(() => {
    let totalPrice = 0
    for(let i = 0 ; i < cart.length ; i++) {
      totalPrice += Number(cart[i].newPrice) * Number(cart[i].quantity)
    }
    setTotal(totalPrice)
  },[cart])
  return (
    <View style={{ flex: 1 }}>
      <Spinner
        visible={loading}
        textContent="Đang tải..."
        textStyle={{ color: "#fff" }}
      />
      <Spinner
        visible={isLoading}
        textContent="Đang xử lí..."
        textStyle={{ color: "#fff" }}
      />
      
      <View
        style={{
          backgroundColor: COLORS.primaryBackgroundBox,
          height: 90,
          flexDirection: "row",
          alignItems: "flex-end",
          paddingLeft: 20,
          paddingBottom: 15,
        }}
      >
        <TouchableOpacity
          style={{ zIndex: 1 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 15,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
            Giỏ hàng
          </Text>
        </View>
      </View>
      {cart.length == 0 && (
        <EmptyCart navigation={navigation}/>
      )}
      {
        cart.length > 0 && (
          <>
          <ScrollView style={{ marginBottom: 100 }}>
        <View
          style={{
            backgroundColor: "#f5f5f5",
            paddingHorizontal: 10,
            paddingTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              backgroundColor: "white",
              padding: 10,
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
            }}
          >
            <CheckBox
              disabled={false}
              checked={toggleCheckBox}
              color="red"
              onPress={() => setToggleCheckBox(!toggleCheckBox)}
            />
            <Text>Chọn tất cả ({cart.length} sản phẩm)</Text>
          </View>

          <View style={{ gap: 10 }}>
            {cart.map(book => (
              <View
              key={book.bid}
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  flexBasis: "8%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckBox
                  disabled={false}
                  checked={toggleCheckBox}
                  color="red"
                  onPress={() => setToggleCheckBox(!toggleCheckBox)}
                />
              </View>
              <View
                style={{
                  maxHeight: 130,
                  flexBasis: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 120,
                    height: 120,
                    objectFit: "contain",
                  }}
                  source={{
                    uri: book.image,
                  }}
                />
              </View>
              <View
                style={{ flexBasis: "62%", flexDirection: "column", gap: 10 }}
              >
                <View style={{ overflow: "hidden" }}>
                  <Text numberOfLines={2}>{book.bookName}</Text>
                </View>
                <View style={{ gap: 5 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLORS.textNewPrice,
                        fontWeight: "600",
                      }}
                    >
                      {formatNumber(book.newPrice)} đ
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: COLORS.textOldPrice,
                        textDecorationLine: "line-through",
                      }}
                    >
                      {formatNumber(book.oldPrice)} đ
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#f5f5f5",
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        gap: 10,
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onPress={() => handleMinusQuantity(book)}
                      >
                        <AntDesign name="minus" size={20} color="black" />
                      </TouchableOpacity>
                      <View
                        style={{
                          width: 50,
                          height: 30,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "white",
                        }}
                      >
                        <Text>{book.quantity}</Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onPress={() => handleAddQuantity(book)}
                      >
                        <AntDesign name="plus" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => handleDeleteBookInCart(book.bid)}>
                      <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          padding: 10,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
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
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column", gap: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Thành tiền</Text>
          <Text style={{ fontSize: 16, color: "#ff9227", fontWeight: "600" }}>
            {formatNumber(total.toString())} đồng
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("DeliveryAddress")}
          style={{
            width: 160,
            height: 50,
            flexDirection: "row",
            gap: 5,
            backgroundColor: COLORS.primaryBackgroundBox,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
            Thanh toán
          </Text>
          <AntDesign name="arrowright" size={24} color="white" />
        </TouchableOpacity>
      </View>
          </>
        )
      }
    </View>
  );
}
