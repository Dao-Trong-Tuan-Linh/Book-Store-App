import React from 'react'
import {View,ImageBackground,Text,TouchableOpacity,Dimensions} from "react-native"

const screenWidth = Dimensions.get("window").width;

interface HeaderNoAccountProps {
    navigation:any
}
export default function HeaderNoAccount({navigation}:HeaderNoAccountProps) {
  return (
    <View style={{position:'relative',alignItems:'center',justifyContent:'center'}}>
          <ImageBackground style={{width:screenWidth,height:250}} source={{uri:"https://img.freepik.com/free-vector/books-store-house-city-street_107791-15382.jpg?w=1380&t=st=1715525305~exp=1715525905~hmac=75af40ffbc1a8308fb1d8a2107621fc02cb5501221dac510e5e182d716ca06a9"}} resizeMode="cover"/>
          <View style={{position:'absolute',alignItems:'center'}}>
          <Text style={{fontSize:24,fontWeight:'600',color:'white'}}>Book Store</Text>
          <Text style={{fontSize:16,fontWeight:'400',color:'white'}}>Kết nối để nhận nhiều ưu đãi</Text>
          </View>
          <View style={{position:'absolute',bottom:20,flexDirection:'row',justifyContent:'space-around',width:screenWidth}}>
            <TouchableOpacity onPress={() => navigation.navigate('Login',{ isNavigation: false })} style={{width:screenWidth/2 - 50,paddingTop:10,paddingBottom:10,borderColor:'white',borderWidth:1,borderRadius:5,alignItems:'center'}}>
              <Text style={{color:'white'}}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register',{ isNavigation: false })} style={{width:screenWidth/2 - 50,paddingTop:10,paddingBottom:10,backgroundColor:'white',borderRadius:5,alignItems:'center'}}>
              <Text style={{color:'#222'}}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
  )
}
