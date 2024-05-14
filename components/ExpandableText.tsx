import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../theme/theme";

interface ExpandableTextProps {
    children:string
}
export default function ExpandableText({children}:ExpandableTextProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded)
    }
  return (
    <View
      style={{
        paddingTop: 20,
        paddingHorizontal: 5,
        paddingBottom: 10,
        gap: 15,
      }}
    >
      <Text>
        {isExpanded ? children : `${children.slice(0,500)}...`}
      </Text>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={() => toggleText()}>
            <Text style={{fontSize:16,fontWeight:'500',color:COLORS.primaryBackgroundBox}}>{isExpanded ? 'Rút gọn' : 'Xem thêm'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
