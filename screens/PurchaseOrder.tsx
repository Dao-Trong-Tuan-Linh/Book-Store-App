import React, { useMemo, useRef,useContext, useState, useEffect} from "react";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { COLORS } from "../theme/theme";
import DialogBottom from "../components/DialogBottom";
import BottomSheet from "@gorhom/bottom-sheet";
import useGetOrdersByUser from "../hooks/useGetOrdersByUser";
import { AuthContext } from "../context/AuthContext";
import { AuthContextType } from "../context/AuthContext";
import { collection, query, where, limit, getDocs } from 'firebase/firestore';
import { db } from "../firebase/firebase";
import { ScrollView } from "react-native-gesture-handler";


interface BookItem {
    bid:string,
    bookName:string,
    image:string,
    newPrice:string,
    oldPrice:string,
    quantity:number
}
interface IOrder {
    oid:string,
    books:BookItem[],
    deliveryStatus:string,
    totalPrice:number

}
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export default function PurchaseOrder({ navigation,route }) {
    const { currentUser } = useContext(AuthContext) as AuthContextType;
    const [userOrders,setUserOrders] = useState<IOrder[]>([])

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleCalculateTotal = (books:BookItem[]) => {
    let total = 0
    for(let i = 0 ; i < books.length ; i++) {
        total += books[i].quantity
    }
    return total
  }

  const handleGetOrders = async () => {
    try {
        if(currentUser) {
            const orderDocumentRef = collection(db, "orders");
        const queryOrders = query(orderDocumentRef, where("uid", "==",currentUser.uid ));
        const ordersSnapshot = await getDocs(queryOrders);

        const ordersData: IOrder[] = ordersSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            oid:data.oid,
            books: data.books,
            deliveryStatus: data.deliveryStatus,
            totalPrice: data.totalPrice,
          };
        });

        setUserOrders(ordersData);
        }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    handleGetOrders()
  },[])
  return (
    <View style={{ flex: 1, backgroundColor: "#fff"}}>
      <View
        style={{
          height: 90,
          borderBottomColor: "white",
          borderBottomWidth: 1,
          alignItems: "flex-start",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 10,
            paddingLeft: 20,
            gap: 120,
            position:'relative'
          }}
        >
          <TouchableOpacity style={{position:'absolute',left:20,bottom:20}} onPress={() => navigation.navigate("Tab", { screen: "Account" })}>
            <AntDesign name="arrowleft" size={24} color="rgb(85, 85, 85)" />
          </TouchableOpacity>
          <View style={{position:'absolute',left:160,bottom:20}}>
          <Text style={{ fontSize: 22, fontWeight: "500"}}>Đơn mua</Text>
          </View>
        </View>
      </View>
      <ScrollView>
      {userOrders.map(order => (
        <View style={{width:screenWidth,backgroundColor:"#fff",paddingHorizontal:10,borderBottomWidth:1,borderBottomColor:"#e8e8e8"}}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:'space-between',paddingVertical:10}}>
            <Text>{order.oid}</Text>
            <Text>{order.deliveryStatus}</Text>
        </View>
        <View>
        {order.books.map(book => (
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image
                    style={{
                      width: screenWidth * 0.36,
                      height: screenHeight * 0.2,
                      resizeMode: "contain",
                    }}
                    source={{uri:book.image}}
                  />
            <View style={{gap:5}}>
              <Text numberOfLines={4}>{book.bookName}</Text>
              <View style={{flexDirection:'row',gap:10}}>
              <Text
                        style={{
                          color: COLORS.textNewPrice,
                          fontWeight: "600",
                        }}
                      >
                       {book.newPrice} đ
                      </Text>
                      <Text
                        style={{
                          color: COLORS.textOldPrice,
                          textDecorationLine: "line-through",
                        }}
                      >
                        {book.oldPrice} đ
                      </Text>
              </View>
              <Text>Số lượng:{book.quantity}</Text>
              </View>      
            </View>
        ))}
        </View>
        <View style={{paddingVertical:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <Text>Số lượng sản phẩm:{handleCalculateTotal(order.books)}</Text>
            <Text>{order.totalPrice}</Text>
        </View>
      </View>
      ))}
      </ScrollView>
      <DialogBottom bottomSheetRef={bottomSheetRef} />
    </View>
  );
}


