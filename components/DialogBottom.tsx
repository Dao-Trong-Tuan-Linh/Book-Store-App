import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

interface RBSheetRef {
  open: () => void;
  close: () => void;
}

interface DialogBottomProps {
  refRBSheet: React.RefObject<RBSheetRef>;
}
export default function DialogBottom({ refRBSheet }: DialogBottomProps) {
  return (
    <RBSheet
      ref={refRBSheet}
      useNativeDriver={true}
      
      customStyles={{
        wrapper: {
          backgroundColor: "transparent",
        },
        draggableIcon: {
          backgroundColor: "#000",
        },
      }}
      customModalProps={{
        animationType: "slide",
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}
    >
        <View style={{flex:1}}>
            <View style={{}}>
                <Text>Bộ lọc</Text>
                <TouchableOpacity onPress={() => refRBSheet.current?.close() }>
                    <Text>Bỏ lọc</Text>
                </TouchableOpacity>
            </View>
        </View>
    </RBSheet>
  );
}
