/* eslint-disable prettier/prettier */
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';
import React from 'react';

interface RegisterProps {
    navigation: any
}

const Register : React.FC<RegisterProps> = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Create an account</Text>
                <Text style={styles.span}>Let’s help you set up your account, it won’t take long.</Text>
            </View>
            <View>
                <View style={styles.inputPart}>
                    <Text style={styles.inputDesc}>Username</Text>
                    <TextInput style={styles.input} placeholder="" />
                </View>
                <View style={styles.inputPart}>
                    <Text style={styles.inputDesc}>Email</Text>
                    <TextInput style={styles.input} placeholder="" />
                </View>
                <View style={styles.inputPart}>
                    <Text style={styles.inputDesc}>Password</Text>
                    <TextInput style={styles.input} placeholder="" />
                </View>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.btnText} >Sign Up</Text>
                </TouchableOpacity>
                <Text style={{marginTop: 10}} >
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.cta}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 54,
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
    inputPart: {
        marginTop: 30,
    },
    inputDesc: {
        fontSize: 14,
        marginBottom: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    span: {
        fontSize: 11,
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
    },
});


export default Register;
