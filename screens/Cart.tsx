import React, { useState } from "react";
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

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Cart({ navigation }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: COLORS.primaryBackgroundBox,
          height: 80,
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

      {/* <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 20,
          backgroundColor:'#f5f5f5'
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/empty-cart.png")}
        />
        <Text>Bạn chưa có sản phẩm trong giỏ hàng</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tab", { screen: "Home" })}
          style={{
            width: 200,
            height: 50,
            backgroundColor: "#ff9227",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
            Mua sắm ngay
          </Text>
        </TouchableOpacity>
      </View> */}
      <ScrollView style={{marginBottom:100}}>
      <View style={{ backgroundColor: "#f5f5f5", paddingHorizontal:10,paddingTop:10}}>
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
          <Text>Chọn tất cả (1 sản phẩm)</Text>
        </View>

        <View style={{ gap: 10 }}>
          <View
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
                  uri: "https://cdn0.fahasa.com/media/catalog/product/b/i/bia_tudientiengem-_1_.jpg",
                }}
              />
            </View>
            <View
              style={{ flexBasis: "62%", flexDirection: "column", gap: 10 }}
            >
              <View style={{ overflow: "hidden" }}>
                <Text numberOfLines={2}>Tuổi thơ dữ dội</Text>
              </View>
              <View style={{ gap: 5 }}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: COLORS.textNewPrice,
                      fontWeight: "600",
                    }}
                  >
                    50.000 đ
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLORS.textOldPrice,
                      textDecorationLine: "line-through",
                    }}
                  >
                    125.000 đ
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
                      style={{ justifyContent: "center", alignItems: "center" }}
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
                      <Text>1</Text>
                    </View>
                    <TouchableOpacity
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <AntDesign name="plus" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    <AntDesign name="delete" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
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
                  uri: "https://cdn0.fahasa.com/media/catalog/product/b/i/bia_tudientiengem-_1_.jpg",
                }}
              />
            </View>
            <View
              style={{ flexBasis: "62%", flexDirection: "column", gap: 10 }}
            >
              <View style={{ overflow: "hidden" }}>
                <Text numberOfLines={2}>Tuổi thơ dữ dội</Text>
              </View>
              <View style={{ gap: 5 }}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: COLORS.textNewPrice,
                      fontWeight: "600",
                    }}
                  >
                    50.000 đ
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLORS.textOldPrice,
                      textDecorationLine: "line-through",
                    }}
                  >
                    125.000 đ
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
                      style={{ justifyContent: "center", alignItems: "center" }}
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
                      <Text>1</Text>
                    </View>
                    <TouchableOpacity
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <AntDesign name="plus" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    <AntDesign name="delete" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
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
                  uri: "https://cdn0.fahasa.com/media/catalog/product/b/i/bia_tudientiengem-_1_.jpg",
                }}
              />
            </View>
            <View
              style={{ flexBasis: "62%", flexDirection: "column", gap: 10 }}
            >
              <View style={{ overflow: "hidden" }}>
                <Text numberOfLines={2}>Tuổi thơ dữ dội</Text>
              </View>
              <View style={{ gap: 5 }}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: COLORS.textNewPrice,
                      fontWeight: "600",
                    }}
                  >
                    50.000 đ
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLORS.textOldPrice,
                      textDecorationLine: "line-through",
                    }}
                  >
                    125.000 đ
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
                      style={{ justifyContent: "center", alignItems: "center" }}
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
                      <Text>1</Text>
                    </View>
                    <TouchableOpacity
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <AntDesign name="plus" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    <AntDesign name="delete" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
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
                  uri: "https://cdn0.fahasa.com/media/catalog/product/b/i/bia_tudientiengem-_1_.jpg",
                }}
              />
            </View>
            <View
              style={{ flexBasis: "62%", flexDirection: "column", gap: 10 }}
            >
              <View style={{ overflow: "hidden" }}>
                <Text numberOfLines={2}>Tuổi thơ dữ dội</Text>
              </View>
              <View style={{ gap: 5 }}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: COLORS.textNewPrice,
                      fontWeight: "600",
                    }}
                  >
                    50.000 đ
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLORS.textOldPrice,
                      textDecorationLine: "line-through",
                    }}
                  >
                    125.000 đ
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
                      style={{ justifyContent: "center", alignItems: "center" }}
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
                      <Text>1</Text>
                    </View>
                    <TouchableOpacity
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <AntDesign name="plus" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    <AntDesign name="delete" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
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
            0 đồng
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tab", { screen: "Home" })}
          style={{
            width: 160,
            height: 50,
            flexDirection: "row",
            gap: 5,
            backgroundColor:COLORS.primaryBackgroundBox,
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
    </View>
  );
}
