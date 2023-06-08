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
    {
      id: '7',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
    },
    {
      id: '8',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
    },
    {
      id: '9',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
    },
    {
      id: '10',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
    },
    {
      id: '11',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
    },
    {
      id: '12',
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
    <View style={styles.recipeItem}>
      <Image source={item.image} style={styles.recipeImage} />
      <Text style={styles.recipeTitle}>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.container} >
      <Text style={styles.title}>Discover</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item: Item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.recipeList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#303030',
    padding: 10,
  },
  recipeItem: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  recipeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  recipeTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    textAlign: 'center',
  },
  recipeList: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
});


export default Discover;
