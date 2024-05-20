import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface DialogBottomProps {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
}
export default function DialogBottom({ bottomSheetRef }: DialogBottomProps) {
  const snapPoints = useMemo(() => ["50%", "75%", "100%"], []);

  const [isOpenPriceFilter, setOpenPriceFilter] = useState(true);
  const [isOpenGenresFilter,setOpenGenresFilter] = useState(true);
  const [isOpenPunishingFilter,setOpenPunishingFilter] = useState(true)
  return (
    <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
      <BottomSheetView style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            borderBottomColor: "#f4f4f4",
            borderBottomWidth: 1,
            width: "100%",
            position: "relative",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              paddingBottom: 10,
              textAlign: "center",
            }}
          >
            Bộ lọc
          </Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 15, bottom: 10 }}
            onPress={() => bottomSheetRef.current?.close()}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => setOpenPriceFilter(!isOpenPriceFilter)}
            style={{
              padding: 20,
              flexDirection: "column",
              borderBottomColor: "#e2e2e2",
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 20 }}>Giá</Text>
              {isOpenPriceFilter ? (
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color="black"
                />
              ) : (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                />
              )}
            </View>
            {isOpenPriceFilter && (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 180,
                    height: 50,
                    backgroundColor: "#f5f5f5",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    0-100k
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 180,
                    height: 50,
                    backgroundColor: "#f5f5f5",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    100k-200k
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 180,
                    height: 50,
                    backgroundColor: "#f5f5f5",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    200k-300k
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 180,
                    height: 50,
                    backgroundColor: "#f5f5f5",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    300k-500k
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setOpenGenresFilter(!isOpenGenresFilter)}
            style={{
              padding: 20,
              flexDirection: "column",
              borderBottomColor: "#e2e2e2",
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 20 }}>Thể loại</Text>
              {isOpenGenresFilter ? (
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color="black"
                />
              ) : (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                />
              )}
            </View>
            {isOpenGenresFilter && (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 180,
                    height: 50,
                    backgroundColor: "#f5f5f5",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    Văn học
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 180,
                    height: 50,
                    backgroundColor: "#f5f5f5",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    Tiểu thuyết
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 180,
                    height: 50,
                    backgroundColor: "#f5f5f5",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    Truyện ngắn
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 180,
                    height: 50,
                    backgroundColor: "#f5f5f5",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    Truyện trinh thám
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setOpenPunishingFilter(!isOpenPunishingFilter)}
            style={{
              padding: 20,
              flexDirection: "column",
              borderBottomColor: "#e2e2e2",
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 20 }}>Nhà cung cấp</Text>
              {isOpenPunishingFilter ? (
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color="black"
                />
              ) : (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                />
              )}
            </View>
            {isOpenPunishingFilter && (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 180,
                    height: 50,
                    backgroundColor: "#f5f5f5",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    Alpha Books
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 180,
                    height: 50,
                    backgroundColor: "#f5f5f5",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    NXB Trẻ
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 180,
                    height: 50,
                    backgroundColor: "#f5f5f5",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    Nhã Nam
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 180,
                    height: 50,
                    backgroundColor: "#f5f5f5",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    First News
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}
