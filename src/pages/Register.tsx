/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
interface RegisterProps {
    navigation: any
}

const Register : React.FC<RegisterProps> = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const handleUsernameChange = (value: string) => {
        setUsername(value);
        setIsUsernameValid(value.length >= 3);
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
        setIsEmailValid(value.includes('@'));
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
        setIsPasswordValid(value.length >= 6);
    };

    const handleRegister = async () => {
        setIsFetching(true);
        const user = {
            username: username,
            email: email,
            password: password,
        };
        try {
            await axios.post('https://rest-api-ngr2.onrender.com/api/auth/register', user);
            setIsFetching(false);
            navigation.navigate('Login');
        } catch (error) {
            console.log(error);
            setIsFetching(false);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Create an account</Text>
                <Text style={styles.span}>Let’s help you set up your account, it won’t take long.</Text>
            </View>
            <View>
                <View style={styles.inputPart}>
                    <Text style={styles.inputDesc}>Username</Text>
                    <TextInput style={styles.input} placeholder=""
                        value={username}
                        onChangeText={handleUsernameChange}
                    />
                </View>
                <View style={styles.inputPart}>
                    <Text style={styles.inputDesc}>Email</Text>
                    <TextInput style={styles.input}
                        value={email}
                        onChangeText={handleEmailChange}
                    placeholder="" />
                </View>
                <View style={styles.inputPart}>
                    <Text style={styles.inputDesc}>Password</Text>
                    <TextInput style={styles.input}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={handlePasswordChange}
                    placeholder="" />
                </View>
                <TouchableOpacity onPress={handleRegister} style={
                    [styles.button,
                        (!isUsernameValid || !isEmailValid || !isPasswordValid) && { opacity: 0.5 },
                    ]
                }
                    disabled={!isEmailValid || !isPasswordValid} >
                    {isFetching ? (
                        <Text style={styles.btnText}>Loading...</Text>
                    ) : (
                        <Text style={styles.btnText}>Sign Up</Text>
                    )}
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
        color: '#303030',
    },
    inputPart: {
        marginTop: 30,
    },
    inputDesc: {
        fontSize: 14,
        marginBottom: 5,
        color: '#303030',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#303030',
    },
    span: {
        fontSize: 11,
        color: '#303030',
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
        color: '#303030',
    },
});


export default Register;
