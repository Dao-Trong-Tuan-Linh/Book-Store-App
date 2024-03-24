import {useEffect} from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import TabNavigator from "./navigators/TabNavigator";
import React from "react";
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Tab" component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


