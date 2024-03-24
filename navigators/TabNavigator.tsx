import {} from "react"
import {StyleSheet} from "react-native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { COLORS } from "../theme/theme"
import Home from "../screens/Home"
import Cart from "../screens/Cart"
import Favorite from "../screens/Favorite"
import Account from "../screens/Account"
import AccountScreen from "../screens/AccountScreen"

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Trang chủ" component={Home}/>
        <Tab.Screen name="Danh mục" component={Cart}/>
        <Tab.Screen name="Thông báo" component={Favorite}/>
        <Tab.Screen name="Tài khoản" component={AccountScreen}/>
    </Tab.Navigator>
  )
}
