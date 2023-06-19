/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../components/context/AuthContext';
import axios from 'axios';

const RecipeDetail = ({ route }: any) => {
  const { user } = useContext(AuthContext);
  const { post } = route.params;
  const navigation: any = useNavigation();
  const [userData, setUserData] = useState<any>();
  const [isLiked, setIsLiked] = useState(false);
  const [likeNum, setLikeNum] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`https://rest-api-ngr2.onrender.com/api/users/${post.userId}`);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchComments = async () => {
      try {
        const { data } = await axios.get(`https://rest-api-ngr2.onrender.com/api/posts/${post._id}/comments`);
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
    fetchComments();
  }, [post.userId, post._id]);


  const handleCommentPost = async () => {
    try {
      // Send the comment to the server
      const { data } = await axios.post(
        `https://rest-api-ngr2.onrender.com/api/posts/${post._id}/comment`,
        {
          comment: commentText,
        }
      );

      // Clear the comment input and update the comments state
      setCommentText('');
      setComments([...comments, data]);
    } catch (error) {
      console.log(error);
    }
  };


  const handleFollow = () => {
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      setLikeNum(likeNum - 1);
    } else {
      setLikeNum(likeNum + 1);
    }
  };


  const handleBackPress = () => {
    navigation.navigate('Discover'); // Discover sayfasına yönlendirme
  };
  const handleProfile = () => {
    if (post.userId === user._id) {
      navigation.navigate('Profile');
    }
    else {
      navigation.navigate('ProfileScreen', {user: userData});
    }// Profile sayfasına yönlendirme
  };
  return (
    <ScrollView style={styles.container} >
      <View>
        <Image style={styles.recipeImage} source={require('../assets/video.png')} />
        <TouchableOpacity onPress={handleBackPress} style={styles.backBtn} >
          <Text style={styles.backBtnTxt}>{'< Back'}</Text>
        </TouchableOpacity>
        <View style={styles.interaction} >
            <View style={styles.react} >
              <TouchableOpacity onPress={handleLike} >
                <Image style={isLiked ? {tintColor: 'red'} : {tintColor: 'black'}}
                 source={
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
        <View style={styles.likenum}>
          <Text style={styles.numLikeTxt}>likes</Text>
        </View>
      </View>
      <Text style={styles.title}>{post?.title}</Text>
      <View style={styles.horizontalLine} />
      <View style={styles.profileInfo}>
        <TouchableOpacity onPress={handleProfile} style={styles.profileLeft} >
        <Image source={require('../assets/profilepic.jpg')} style={styles.profilePicture} />
          <View style={{ marginLeft: 10 }}>
              <Text style={styles.name}>{userData?.username}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../assets/location.png')} />
              <Text style={{ marginLeft: 5 }}>Location</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFollow} style={styles.followButton}>
          <Text style={styles.followButtonText}>follow</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoRecipe} >
        <View style={styles.cookBox} >
          <Text style={styles.BoxTxt}>{post?.cookTime}</Text>
          <Text style={{textAlign:'center'}}>Cook Time</Text>
        </View>
        <View style={styles.cookBox}>
          <Text style={styles.BoxTxt}>{post?.servings}</Text>
          <Text >Serving</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.ingrContainer} >
        <Text style={styles.IngredientTitle}>Ingredients</Text>
        {post?.ingredients.map((ingredient:any, index:any) => (
          <View key={index} style={styles.ingredientRow} >
            <Text style={styles.IngredientNum} >{index + 1}</Text>
            <Text key={index} style={styles.IngredientText}>
              {ingredient}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.ingrContainer} >
        <Text style={styles.IngredientTitle}>Instructions</Text>
        {post?.instructions.map((instruction:any, index:any) => (
          <View key={index} style={styles.instructionRow} >
            <Text style={styles.IngredientNum} >{index + 1}</Text>
            <Text key={index} style={styles.IngredientText}>
              {instruction}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment..."
          value={commentText}
          onChangeText={setCommentText}
        />
        <TouchableOpacity onPress={handleCommentPost} style={styles.commentButton}>
          <Text style={styles.commentButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.ingrContainer}>
        <Text style={styles.IngredientTitle}>Comments</Text>
        {comments.map((comment:any, index:any) => (
          <View key={index} style={styles.commentRow}>
            <Image source={require('../assets/profilepic.jpg')} style={styles.profilePicture} />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.name}>User</Text>
              <Text>{comment?.comment}</Text>
            </View>
          </View>
        ))}
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
    height: 70,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
  commentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
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
    marginVertical: 10,
    color: '#303030',
  },
  IngredientText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: '#303030',
  },
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  instructionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 5,
  },
  IngredientNum: {
    fontSize: 12,
    backgroundColor: '#FFF4F4',
    borderRadius: 50,
    width: 20,
    height: 20,
    textAlign: 'center',
    color: '#F5484A',
    fontWeight: 'bold',
    paddingVertical: 2,
  },
  commentContainer: {
    flexDirection: 'row',
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

