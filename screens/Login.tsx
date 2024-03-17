import React from 'react'
import { View,Text, Button, TextInput , TouchableOpacity,StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Login() {
    return (
        <View style={{
            flex: 1,
            margin :10
        }}>
            <TouchableOpacity style={styles.exitbtn} onPress={onPress}>
                <Text style={styles.exitText}>x </Text>
             </TouchableOpacity>
            {/* header */}
            <View>  
            <Text style={styles.tittle}>Đăng nhập</Text>
            <Text style={styles.abt}>Mua sắm và nhận ưu đãi mới nhất từ BookStore</Text>
            </View>
            {/* body */}
            <View> 
            <Text style={styles.info}>Số điện thoại <Text style={styles.redtext}>*</Text></Text>
            <TextInput style={styles.input}  placeholder='UserName'/>
            <Text style={styles.info}>Nhập mật khẩu <Text style={styles.redtext}>*</Text></Text>
            <TextInput style={styles.input} placeholder='Password'
            secureTextEntry={true}
            />
            <TouchableOpacity onPress={onPress}><Text style={styles.ar}>Quên mật hẩu</Text></TouchableOpacity>
            </View>
            {/* footer */}
            <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button onPress={onPress} title={'Đăng nhập'} color="red" />
            </View>
            <View style={{
              flexDirection: 'row',
              position: 'absolute', // vị trí tuyệt đối so với container
              bottom: 0, // đặt nó ở cuối cùng theo chiều dọc
            }}><Text style={styles.ft}>Bạn chưa có tài khoản? </Text><TouchableOpacity style={{}} onPress={onPress}><Text style={styles.redtext}>Đăng ký</Text></TouchableOpacity></View>
            
            </View>
        </View>    
    );
  }
function onPress()
{

}
const styles = StyleSheet.create({
redtext:{
    color: 'red',
    textAlign: 'center'
},
tittle:{
    fontSize: 30,
    marginBottom: 10
},
info:{

},
ar:{
    textAlign: 'right',
    margin: 5
},
input: {
    borderWidth: 1, // Độ rộng của border
    borderColor: '#ccc', // Màu sắc của border
    borderRadius: 5, // Bo tròn các góc
    padding: 10, // Khoảng cách nội dung và border
    fontSize: 16, // Kích thước của font
    width: '100%', // Chiều rộng của input (có thể điều chỉnh)
  }, 
  container: {
    flex: 1,
    // justifyContent: 'center', // Căn giữa theo trục dọc
    margin: 20,
    alignItems: 'center', // Căn giữa theo trục ngang
  },
  buttonContainer: {
    width: '100%', // Kích thước chiều ngang là 90% của chiều ngang màn hình
  
    borderRadius: 10, // Bo tròn các góc với bán kính là 10
    overflow: 'hidden', // Đảm bảo rằng nội dung bên trong không bị tràn ra ngoài khi bo tròn gó
  },
  abt: {
    marginBottom:30
  },
  ft:{
    alignItems: 'center',
   
  },
  exitbtn:{
    alignItems: 'flex-end'
    
  },
  exitText:{
    fontSize: 20,
    // textAlign: 'right'
  }
});