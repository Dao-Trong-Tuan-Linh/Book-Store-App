import React, { useMemo, useState, useContext } from "react";
import {
  TouchableOpacity,
  View,
  Platform,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { COLORS } from "../theme/theme";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "pinar";
import ConfirmCart from "../components/ConfirmCart";
import ShowAlert from "../components/ShowAlert";
import ExpandableText from "../components/ExpandableText";
import { Book } from "./Home";
import { formatNumber, numberPercent } from "../components/CategoryBooks";
import useGetRelatedBooks from "../hooks/useGetRelatedBooks";
import RelatedBooks from "../components/RelatedBooks";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext } from "../context/AuthContext";
import { AuthContextType } from "../context/AuthContext";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Spinner from "react-native-loading-spinner-overlay";
import {useFocusEffect} from "@react-navigation/native"

export interface BookCart {
  bid: string;
  bookName: string;
  image: string;
  newPrice: string;
  oldPrice: string;
  quantity: number;
}

export interface ICart {
  uid: string;
  books: BookCart[];
}
export default function DetailBook({ navigation, route }) {
  const [isVisible, setIsVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { currentUser } = useContext(AuthContext) as AuthContextType;
  const [isLoading, setIsLoading] = useState(false);
  const [book,setBook] = useState<Book>(route.params.book)

  useFocusEffect(React.useCallback(() => {
    setBook(route.params.book)
  },[route.params.book]))

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  

  const { relatedBooks, loading: loadingRelatedBooks } = useGetRelatedBooks(
    book.category,
    book.bid
  );

  const handleAddBookToCart = async (uid: string) => {
    try {
      await updateDoc(doc(db, "carts", uid), {
        books: arrayUnion({
          bid: book.bid,
          image: book.images[0],
          bookName: book.bookName,
          newPrice: book.newPrice,
          oldPrice: book.oldPrice,
          quantity,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = async () => {
    try {
      if (currentUser) {
        setIsLoading(true);
        const userCart = (
          await getDoc(doc(db, "carts", currentUser.uid))
        ).data() as ICart;
        const check = userCart.books.find((b) => b.bid == book.bid);
        console.log(check);
        if (check) {
          showAlert();
        } else {
          await handleAddBookToCart(currentUser.uid);
          setIsVisible(true);
        }
        setIsLoading(false);
      } else {
        navigation.navigate("Tab", { screen: "Login" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuyNow = async () => {
    try {
      if (currentUser) {
        setIsLoading(true);
        const userCart = (
          await getDoc(doc(db, "carts", currentUser.uid))
        ).data() as ICart;
        const check = userCart.books.map((b) => b.bid == book.bid);
        if (check) {
          showAlert();
        } else {
          await handleAddBookToCart(currentUser.uid);
        }
        setIsLoading(false);
      } else {
        navigation.navigate("Tab", { screen: "Login" });
      }
    } catch (error) {
      console.log(error)
    }
  };

  const showAlert = () =>
    ShowAlert({
      title: "Thông báo",
      message: "Bạn đã thêm sách này vào giỏ hàng",
    });
  return (
    <View style={{ flex: 1 }}>
      <Spinner
        visible={isLoading}
        textContent="Đang xử lí..."
        textStyle={{ color: "#fff" }}
      />
      <View
        style={{
          height: 90,
          backgroundColor: COLORS.primaryBackgroundBox,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            paddingLeft: 15,
            paddingRight: 10,
            paddingBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Tab", { screen: "Home" })}
            >
              <AntDesign name="home" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <AntDesign name="shoppingcart" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={{ backgroundColor: "#e8e8e8" }}>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <View
            style={{
              paddingHorizontal: 15,
              paddingBottom: 10,
              backgroundColor: "white",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                marginBottom: 8,
                alignItems: "center",
                justifyContent: "center",
                // width: "100%",
                // height:'100%'
              }}
            >
              <View
                style={{
                  width: 300,
                  height: 300,
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              >
                <Carousel showsControls={false} loop>
                  {book.images.map((image, index) => (
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      source={{ uri: `${image}` }}
                      key={index}
                    />
                  ))}
                </Carousel>
              </View>
            </View>

            <View>
              <Text>{book.bookName}</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    color: COLORS.textNewPrice,
                    fontWeight: "600",
                  }}
                >
                  {formatNumber(book.newPrice)} đ
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.textOldPrice,
                    textDecorationLine: "line-through",
                  }}
                >
                  {formatNumber(book.oldPrice)} đ
                </Text>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 7,
                    backgroundColor: COLORS.primaryBackgroundBox,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.textWhiteColor,
                      fontSize: 20,
                      fontWeight: "600",
                    }}
                  >
                    -{numberPercent(book.newPrice, book.oldPrice)}%
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ backgroundColor: "white" }}>
            <View
              style={{
                padding: 10,
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                Thông tin sản phẩm
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                paddingTop: 5,
                flexDirection: "row",
                gap: 60,
              }}
            >
              <View style={{ flexDirection: "column", gap: 15 }}>
                <Text>Mã hàng</Text>
                <Text>Tác giả</Text>
                <Text>Nhà xuất bản</Text>
                <Text>Thể loại</Text>
              </View>
              <View style={{ flexDirection: "column", gap: 15 }}>
                <Text>{book.bid}</Text>
                <Text>{book.author}</Text>
                <Text>{book.publisher}</Text>
                <Text>{book.genre}</Text>
              </View>
            </View>
            <ExpandableText>{book.description}</ExpandableText>
          </View>
          {loadingRelatedBooks ? (
            <LoadingSpinner />
          ) : (
            <RelatedBooks navigation={navigation} relatedBooks={relatedBooks} route={route} />
          )}
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
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
        <View
          style={{
            paddingHorizontal: 10,
            width: "30%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderRightWidth: 1,
            borderRightColor: "#666",
          }}
        >
          <TouchableOpacity style={{ width: "20%" }} onPress={handleMinus}>
            <AntDesign name="minus" size={20} color="#666" />
          </TouchableOpacity>
          <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>
            {quantity}
          </Text>
          <TouchableOpacity style={{ width: "20%" }} onPress={handleAdd}>
            <AntDesign name="plus" size={20} color="#666" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "40%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={handleAddToCart}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: COLORS.textNewPrice,
            }}
          >
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "30%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.primaryBackgroundBox,
          }}
          onPress={handleBuyNow}
        >
          <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
            Mua ngay
          </Text>
        </TouchableOpacity>
      </View>
      <ConfirmCart
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        navigation={navigation}
      />
    </View>
  );
}
