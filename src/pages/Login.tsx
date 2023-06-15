/* eslint-disable */
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
interface LoginProps {
    navigation: any
}

const Login: React.FC<LoginProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };

    axios
      .post('https://rest-api-ngr2.onrender.com/api/auth/login', data)
      .then(() => {
        console.log('Giriş başarılı');
        navigation.navigate('BottomTab');
      })
      .catch((error) => {
        console.error('Giriş hatası:', error);
      });
  };
  return (
  <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title} >Hello,</Text>
        <Text style={styles.span}>Welcome Back!</Text>
      </View>
      <View>
        <View style={styles.inputPart}>
          <Text style={styles.inputDesc}>Email</Text>
          <TextInput style={styles.input} 
            onChangeText={handleEmailChange}
          placeholder="" />
        </View>
        <View style={styles.inputPart}>
          <Text style={styles.inputDesc}>Enter Password</Text>
          <TextInput onChangeText={handlePasswordChange} 
          secureTextEntry={true}
          style={styles.input} placeholder="" />
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.button} >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 10 }}>
          Don’t have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.cta}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 94,
    marginHorizontal: 30,
  },
  input: {
    height: 55,
    borderWidth: 1,
    padding: 15,
    fontSize: 20,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    color:'#303030'
  },
  inputPart : {
    marginTop: 30,
  },
  inputDesc: {
    fontSize: 14,
    marginBottom: 5,
    color: '#303030'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#303030'
  },
  span: {
    fontSize: 20,
    color: '#303030'
  },
  button: {
    marginTop: 30,
    backgroundColor: '#E23E3E', 
    height: 60, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  btnText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  cta: {
    color: '#303030'
  }
});


export default Login;
