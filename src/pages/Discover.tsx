/* eslint-disable prettier/prettier */
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Discover = () => {
  const navigation: any = useNavigation();
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get('https://rest-api-ngr2.onrender.com/api/posts/getAllPosts');
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const navigateToRecipeDetail = (item: any) => {
    navigation.navigate('RecipeDetailScreen', { post: item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToRecipeDetail(item)} style={styles.recipeItem}>
            <Image source={require('../assets/video.png')} style={styles.recipeImage} />
            <Text style={styles.recipeTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
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
