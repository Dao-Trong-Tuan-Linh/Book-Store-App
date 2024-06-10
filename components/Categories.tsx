import React from "react";
import { ScrollView, View, TouchableOpacity, Text, Image } from "react-native";
import { COLORS } from "../theme/theme";

interface ICategory {
    id:number,
    name:string,
    image:string,
    params:string
}
interface CategoriesProps {
    categories:ICategory[],
    navigation:any
}
export default function Categories({ navigation,categories }:CategoriesProps) {
  return (
    <ScrollView horizontal={true}>
      <View
        style={{
          flexDirection: "row",
          gap: 30,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {categories.map(category => (
            <View
            key={category.id}
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
              onPress={() => navigation.navigate("CategoryProducts",{categoryBooks:category.params})}
            >
              <Image
                style={{ width: 65, height: 65, borderRadius: 10 }}
                source={{
                  uri: category.image,
                }}
              />
            </TouchableOpacity>
            <Text style={{ textAlign: "center" }}>{category.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
