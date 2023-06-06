/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import React, {useState, useEffect} from 'react';

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
      { name: 'Eggs Benedict', image: require('./assets/category1.png') },
      { name: 'Pancakes', image: require('./assets/category2.png') },
    ],
  },
  {
    name: 'Lunch',
    meals: [
      { name: 'Chicken Caesar Salad', image: require('./assets/category3.png') },
      { name: 'Club Sandwich', image: require('./assets/category1.png') },
    ],
  },
  {
    name: 'Dinner',
    meals: [
      { name: 'Spaghetti Bolognese', image: require('./assets/category2.png') },
      { name: 'Pizza', image: require('./assets/category3.png') },
    ],
  },
];

const data = [
  {
    id: 1,
    image: require('./assets/video.png'),
    title: 'Spicy seasoned seafood noodles',
    rate: 92,
  },
  {
    id: 2,
    image: require('./assets/video1.png'),
    title: 'Salted Pasta with mushroom sauce',
    rate: 97,
  },
  {
    id: 3,
    image: require('./assets/video2.png'),
    title: 'Beef dumpling in hot and sour soup',
    rate: 95,
  },
  {
    id: 4,
    image: require('./assets/video.png'),
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
  const [savedItems, setSavedItems] = useState(data.map(() => false));
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, []);

  const handleCategoryPress = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleSaveImage = (item: Item) => {
    setSavedItems((prevSavedItems) => {
      const newSavedItems = [...prevSavedItems];
      newSavedItems[item.id - 1] = !newSavedItems[item.id - 1];
      return newSavedItems;
    });
    console.log('Image saved:', item.title);
  };

  const renderMealItem = ({ item }: { item: Meal }) => (
    <TouchableOpacity >
      <Image source={item.image} style={{ width: 100, height: 100 }} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderCategoryButton = ({ item }: { item: Category }) => (
    <TouchableOpacity onPress={() => handleCategoryPress(item)}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({ item }: { item: Item }) => {
    const isSaved = savedItems[item.id - 1];
    return (
      <View style={styles.Flatlist} >
        <TouchableOpacity style={styles.saveButton} onPress={() => handleSaveImage(item)}>
          <Image style={isSaved ? styles.savedImage : styles.saveImage} source={require('./assets/Saved.png')} />
        </TouchableOpacity>
        <Image source={item.image}
          style={styles.image}
        />
        <Text style={styles.imgTitle}>{item.title}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container} >
      <View>
        <Text style={styles.title}>Find best recipes
          for cooking</Text>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <View style={styles.trend} >
        <Text style={styles.trendTitle} >Trending now 🔥</Text>
        <TouchableOpacity style={styles.trendBtn} >
          <Text style={styles.trendCTA} >See all</Text>
          <Image
            source={require('./assets/ArrowRight.png')}
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
    color: '#303030',
  },
  searchInput: {
    marginTop: 20,
    fontSize: 16,
    padding: 10,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },
  trend: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trendTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#303030',
  },
  trendBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  trendCTA: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E23E3E',
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 10,
    marginRight: 10,
  },
  imgTitle: {
    color: '#303030',
    fontWeight: 'bold',
    fontSize: 16, marginTop: 12,
  },
  saveButton: {
    position: 'absolute',
    zIndex: 1,
    right: 10,
    top: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  Flatlist: {
    marginTop: 16,
    display: 'flex',
    marginBottom: 12,
  },
  saveImage: {
    backgroundColor: '#fff',
    borderRadius: 50,
    tintColor: '#000',
  },
  savedImage: {
    backgroundColor: '#E23E3E',
    tintColor: '#fff',
    borderRadius: 50,
  },
  popular: {
    paddingVertical: 20,
  },
  popularTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;