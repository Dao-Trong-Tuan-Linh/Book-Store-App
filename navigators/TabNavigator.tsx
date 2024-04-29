import {} from "react"
import {StyleSheet} from "react-native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { COLORS } from "../theme/theme"
import Home from "../screens/Home"
import Cart from "../screens/Cart"
import Favorite from "../screens/Favorite"
import Account from "../screens/Account"
import Icon from 'react-native-vector-icons/FontAwesome6'


const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{marginBottom:5}}} initialRouteName="Trang chủ">
        <Tab.Screen name="Trang chủ" component={Home} options={{
          tabBarIcon:({color,size}) => (
            <Icon name="house" color={color} size={size} />
          )
        }}/>
        <Tab.Screen name="Danh mục" component={Cart} options={{
          tabBarIcon:({color,size}) => ( 
            <Icon name="list" color={color} size={size} />
          )
        }}/>
        <Tab.Screen name="Thông báo" component={Favorite} options={{
          tabBarIcon:({color,size}) => (
            <Icon name="bell" color={color} size={size} />
          )
        }}/>
        <Tab.Screen name="Tài khoản" component={Account} options={{
          tabBarIcon:({color,size}) => (
            <Icon name="user" color={color} size={size} />
          )
        }}/>
    </Tab.Navigator>
  )
}
