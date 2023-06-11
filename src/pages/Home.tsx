/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import styles from '../styles/HomeStyles';
import { SavedRecipesContext } from '../components/context/saveContext.js';
import Bookmark from '../components/Bookmark';
import { useNavigation } from '@react-navigation/native';

interface Meal {
  name: string;
  image: any;
}
interface Category {
  name: string;
  meals: Meal[];
}

const categories: Category[] = [
  {
    name: 'Breakfast',
    meals: [
      { name: 'Eggs Benedict', image: require('../assets/category1.png') },
      { name: 'Pancakes', image: require('../assets/video.png') },
    ],
  },
  {
    name: 'Lunch',
    meals: [
      { name: 'Chicken Caesar Salad', image: require('../assets/video1.png') },
      { name: 'Club Sandwich', image: require('../assets/category1.png') },
    ],
  },
  {
    name: 'Dinner',
    meals: [
      { name: 'Spaghetti Bolognese', image: require('../assets/video2.png') },
      { name: 'Pizza', image: require('../assets/video1.png') },
    ],
  },
  {
    name: 'Dessert',
    meals: [
      { name: 'Cheesecake', image: require('../assets/video.png') },
      { name: 'Ice Cream Sundae', image: require('../assets/video1.png') },
    ],
  },
  {
    name: 'Drinks',
    meals: [
      { name: 'Mojito', image: require('../assets/video.png') },
      { name: 'Strawberry Daiquiri', image: require('../assets/category1.png') },
    ],
  },
  {
    name: 'Coffee',
    meals: [
      { name: 'Cappuccino', image: require('../assets/video.png') },
      { name: 'Latte', image: require('../assets/video1.png') },
    ],
  },
];

const data = [
  {
    id: 1,
    image: require('../assets/video.png'),
    title: 'Spicy seasoned seafood noodles',
    rate: 92,
  },
  {
    id: 2,
    image: require('../assets/video1.png'),
    title: 'Salted Pasta with mushroom sauce',
    rate: 97,
  },
  {
    id: 3,
    image: require('../assets/video2.png'),
    title: 'Beef dumpling in hot and sour soup',
    rate: 95,
  },
  {
    id: 4,
    image: require('../assets/video.png'),
    title: 'Healthy noodle with spinach leaf',
    rate: 95,
  },
];
interface Item {
  isSaved: boolean;
  id: number;
  image: any;
  title: string;
  rate: number;
}

const Home = () => {
  const { savedRecipes, saveRecipe, unsaveRecipe } = useContext(SavedRecipesContext);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const navigation: any = useNavigation();

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, []);

  const handleCategoryPress = (category: Category, index: number) => {
    setSelectedCategory(category);
    setSelectedCategoryIndex(index);
  };

  const handleSaveImage = (item: Item) => {
    if (savedRecipes.some((recipe: { id: number; }) => recipe.id === item.id)) {
      unsaveRecipe(item);
    } else {
      saveRecipe(item);
    }
  };

  const renderMealItem = ({ item }: { item: Meal }) => (
    <TouchableOpacity style={styles.menuItem} >
      <Image source={item.image} style={styles.mealImage} />
      <Text style={styles.mealTxt} >{item.name}</Text>
      <View>
        <Text style={styles.time}>Time</Text>
        <Text style={styles.second}>30 mins</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCategoryButton = ({ item, index }: { item: Category, index: number }) => (
    <TouchableOpacity style={[
      styles.categoryBtn,
      selectedCategoryIndex === index && styles.selectedCategoryBtn,
    ]}
      onPress={() => handleCategoryPress(item, index)}>
      <Text style={[
        styles.categoryTxt,
        selectedCategoryIndex === index && styles.selectedCategoryTxt,
      ]}>{item.name}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({ item }: { item: Item }) => {
    const isSaved = savedRecipes.some((recipe: { id: number; }) => recipe.id === item.id);
    return (
      <View style={styles.Flatlist} >
        <Bookmark isSaved={isSaved}
          onPress={() => handleSaveImage(item)}
          imageSource={require('../assets/Saved.png')}
          savedImageStyle={styles.savedImage}
          imageStyle={styles.saveImage}
        />
        <Image source={item.image}
          style={styles.image}
        />
        <Text style={styles.imgTitle}>{item.title}</Text>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container} >
      <View style={styles.header} >
        <View>
          <Text style={styles.title}>Find best recipes
            for cooking</Text>
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
        <View style={styles.trend} >
          <Text style={styles.trendTitle} >Trending now 🔥</Text>
          <TouchableOpacity onPress={
            () => navigation.navigate('Discover')
          } style={styles.trendBtn} >
            <Text style={styles.trendCTA} >See all</Text>
            <Image
              source={require('../assets/ArrowRight.png')}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: { id: { toString: () => any; }; }) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.popular}>
        <Text style={styles.popularTitle}>Popular category</Text>
        <FlatList
          data={categories}
          renderItem={renderCategoryButton}
          keyExtractor={(item: { name: string; }) => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        {selectedCategory && (
          <FlatList
            data={selectedCategory.meals}
            renderItem={renderMealItem}
            keyExtractor={(meal) => meal.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
