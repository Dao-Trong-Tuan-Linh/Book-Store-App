import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
  SafeAreaView,
  Platform,
  Pressable,
  Image,
  Dimensions,
  Button,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../theme/theme";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Home({ navigation }) {
  const SIZE = 100;
  const images = [
    "https://cdn0.fahasa.com/media/magentothem/banner7/SieeuSale_Week2_T524_Banner_Slide_840x320.jpg",
    "https://cdn0.fahasa.com/media/magentothem/banner7/MCBookT524_bannerSlide_840x320.jpg",
    "https://cdn0.fahasa.com/media/magentothem/banner7/Silver_0524_Ver2_dinhtiSlide_840x320.jpg"
  ];
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            height:90,
            backgroundColor: COLORS.primaryBackgroundBox,
            padding: 10,
          }}
        >
          <View
            style={{
              marginTop:30,
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              paddingRight: 15,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 7,
                gap: 10,
                backgroundColor: "white",
                borderRadius: 3,
                height: 38,
                flex: 1,
              }}
            >
              <AntDesign
                style={{ paddingLeft: 10 }}
                name="search1"
                size={22}
                color="black"
              />
              <TextInput
                style={{ width: "100%" }}
                placeholder="Nhập sách cần tìm ở đây"
              />
            </Pressable>
            <TouchableOpacity
              style={{ position: "relative" }}
              onPress={() => navigation.navigate("Cart")}
            >
              <AntDesign name="shoppingcart" size={28} color="white" />
              {/* <View
                style={{
                  position: "absolute",
                  top: -10,
                  left: 10,
                  width: 24,
                  height: 24,
                  borderRadius: 50,
                  backgroundColor: COLORS.primaryBackgroundBox,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontWeight: "500" }}>5</Text>
              </View> */}
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View style={{ marginTop: 20 }}>
            <ScrollView horizontal={true}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 30,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: COLORS.primaryBackgroundBox,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={() => navigation.navigate("CategoryProducts")}
                  >
                    <Image
                      style={{ width: 65, height: 65, borderRadius: 10 }}
                      source={{uri:'https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_03462015_104616.jpg'}}
                    />
                  </TouchableOpacity>
                  <Text style={{ textAlign: "center" }}>Văn học</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: COLORS.primaryBackgroundBox,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 65, height: 65, borderRadius: 10 }}
                      source={{uri:"https://fs.chungta.com/Files/14124E6776864C6D8FB32525A6F38DAA/image=jpeg/7d5c9cf54ff04f3a9b032701d2a5abf3/Kinh-te-1.jpg"}}
                    />
                  </TouchableOpacity>
                  <Text style={{ textAlign: "center" }}>Kinh tế</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: COLORS.primaryBackgroundBox,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 65, height: 65, borderRadius: 10 }}
                      source={{uri:"https://bizweb.dktcdn.net/100/386/441/files/sach-tam-li-hoc-hay-2.jpg?v=1626490983630"}}
                    />
                  </TouchableOpacity>
                  <Text style={{ textAlign: "center" }}>Tâm lý</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: COLORS.primaryBackgroundBox,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 65, height: 65, borderRadius: 10 }}
                      source={{uri:"https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/08/Thiet-ke-chua-co-ten-42-2.jpg"}}
                    />
                  </TouchableOpacity>
                  <Text style={{ textAlign: "center" }}>Kỹ năng sống</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: COLORS.primaryBackgroundBox,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 65, height: 65, borderRadius: 10 }}
                      source={{uri:"https://cdn0.fahasa.com/media/catalog/product/8/9/8936067608298.jpg"}}
                    />
                  </TouchableOpacity>
                  <Text style={{ textAlign: "center" }}>Truyện thiếu nhi</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: COLORS.primaryBackgroundBox,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 65, height: 65, borderRadius: 10 }}
                      source={{uri:"https://intranphu.vn/wp-content/uploads/2016/04/SGK_final.jpg"}}
                    />
                  </TouchableOpacity>
                  <Text style={{ textAlign: "center" }}>Sách Giáo khoa</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <SliderBox
            images={images}
            autoPlay
            circleLoop
            dotColor={"#13274F"}
            inactiveDotColor="#90A4AE"
            ImageComponentStyle={{ width: "100%" }}
          />
          <View
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              marginTop: 20,
              flexDirection: "column",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: "600" }}>
                Văn học
              </Text>
              <Text style={{ color: COLORS.primaryColorLink, fontSize: 16 }}>
                Xem tất cả
              </Text>
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate("DetailBook")}
                  >
                    <Image
                      style={{
                        width: screenWidth * 0.4,
                        height: screenHeight * 0.25,
                        resizeMode: "contain",
                      }}
                      source={{uri:"https://cdn0.fahasa.com/media/catalog/product/i/m/image_187162.jpg"}}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "column",
                      width: screenWidth * 0.4,
                      alignItems: "flex-start",
                      gap:10
                    }}
                  >
                    <Text numberOfLines={2} ellipsizeMode="tail">Tuổi thơ dữ dội-Tập 1(Tái bản 2019)</Text>
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
                          -35%
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
                    source={{uri:"https://cdn0.fahasa.com/media/catalog/product/b/_/b_a-1-tr_n-l_n-m_i-nh_-_-kh_c-2.jpg"}}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      width: screenWidth * 0.4,
                      alignItems: "flex-start",
                      gap:10
                    }}
                  >
                    <Text numberOfLines={2} ellipsizeMode="tail">Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark</Text>
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
                          64.000 đ
                        </Text>
                        <Text
                          style={{
                            color: COLORS.textOldPrice,
                            textDecorationLine: "line-through",
                          }}
                        >
                          95.000 đ
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
                          -32%
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
                    source={{uri:"https://cdn0.fahasa.com/media/catalog/product/8/9/8935325011559.jpg"}}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      width: screenWidth * 0.4,
                      alignItems: "flex-start",
                      gap:10
                    }}
                  >
                    <Text numberOfLines={2} ellipsizeMode="tail">Đám Trẻ Ở Đại Dương Đen</Text>
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
                          64.000 đ
                        </Text>
                        <Text
                          style={{
                            color: COLORS.textOldPrice,
                            textDecorationLine: "line-through",
                          }}
                        >
                          99.000 đ
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
                          -35%
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
                    source={{uri:"https://cdn0.fahasa.com/media/catalog/product/8/9/8935325010736.jpg"}}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      width: screenWidth * 0.4,
                      alignItems: "flex-start",
                      gap:10
                    }}
                  >
                    <Text numberOfLines={2} ellipsizeMode="tail">999 Lá Thư Gửi Cho Chính Mình - Những Lá Thư Ấn Tượng Nhất (Phiên Bản Song Ngữ Trung - Việt)</Text>
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
                          69.000 đ
                        </Text>
                        <Text
                          style={{
                            color: COLORS.textOldPrice,
                            textDecorationLine: "line-through",
                          }}
                        >
                          99.000 đ
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
                          -30%
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

          <View
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              marginTop: 20,
              flexDirection: "column",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: "600" }}>
                Kỹ năng sống
              </Text>
              <Text style={{ color: COLORS.primaryColorLink, fontSize: 16 }}>
                Xem tất cả
              </Text>
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
                      width: screenWidth * 0.4,
                      alignItems: "flex-start",
                      gap:10
                    }}
                  >
                    <Text numberOfLines={2} ellipsizeMode="tail">Tuổi thơ dữ dội-Tập 1</Text>
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
                      width: screenWidth * 0.4,
                      alignItems: "flex-start",
                      gap:10
                    }}
                  >
                    <Text numberOfLines={2} ellipsizeMode="tail">Tuổi thơ dữ dội-Tập 1</Text>
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
                      width: screenWidth * 0.4,
                      alignItems: "flex-start",
                      gap:10
                    }}
                  >
                    <Text numberOfLines={2} ellipsizeMode="tail">Tuổi thơ dữ dội-Tập 1</Text>
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
                      width: screenWidth * 0.4,
                      alignItems: "flex-start",
                      gap:10
                    }}
                  >
                    <Text numberOfLines={2} ellipsizeMode="tail">Tuổi thơ dữ dội-Tập 1</Text>
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

          <View
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              marginTop: 20,
              flexDirection: "column",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: "600" }}>
                Tâm lý
              </Text>
              <Text style={{ color: COLORS.primaryColorLink, fontSize: 16 }}>
                Xem tất cả
              </Text>
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
                      width: screenWidth * 0.4,
                      alignItems: "flex-start",
                      gap:10
                    }}
                  >
                    <Text numberOfLines={2} ellipsizeMode="tail">Tuổi thơ dữ dội-Tập 1</Text>
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
                      width: screenWidth * 0.4,
                      alignItems: "flex-start",
                      gap:10
                    }}
                  >
                    <Text numberOfLines={2} ellipsizeMode="tail">Tuổi thơ dữ dội-Tập 1</Text>
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
                      width: screenWidth * 0.4,
                      alignItems: "flex-start",
                      gap:10
                    }}
                  >
                    <Text numberOfLines={2} ellipsizeMode="tail">Tuổi thơ dữ dội-Tập 1</Text>
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
                      width: screenWidth * 0.4,
                      alignItems: "flex-start",
                      gap:10
                    }}
                  >
                    <Text numberOfLines={2} ellipsizeMode="tail">Tuổi thơ dữ dội-Tập 1</Text>
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
        </ScrollView>
      </View>
    </>
  );
}
