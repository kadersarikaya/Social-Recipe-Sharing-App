/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Recipe {
    id: string;
    title: string;
    image: any;
}
interface User {
    id: string;
    name: string;
    location: string;
    followers: number;
    following: number;
    postNum: number;
    recipeTitles: string[];
    postImages: any[];
    username: string;
    profilePicture: any;
}


const ProfileScreen: React.FC<{ route: { params: { user: User } } }> = ({ route }) => {
    const { user } = route.params;
    const navigation: any = useNavigation();

    const renderRecipeItem = ({ item }: { item: Recipe }) => (
        <View style={styles.recipeItem}>
            <Image source={item.image} style={styles.recipeImage} />
            <Text style={styles.recipeTitle}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={
                () => navigation.goBack()
            } style={styles.backButton}>
                <Text style={styles.backButtonText}>{'< Back'}</Text>
            </TouchableOpacity>
            <View style={styles.profileInfo}>
                <Image source={require('../assets/profilepic.jpg')} style={styles.profilePicture} />
                <View>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.username}>{`@${user.username}`}</Text>
                </View>
                <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statsItem}>
                    <Text style={styles.statsNum}>{user.postNum}</Text>
                    <Text style={styles.statsText}>Recipes</Text>
                </View>
                <View style={styles.statsItem}>
                    <Text style={styles.statsNum}>{user.following}</Text>
                    <Text style={styles.statsText}>Following</Text>
                </View>
                <View style={styles.statsItem}>
                    <Text style={styles.statsNum}>{user.followers}</Text>
                    <Text style={styles.statsText}>Followers</Text>
                </View>
            </View>
            <FlatList
                data={user.recipeTitles.map((title, index) => ({
                    id: index.toString(),
                    title: title,
                    image: user.postImages[index],
                }))}
                renderItem={renderRecipeItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.recipeList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backButton: {
        marginTop: 10,
        marginLeft: 10,
    },
    backButtonText: {
        fontSize: 16,
        color: '#F5484A',
    },
    profileInfo: {
        marginVertical: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profilePicture: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    username: {
        fontSize: 16,
        color: 'gray',
        marginTop: 5,
    },
    followButton: {
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#F5484A',
        borderRadius: 20,
    },
    followButtonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    statsText: {
        fontSize: 16,
    },
    statsNum: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    statsItem: {
        alignItems: 'center',
    },
    recipeList: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10,
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
    },
});

export default ProfileScreen;
