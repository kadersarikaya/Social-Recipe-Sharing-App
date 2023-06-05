/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
//recipe home screen
const Home = () => {
  return (
    <SafeAreaView style={styles.container} >
      <View>
        <Text style={styles.title}>Find best recipes
          for cooking</Text>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <View>
        <Text>Trending now 🔥</Text>
        <TouchableOpacity>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 22,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  searchInput: {
    marginTop: 20,
    fontSize: 16,
    padding: 10,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },
  svgIcon: {
    position: 'absolute',
    right: 30,
    top: 40,
  },
});

export default Home;
