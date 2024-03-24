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

export default function Home() {
  const SIZE = 100;
  const images = [
    "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
  ];
  return (
    <>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? 40 : 0,
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.primaryBackgroundColor,
            padding: 10,
          }}
        >
          <View
            style={{
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
              <TextInput placeholder="Search book here" />
            </Pressable>
            <AntDesign name="shoppingcart" size={28} color="white" />
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
                  >
                    <Image
                      style={{ width: 65, height: 65, borderRadius: 10 }}
                      source={require("../assets/vh.jpg")}
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
                      source={require("../assets/kt.jpg")}
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
                      source={require("../assets/tam-li.png")}
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
                      source={require("../assets/ky-nang-song.jpg")}
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
                      source={require("../assets/truyen-thieu-nhi.jpg")}
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
                      source={require("../assets/sach-giao-khoa.jpg")}
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
                Không thể bỏ lỡ
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
                Không thể bỏ lỡ
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
                Không thể bỏ lỡ
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
