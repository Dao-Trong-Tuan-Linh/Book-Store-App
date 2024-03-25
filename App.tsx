import {useEffect} from "react"
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import TabNavigator from "./navigators/TabNavigator";
import React from "react";
import Login from "./screens/Login";
import Register from "./screens/Register";

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,...TransitionPresets.SlideFromRightIOS}}>
        <Stack.Screen name="Tab" component={TabNavigator}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


