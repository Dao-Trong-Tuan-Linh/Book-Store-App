import {} from "react"
import {StyleSheet} from "react-native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { COLORS } from "../theme/theme"
import Home from "../screens/Home"
import Cart from "../screens/Cart"
import Favorite from "../screens/Favorite"
import History from "../screens/Account"

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Cart" component={Cart}/>
        <Tab.Screen name="Favorite" component={Favorite}/>
        <Tab.Screen name="Tài khoản" component={History}/>
    </Tab.Navigator>
  )
}
