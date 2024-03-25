import React,{useState} from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Register() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View style={{ flex: 1, margin: 10 }}>
      <TouchableOpacity style={styles.exitbtn}>
        <Text style={styles.exitText}>x</Text>
      </TouchableOpacity>
      {/* header */}
      <View>
        <Text style={styles.title}>Đăng kí</Text>
      </View>
      {/* body */}
      <View>
        <Text style={styles.info}>Số điện thoại <Text style={styles.redtext}>*</Text></Text>
        <TextInput style={styles.input} placeholder='Nhập số điện thoại' />
        <Text style={styles.info}>Họ tên <Text style={styles.redtext}>*</Text></Text>
        <TextInput style={styles.input} placeholder='Nhập họ tên' />
        <Text style={styles.info}>Nhập mật khẩu <Text style={styles.redtext}>*</Text></Text>
        <TextInput style={styles.input} secureTextEntry={true} />
        <Text style={styles.info}>Email </Text>
        <TextInput style={styles.input} />
        <Text style={styles.info}>Ngày sinh </Text>
        <TextInput style={styles.input} />

        <Text style={styles.info}>Giới Tính</Text>
        <View style={styles.rowContainer} >
          
          <TouchableOpacity
            style={[styles.smallButton, selectedOption === 1 ? styles.selectedButton : null]}
            
          >
            
            {selectedOption === 1 ? <Text style={styles.checkmark}>✓</Text> : null}
          </TouchableOpacity>
          <Text style={[styles.genderLabel, { marginRight: 10 }]}>Nam</Text> 
          <TouchableOpacity
            style={[styles.smallButton, selectedOption === 2 ? styles.selectedButton : null]}
          >
            {selectedOption === 2 ? <Text style={styles.checkmark}>✓</Text> : null}
          </TouchableOpacity>
          <Text style={[styles.genderLabel, { marginLeft: 2 }]}>Nữ</Text>
        </View>
      </View>

      {/* footer */}
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title={'Đăng kí'} color="red" />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 0 }}>
          <Text style={styles.ft}>Bạn đã có tài khoản? </Text>
          <TouchableOpacity >
            <Text style={styles.redtext}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  smallButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: 'black',
  },
  redtext: {
    color: 'red',
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  info: {},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: '100%',
  },
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  exitbtn: {
    alignItems: 'flex-end',
  },
  exitText: {
    fontSize: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    
  },
  ft: {
    alignItems: 'center',
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
  },
  genderLabel: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5, // Thêm khoảng cách phía trên chữ giới tính
  },
});
