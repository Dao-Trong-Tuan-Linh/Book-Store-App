import React from 'react'
import { View,Text } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface HeaderAccountProps {
    displayName:string,
    email:string
}

export default function HeaderAccount({displayName,email}:HeaderAccountProps) {
  return (
    <View style={{backgroundColor:'white',marginTop:50}}>
        <View style={{borderBottomColor:'#f4f4f4',borderBottomWidth:1,paddingVertical:10,paddingHorizontal:10}}>
            <View style={{flexDirection:'row',gap:5}}>
            <MaterialCommunityIcons name="account" size={24} color="black" />
            <Text>Thông tin tài khoản</Text>
            </View>
        </View>
        <View style={{borderBottomColor:'#f4f4f4',borderBottomWidth:1,paddingVertical:10,flexDirection:'row',gap:20,paddingHorizontal:20}}>
            <View style={{gap:10}}>
                <Text>Họ và tên</Text>
                <Text>Email</Text>
                <Text>Cấp độ thành viên</Text>
                <Text>Số đơn hàng thành công</Text>
                <Text>Số tiền đã thanh toán</Text>
            </View>
            <View style={{gap:10}}>
                <Text>{displayName}</Text>
                <Text>{email}</Text>
                <Text>Cấp độ thành viên</Text>
                <Text>0 đơn hàng</Text>
                <Text>0 đ</Text>
            </View>
        </View>
    </View>
  )
}
