/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

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

interface User {
  id: string;
  name: string;
  location: string;
  postImages: any[];  
  recipeTitles: string[];
  followers: number;
  following: number;
  postNum: number;
  username: string;
  profilePicture: any;
}

type RootStackParamList = {
  RecipeDetailScreen: { recipe: Recipe };
};

type RecipeDetailScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetailScreen'>;
type RecipeDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecipeDetailScreen'>;

interface Props {
  route: RecipeDetailScreenRouteProp;
  navigation: RecipeDetailScreenNavigationProp;
}

const RecipeDetail: React.FC<Props> = ({ route }) => {
  const { recipe } = route.params;
  const navigation:any = useNavigation();

  const selectedUser: User = {
    id: '1',
    name: 'Adınız',
    location: 'Istanbul, Turkey',
    postImages: [
      require('../assets/video.png'),
      require('../assets/video1.png'),
      require('../assets/video2.png'),
      require('../assets/video.png'),
    ],
    recipeTitles: ['Tarif 1', 'Tarif 2', 'Tarif 3', 'Tarif 4'],
    followers: 29500,
    following: 127,
    postNum: 4,
    username: '@kullanici_adi',
    profilePicture: require('../assets/profilepic.jpg'),
  };

  const handleBackPress = () => {
    navigation.navigate('Discover'); // Discover sayfasına yönlendirme
  };
  const handleProfile = () => {
    navigation.navigate('ProfileScreen', { user: selectedUser }); // Profile sayfasına yönlendirme
  };
  return (
    <ScrollView style={styles.container} >
      <View>
        <Image style={styles.recipeImage} source={recipe.image} />
        <TouchableOpacity onPress={handleBackPress} style={styles.backBtn} >
          <Text style={styles.backBtnTxt}>{'< Back'}</Text>
        </TouchableOpacity>
        <View style={styles.interaction} >
            <View style={styles.react} >
              <TouchableOpacity>
                <Image source={
                  require('../assets/heart.png')
                } />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{marginLeft:5}} source={
                  require('../assets/share.png')
                } />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Image source={
                require('../assets/Saved.png')
              } />
            </TouchableOpacity>
        </View>
        <View style={
          styles.likenum
          } >
          <Text style={styles.numLikeTxt} >
            100 likes
          </Text>
        </View>
      </View>
      <Text style={styles.title} >{recipe.title}</Text>
      <View style={styles.horizontalLine} />
      <View style={styles.profileInfo}>
        <TouchableOpacity onPress={handleProfile} style={styles.profileLeft} >
        <Image source={require('../assets/profilepic.jpg')} style={styles.profilePicture} />
          <View style={{marginLeft: 10}} >
            <Text style={styles.name}>Adınız</Text>
            <View style={{flexDirection: 'row',}} >
              <Image source={require('../assets/location.png')}  />
              <Text style={{marginLeft: 5,}} >Location name</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoRecipe} >
        <View style={styles.cookBox} >
          <Text style={styles.BoxTxt}>{recipe.cookTime}
           <Text> Cook Time</Text>
          </Text>
        </View>
        <View style={styles.cookBox}>
          <Text style={styles.BoxTxt}>{recipe.serving}
            <Text>Serving</Text>
          </Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.ingrContainer} >
        <Text style={styles.IngredientTitle}>Ingredients</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <View key={index} style={{flexDirection: 'row'}} >
            <Text style={styles.IngredientNum} >{index + 1}</Text>
            <Text key={index} style={styles.IngredientText}>
              {ingredient}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.ingrContainer} >
        <Text style={styles.IngredientTitle}>Instructions</Text>
        {recipe.instructions.map((instruction, index) => (
          <View key={index} style={{flexDirection: 'row'}} >
            <Text style={styles.IngredientNum} >{index + 1}</Text>
            <Text key={index} style={styles.IngredientText}>
              {instruction}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.ingrContainer}>
        <Text style={styles.IngredientTitle}>Comments</Text>
        {recipe.comments.map((comment, index) => (
          <View key={index} style={styles.commentContainer}>
            <Image source={require('../assets/profilepic.jpg')} style={styles.commentAvatar} />
            <View style={styles.commentContent}>
              <Text style={styles.commentAuthor}>{comment.author.name}</Text>
              <Text style={styles.commentText}>{comment.text}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment..."
        // Yorum yapılınca yapılacak işlemleri buraya ekleyin
        />
        <TouchableOpacity style={styles.commentButton}>
          <Text style={styles.commentButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ingrContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  recipeImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 10,
    color: '#303030',
    textAlign: 'center',
  },
    horizontalLine: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 0.4,
      marginVertical: 10,
    },
    backBtn: {
      position: 'absolute',
      top: 20,
      left: 20,
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
    },
    backBtnTxt: {
      color: '#000',
      fontWeight: 'bold',
    },
    profileInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 10,
    },
    profilePicture: {
      width: 50,
      height: 50,
      borderRadius: 50,
    },
  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    followButton: {
      backgroundColor: '#F5484A',
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    followButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  interaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  react: {
    flexDirection: 'row',
  },
  infoRecipe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cookBox: {
    width: 100,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  BoxTxt: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
  },
  likenum: {
    paddingHorizontal: 10,
    marginTop: -15,
  },
  numLikeTxt: {
    color: '#000',
    fontSize: 12,
  },
  IngredientTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 10,
    color: '#303030',
  },
  IngredientText: {
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    color: '#303030',
  },
  IngredientNum: {
    fontSize: 12,
    backgroundColor: '#FFF4F4',
    borderRadius: 50,
    width: 20,
    height: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    color: '#F5484A',
    fontWeight: 'bold',
    paddingVertical: 2,
  },
  commentContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  commentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  commentContent: {
    marginLeft: 10,
  },
  commentAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#303030',
  },
  commentText: {
    fontSize: 14,
    color: '#303030',
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#FFF4F4',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },
  commentButton: {
    backgroundColor: '#F5484A',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  commentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RecipeDetail;

