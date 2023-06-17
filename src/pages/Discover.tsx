/* eslint-disable prettier/prettier */
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
interface Recipe {
  id: string;
  image: any;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  cookTime: string;
  serving: string;
  ingredients: string[];
  instructions: string[];
  comments: {
    author: {
      name: string;
      avatar: string;
    };
    text: string;
  }[];
}
const Discover = () => {
  const navigation: any = useNavigation();
  const [posts, setPosts] = useState<any[]>([]);
  const DATA: Recipe[] = [
    {
      id: '1',
      title: 'Vegetable & Fruit Salad with Spices',
      image: require('../assets/video.png'),
      author: {
        name: 'Tarifi Paylaşan Kişi',
        avatar: 'avatar-url',
      },
      cookTime: '30 dakika',
      serving: '4 kişilik',
      ingredients: ['Malzeme 1', 'Malzeme 2', 'Malzeme 3'],
      instructions: ['Adım 1', 'Adım 2', 'Adım 3'],
      comments: [
        {
          author: {
            name: 'Kullanıcı 1',
            avatar: 'avatar-url',
          },
          text: 'Yorum 1',
        },
        {
          author: {
            name: 'Kullanıcı 2',
            avatar: 'avatar-url',
          },
          text: 'Yorum 2',
        },
      ],
    },
    {
      id: '2',
      title: 'Vegetable & Fruit Salad with Kader Spices',
      image: require('../assets/video.png'),
      author: {
        name: 'Tarifi Paylaşan Kişi',
        avatar: 'avatar-url',
      },
      cookTime: '30 dakika',
      serving: '4 kişilik',
      ingredients: ['Malzeme 1', 'Malzeme 2', 'Malzeme 3'],
      instructions: ['Adım 1', 'Adım 2', 'Adım 3'],
      comments: [
        {
          author: {
            name: 'Kullanıcı 1',
            avatar: 'avatar-url',
          },
          text: 'Yorum 1',
        },
        {
          author: {
            name: 'Kullanıcı 2',
            avatar: 'avatar-url',
          },
          text: 'Yorum 2',
        },
      ],
    },
    {
      id: '3',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
      author: {
        name: 'Tarifi Paylaşan Kişi',
        avatar: 'avatar-url',
      },
      cookTime: '30 dakika',
      serving: '4 kişilik',
      ingredients: ['Malzeme 1', 'Malzeme 2', 'Malzeme 3'],
      instructions: ['Adım 1', 'Adım 2', 'Adım 3'],
      comments: [
        {
          author: {
            name: 'Kullanıcı 1',
            avatar: 'avatar-url',
          },
          text: 'Yorum 1',
        },
        {
          author: {
            name: 'Kullanıcı 2',
            avatar: 'avatar-url',
          },
          text: 'Yorum 2',
        },
      ],
    },
    {
      id: '4',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
      author: {
        name: 'Tarifi Paylaşan Kişi',
        avatar: 'avatar-url',
      },
      cookTime: '30 dakika',
      serving: '4 kişilik',
      ingredients: ['Malzeme 1', 'Malzeme 2', 'Malzeme 3'],
      instructions: ['Adım 1', 'Adım 2', 'Adım 3'],
      comments: [
        {
          author: {
            name: 'Kullanıcı 1',
            avatar: 'avatar-url',
          },
          text: 'Yorum 1',
        },
        {
          author: {
            name: 'Kullanıcı 2',
            avatar: 'avatar-url',
          },
          text: 'Yorum 2',
        },
      ],
    },
    {
      id: '5',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
      author: {
        name: 'Tarifi Paylaşan Kişi',
        avatar: 'avatar-url',
      },
      cookTime: '30 dakika',
      serving: '4 kişilik',
      ingredients: ['Malzeme 1', 'Malzeme 2', 'Malzeme 3'],
      instructions: ['Adım 1', 'Adım 2', 'Adım 3'],
      comments: [
        {
          author: {
            name: 'Kullanıcı 1',
            avatar: 'avatar-url',
          },
          text: 'Yorum 1',
        },
        {
          author: {
            name: 'Kullanıcı 2',
            avatar: 'avatar-url',
          },
          text: 'Yorum 2',
        },
      ],
    },
    {
      id: '6',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
      author: {
        name: 'Tarifi Paylaşan Kişi',
        avatar: 'avatar-url',
      },
      cookTime: '30 dakika',
      serving: '4 kişilik',
      ingredients: ['Malzeme 1', 'Malzeme 2', 'Malzeme 3'],
      instructions: ['Adım 1', 'Adım 2', 'Adım 3'],
      comments: [
        {
          author: {
            name: 'Kullanıcı 1',
            avatar: 'avatar-url',
          },
          text: 'Yorum 1',
        },
        {
          author: {
            name: 'Kullanıcı 2',
            avatar: 'avatar-url',
          },
          text: 'Yorum 2',
        },
      ],
    },
    {
      id: '7',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
      author: {
        name: 'Tarifi Paylaşan Kişi',
        avatar: 'avatar-url',
      },
      cookTime: '30 dakika',
      serving: '4 kişilik',
      ingredients: ['Malzeme 1', 'Malzeme 2', 'Malzeme 3'],
      instructions: ['Adım 1', 'Adım 2', 'Adım 3'],
      comments: [
        {
          author: {
            name: 'Kullanıcı 1',
            avatar: 'avatar-url',
          },
          text: 'Yorum 1',
        },
        {
          author: {
            name: 'Kullanıcı 2',
            avatar: 'avatar-url',
          },
          text: 'Yorum 2',
        },
      ],
    },
    {
      id: '8',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
      author: {
        name: 'Tarifi Paylaşan Kişi',
        avatar: 'avatar-url',
      },
      cookTime: '30 dakika',
      serving: '4 kişilik',
      ingredients: ['Malzeme 1', 'Malzeme 2', 'Malzeme 3'],
      instructions: ['Adım 1', 'Adım 2', 'Adım 3'],
      comments: [
        {
          author: {
            name: 'Kullanıcı 1',
            avatar: 'avatar-url',
          },
          text: 'Yorum 1',
        },
        {
          author: {
            name: 'Kullanıcı 2',
            avatar: 'avatar-url',
          },
          text: 'Yorum 2',
        },
      ],
    },
    {
      id: '9',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
      author: {
        name: 'Tarifi Paylaşan Kişi',
        avatar: 'avatar-url',
      },
      cookTime: '30 dakika',
      serving: '4 kişilik',
      ingredients: ['Malzeme 1', 'Malzeme 2', 'Malzeme 3'],
      instructions: ['Adım 1', 'Adım 2', 'Adım 3'],
      comments: [
        {
          author: {
            name: 'Kullanıcı 1',
            avatar: 'avatar-url',
          },
          text: 'Yorum 1',
        },
        {
          author: {
            name: 'Kullanıcı 2',
            avatar: 'avatar-url',
          },
          text: 'Yorum 2',
        },
      ],
    },
    {
      id: '10',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
      author: {
        name: 'Tarifi Paylaşan Kişi',
        avatar: 'avatar-url',
      },
      cookTime: '30 dakika',
      serving: '4 kişilik',
      ingredients: ['Malzeme 1', 'Malzeme 2', 'Malzeme 3'],
      instructions: ['Adım 1', 'Adım 2', 'Adım 3'],
      comments: [
        {
          author: {
            name: 'Kullanıcı 1',
            avatar: 'avatar-url',
          },
          text: 'Yorum 1',
        },
        {
          author: {
            name: 'Kullanıcı 2',
            avatar: 'avatar-url',
          },
          text: 'Yorum 2',
        },
      ],
    },
    {
      id: '11',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
      author: {
        name: 'Tarifi Paylaşan Kişi',
        avatar: 'avatar-url',
      },
      cookTime: '30 dakika',
      serving: '4 kişilik',
      ingredients: ['Malzeme 1', 'Malzeme 2', 'Malzeme 3'],
      instructions: ['Adım 1', 'Adım 2', 'Adım 3'],
      comments: [
        {
          author: {
            name: 'Kullanıcı 1',
            avatar: 'avatar-url',
          },
          text: 'Yorum 1',
        },
        {
          author: {
            name: 'Kullanıcı 2',
            avatar: 'avatar-url',
          },
          text: 'Yorum 2',
        },
      ],
    },
    {
      id: '12',
      title: 'Vegetable & Fruit Salad with Indian Spices',
      image: require('../assets/video.png'),
      author: {
        name: 'Tarifi Paylaşan Kişi',
        avatar: 'avatar-url',
      },
      cookTime: '30 dakika',
      serving: '4 kişilik',
      ingredients: ['Malzeme 1', 'Malzeme 2', 'Malzeme 3'],
      instructions: ['Adım 1', 'Adım 2', 'Adım 3'],
      comments: [
        {
          author: {
            name: 'Kullanıcı 1',
            avatar: 'avatar-url',
          },
          text: 'Yorum 1',
        },
        {
          author: {
            name: 'Kullanıcı 2',
            avatar: 'avatar-url',
          },
          text: 'Yorum 2',
        },
      ],
    },
  ];
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get('https://rest-api-ngr2.onrender.com/api/posts');
      setPosts(data);
    };
    fetchPosts();
  }
    , []);

  const renderItem = ({item}: {item: Recipe}) => (
      <TouchableOpacity onPress={() => navigation.navigate('RecipeDetailScreen', { recipe: item })}
      style={styles.recipeItem}>
        <Image source={item.image} style={styles.recipeImage} />
        <Text style={styles.recipeTitle}>{item.title}</Text>
      </TouchableOpacity>
  );
  return (
    <View style={styles.container} >
      <Text style={styles.title}>Discover</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item: Recipe) => item.id}
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
