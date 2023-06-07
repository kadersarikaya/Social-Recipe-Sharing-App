/* eslint-disable prettier/prettier */
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';

const Discover = () => {
  const DATA = [
    {
      id: '1',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
    },
    {
      id: '2',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
    },
    {
      id: '3',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
    },
    {
      id: '4',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
    },
    {
      id: '5',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
    },
    {
      id: '6',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
    },
  ];
  interface Item {
    id: string;
    title: string;
    image: any;
  }

  const renderItem = ({item}: {item: Item}) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.container} >
      <Text style={styles.title}>Discover</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item: Item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#303030',
    marginBottom: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 20, marginVertical: 8,
    marginHorizontal: 16, borderRadius: 10,
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});


export default Discover;
