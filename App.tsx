import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import TabNavigator from "./navigators/TabNavigator";
import React, { useEffect, useState } from "react";
import Login from "./screens/Login";
import Register from "./screens/Register";
import 'react-native-gesture-handler'
import Cart from "./screens/Cart";
import DetailBook from "./screens/DetailBook";
import NetInfo from "@react-native-community/netinfo"
import {Alert,AppRegistry } from 'react-native';
import CategoryProducts from "./screens/CategoryProducts";

const Stack = createStackNavigator()
export default function App() {
  

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if(!state.isConnected) {
        showAlert()
      }
    })
    return () => {
      unsubscribe()
    }
  },[])

  const showAlert = () => {
		Alert.alert(
			'Kết nối Internet',
			'Bạn đang mất kết nối Internet.Hãy thử kết nối lại.'
		);
	};
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,...TransitionPresets.SlideFromRightIOS}}>
        <Stack.Screen name="Tab" component={TabNavigator}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="DetailBook" component={DetailBook}/>
        <Stack.Screen name="CategoryProducts" component={CategoryProducts}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



