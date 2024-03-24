import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import Account from './Account'
import Login from './Login'
import Register from './Register'
import {RootStackParamList } from './types'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function AccountScreen() {
    
  return (
        <Stack.Navigator initialRouteName='Account' screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
            <Stack.Screen name="Account" component={Account}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
  )
}
