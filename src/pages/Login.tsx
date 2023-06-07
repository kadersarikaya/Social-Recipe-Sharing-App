/* eslint-disable */
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';
import React from 'react';

interface LoginProps {
    navigation: any
}

const Login: React.FC<LoginProps> = ({navigation}) => {
  return (
  <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title} >Hello,</Text>
        <Text style={styles.span}>Welcome Back!</Text>
      </View>
      <View>
        <View style={styles.inputPart}>
          <Text style={styles.inputDesc}>Email</Text>
          <TextInput style={styles.input} placeholder="" />
        </View>
        <View style={styles.inputPart}>
          <Text style={styles.inputDesc}>Enter Password</Text>
          <TextInput style={styles.input} placeholder="" />
        </View>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.btnText} >Login</Text>
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
  },
  inputPart : {
    marginTop: 30,
  },
  inputDesc: {
    fontSize: 14,
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  span: {
    fontSize: 20,
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
    color: '#E23E3E',
  }
});


export default Login;
