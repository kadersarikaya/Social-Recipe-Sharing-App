/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ImageBackground, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from '@react-navigation/native';

const StartPage = () => {
    const navigation:any = useNavigation();

    const handleStartCooking = () => {
        navigation.navigate('Home'); // Ana sayfaya yönlendirme
    };
  return (
      <ImageBackground source={require('./assets/bgImage.png')} style={styles.backgroundImage}>
          <View style={styles.container}>
              <Text style={styles.title}>Let’s Cooking</Text>
              <Text style={styles.slogan} >Find best recipes for cooking</Text>
              <TouchableOpacity style={styles.button} onPress={handleStartCooking}>
                  <Text style={styles.buttonText}>Start cooking</Text>
              </TouchableOpacity>
          </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 64,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // İsteğe bağlı olarak bir arka plan rengi de ekleyebilirsiniz
    },
    title: {
        fontSize: 56,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 24,
        marginTop: 370,
        textAlign: 'center',
    },
    slogan: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#E23E3E',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});


export default StartPage;
