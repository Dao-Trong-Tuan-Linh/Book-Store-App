import React,{useState} from "react";
import {
  TouchableOpacity,
  View,
  Platform,
  Text,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import { COLORS } from "../theme/theme";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "pinar";
import ConfirmCart from "../components/ConfirmCart";
import ShowAlert from "../components/ShowAlert";
import ExpandableText from "../components/ExpandableText";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function DetailBook({ navigation }) {
  const [isVisible,setIsVisible] = useState(false)
  const images = [
    { id: 0, img: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_187162.jpg" },
    { id: 1, img: "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tuoi_tho_du_doi___tap_1_tai_ban_2019/2021_07_29_16_46_46_2-390x510.jpg?_gl=1*1j1o0uv*_ga*MjAxMjA0MzAyOC4xNzEwMjI4MTkz*_ga_460L9JMC2G*MTcxNTUyNTU4Ni4xNS4xLjE3MTU1MjcxMTQuNTQuMC4xOTkxNDkyMDcy*_gcl_aw*R0NMLjE3MTAyNjE2OTUuQ2owS0NRanctci12QmhDLUFSSXNBR2dVTzJBQ3liTzRpZkJQcEhQWnROb3pEVE4tWk1FaFc1YVV2ekcxTWFPdVAtdWtVUVdEME5SNEd4TWFBaWtJRUFMd193Y0I.*_gcl_au*MTM4OTc0MjI5My4xNzEwMjI4MTkz" },
  ];

  
  const showAlert = () => ShowAlert({title:'Thông báo',message:'Số lượng x không có sẵn'})
  return (
    <View style={{ flex: 1 }}>
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
      <ScrollView style={{ backgroundColor: "#e8e8e8"}}>
       <View style={{flexDirection:'column',gap:10}}>
       <View
          style={{
            paddingHorizontal: 15,
            paddingBottom:10,
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
                {images.map((item) => (
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit:'contain'
                    }}
                    source={{uri:`${item.img}`}}
                    key={item.id}
                  />
                ))}
              </Carousel>
            </View>
          </View>

          <View>
            <Text>Tuổi thơ dữ dội</Text>
            <View style={{ flexDirection: "row",alignItems:'center',gap:15 }}>
              <Text style={{fontSize:24,color:COLORS.textNewPrice,fontWeight:'600'}}>60.000 đ</Text>
              <Text style={{fontSize:16,color:COLORS.textOldPrice,textDecorationLine: "line-through"}}>72.000 đ</Text>
              <View
                style={{
                  paddingHorizontal:10,
                  paddingVertical:5,
                  borderRadius: 7,
                  backgroundColor: COLORS.primaryBackgroundBox,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: COLORS.textWhiteColor,fontSize:20,fontWeight:'600' }}>-20%</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{backgroundColor:'white'}}>
          <View style={{padding:10,borderBottomColor:'#ccc',borderBottomWidth:1}}>
            <Text style={{fontSize:20,fontWeight:'600'}}>Thông tin sản phẩm</Text>
          </View>
          <View style={{paddingHorizontal:10,paddingTop:5,flexDirection:'row',gap:60}}>
            <View style={{flexDirection:'column',gap:15}}>
              <Text>Mã hàng</Text>
              <Text>Nhà cung cấp</Text>
              <Text>Tác giả</Text>
              <Text>Nhà xuất bản</Text>
              <Text>Năm xuất bản</Text>
            </View>
            <View style={{flexDirection:'column',gap:15}}>
              <Text>123456</Text>
              <Text>abcd</Text>
              <Text>Phùng Quán</Text>
              <Text>Nhà xuất bản Kim Đồng</Text>
              <Text>2017</Text>
            </View>
          </View>
          <ExpandableText>
          “Tuổi Thơ Dữ Dội” là một câu chuyện hay, cảm động viết về tuổi thơ. Sách
        dày 404 trang mà người đọc không bao giờ muốn ngừng lại, bị lôi cuốn vì
        những nhân vật ngây thơ có, khôn ranh có, anh hùng có, vì những sự việc
        khi thì ly kỳ, khi thì hài hước, khi thì gây xúc động đến ứa nước mắt...
        "Tuổi Thơ Dữ Dội” không phải chỉ là một câu chuyện cổ tích, mà là một
        câu chuyện có thật ở trần gian, ở đó, những con người tuổi nhỏ đã tham
        gia vào cuộc kháng chiến chống xâm lược bảo vệ Tổ quốc với một chuỗi
        những chiến công đầy ắp li kì và hấp dẫn. Đọc Tuổi Thơ Dữ Dội chính là
        đọc lại một phần lịch sử tuổi thơ Việt, thấm đẫm xúc động, cảm phục và
        tự hào..."
        Nhà thơ - nhạc sĩ Nguyễn Trọng Tạo
        "Có một viên ngọc quý thời gian dành riêng để ban tặng con người, đó là
        Tuổi thơ. Viên ngọc màu nhiệm, trong sáng nhưng quá mong manh, không thể
        tìm thấy lần thứ hai trong đời. Và có một thế hệ người Việt chưa bao giờ
        được cầm viên ngọc trên tay, “Tuổi thơ dữ dội” của Phùng Quán được viết
        cho thế hệ đó. Hãy đọc để nhớ lại, để tự hào, và để cầu nguyện cho những
        Tuổi thơ sắp ra đời…”
        Nhà văn Hoàng Phủ Ngọc Tường
          </ExpandableText>
        </View>
        <View style={{backgroundColor:'white',flexDirection:'column',gap:10,paddingBottom:10,marginBottom:70}}>
            <View style={{padding:10,borderBottomColor:COLORS.primaryBackgroundBox,borderBottomWidth:1}}>
            <Text style={{fontSize:20,color:COLORS.primaryBackgroundBox,fontWeight:'600'}}>Sản phẩm liên quan</Text>
            </View>
          <ScrollView horizontal={true}>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <View
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
                 <TouchableOpacity onPress={() => navigation.navigate("DetailBook")}>
                 <Image
                    style={{
                      width: screenWidth * 0.4,
                      height: screenHeight * 0.25,
                      resizeMode: "contain",
                    }}
                    source={require("../assets/tuoi-tho-du-doi.jpg")}
                  />
                 </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "column",
                      width: screenWidth * 0.35,
                      alignItems: "flex-start",
                    }}
                  >
                    <Text>Tuổi thơ dữ dội-Tập 1</Text>
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
                          60.000 đ
                        </Text>
                        <Text
                          style={{
                            color: COLORS.textOldPrice,
                            textDecorationLine: "line-through",
                          }}
                        >
                          72.000 đ
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
                          -20%
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
                <View
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
                  <Image
                    style={{
                      width: screenWidth * 0.4,
                      height: screenHeight * 0.25,
                      resizeMode: "contain",
                    }}
                    source={require("../assets/tuoi-tho-du-doi.jpg")}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      width: screenWidth * 0.35,
                      alignItems: "flex-start",
                    }}
                  >
                    <Text>Tuổi thơ dữ dội-Tập 1</Text>
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
                          60.000 đ
                        </Text>
                        <Text
                          style={{
                            color: COLORS.textOldPrice,
                            textDecorationLine: "line-through",
                          }}
                        >
                          72.000 đ
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
                          -20%
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
                <View
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
                  <Image
                    style={{
                      width: screenWidth * 0.4,
                      height: screenHeight * 0.25,
                      resizeMode: "contain",
                    }}
                    source={require("../assets/tuoi-tho-du-doi.jpg")}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      width: screenWidth * 0.35,
                      alignItems: "flex-start",
                    }}
                  >
                    <Text>Tuổi thơ dữ dội-Tập 1</Text>
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
                          60.000 đ
                        </Text>
                        <Text
                          style={{
                            color: COLORS.textOldPrice,
                            textDecorationLine: "line-through",
                          }}
                        >
                          72.000 đ
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
                          -20%
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
                <View
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
                  <Image
                    style={{
                      width: screenWidth * 0.4,
                      height: screenHeight * 0.25,
                      resizeMode: "contain",
                    }}
                    source={require("../assets/tuoi-tho-du-doi.jpg")}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      width: screenWidth * 0.35,
                      alignItems: "flex-start",
                    }}
                  >
                    <Text>Tuổi thơ dữ dội-Tập 1</Text>
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
                          60.000 đ
                        </Text>
                        <Text
                          style={{
                            color: COLORS.textOldPrice,
                            textDecorationLine: "line-through",
                          }}
                        >
                          72.000 đ
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
                          -20%
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
              </View>
            </ScrollView>
        </View>
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
          <TouchableOpacity>
            <AntDesign name="minus" size={20} color="#666" />
          </TouchableOpacity>
          <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>
            1
          </Text>
          <TouchableOpacity>
            <AntDesign name="plus" size={20} color="#666" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "40%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setIsVisible(true)}
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
          onPress={showAlert}
        >
          <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
            Mua ngay
          </Text>
        </TouchableOpacity>
      </View>
      <ConfirmCart isVisible={isVisible} setIsVisible={setIsVisible} navigation={navigation}/>
    </View>
  );
}
