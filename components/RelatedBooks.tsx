import React,{useState} from 'react'
import {Dimensions,View,Text,ScrollView,TouchableOpacity,Image} from "react-native"
import { COLORS } from '../theme/theme';
import { Book } from '../screens/Home';
import { formatNumber,numberPercent } from './CategoryBooks';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

interface RelatedBooksProps {
    relatedBooks:Book[],
    navigation:any,
    route:any
}
export default function RelatedBooks({navigation,relatedBooks,route}:RelatedBooksProps) {
  return (
    <View style={{backgroundColor:'white',flexDirection:'column',gap:10,paddingBottom:10,marginBottom:70}}>
            <View style={{padding:10,borderBottomColor:COLORS.primaryBackgroundBox,borderBottomWidth:1}}>
            <Text style={{fontSize:20,color:COLORS.primaryBackgroundBox,fontWeight:'600'}}>Sản phẩm liên quan</Text>
            </View>
          <ScrollView horizontal={true}>
              <View style={{ flexDirection: "row", gap: 10 }}>
                {relatedBooks.map(book => (
                    <View
                    key={book.bid}
                    style={{
                      flexDirection: "column",
                      width: screenWidth * 0.5,
                      borderColor: COLORS.borderColorProduct,
                      borderRadius: 5,
                      alignItems: "center",
                      paddingBottom: 10,
                      borderWidth: 1,
                    }}
                  >
                   <TouchableOpacity onPress={() => {
                    console.log(book)
                    navigation.navigate("DetailBook",{book})
                   }}>
                   <Image
                      style={{
                        width: screenWidth * 0.4,
                        height: screenHeight * 0.25,
                        resizeMode: "contain",
                      }}
                      source={{uri: book.images[0]}}
                    />
                   </TouchableOpacity>
                    <View
                      style={{
                        flexDirection: "column",
                        width: screenWidth * 0.35,
                        alignItems: "flex-start",
                      }}
                    >
                      <Text>{book.bookName}</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "flex-start",
                          gap: 10,
                        }}
                      >
                        <View style={{ flexDirection: "column" }}>
                          <Text
                            style={{
                              color: COLORS.textNewPrice,
                              fontWeight: "600",
                            }}
                          >
                            {formatNumber(book.newPrice)} đ
                          </Text>
                          <Text
                            style={{
                              color: COLORS.textOldPrice,
                              textDecorationLine: "line-through",
                            }}
                          >
                            {formatNumber(book.oldPrice)} đ
                          </Text>
                        </View>
  
                        <View
                          style={{
                            padding: 3,
                            borderRadius: 2,
                            backgroundColor: COLORS.primaryBackgroundBox,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text style={{ color: COLORS.textWhiteColor }}>
                            -{numberPercent(book.newPrice,book.oldPrice)}%
                          </Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        style={{
                          width: "100%",
                          borderColor: COLORS.borderColorProduct,
                          borderWidth: 1,
                          padding: 5,
                          borderRadius: 5,
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            color: COLORS.primaryBackgroundBox,
                            fontWeight: "600",
                          }}
                        >
                          Mua ngay
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
        </View>
  )
}
