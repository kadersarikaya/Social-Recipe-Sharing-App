/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useContext} from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../components/context/AuthContext';

interface Recipe {
    id: number;
    title: string;
    image: any;
}

const recipes: Recipe[] = [
    { id: 1, title: 'Tarif 1', image: require('../assets/video.png') },
    { id: 2, title: 'Tarif 2', image: require('../assets/video1.png') },
    { id: 2, title: 'Tarif 2', image: require('../assets/video2.png') },
    { id: 1, title: 'Tarif 1', image: require('../assets/video.png') },
    { id: 2, title: 'Tarif 2', image: require('../assets/video1.png') },
    { id: 2, title: 'Tarif 2', image: require('../assets/video.png') },
];

const Profile = () => {
    const [userData, setUserData] = useState<any>();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get(`https://rest-api-ngr2.onrender.com/api/users/${user._id}`);
                setUserData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, [user]);

    const renderRecipeItem: React.FC<{ item: Recipe }> = ({ item }) => (
        <View style={styles.recipeItem}>
            <Image source={item.image} style={styles.recipeImage} />
            <Text style={styles.recipeTitle}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.profileInfo}>
                <Image source={require('../assets/profilepic.jpg')} style={styles.profilePicture} />
                <View style={styles.nameInfo} >
                    <Text style={styles.name}>{
                        userData?.username
                    }</Text>
                    <Text style={styles.username}>@{
                        userData?.username
                    }</Text>
                </View>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statsItem}>
                    <Text style={styles.statsNum}>245</Text>
                    <Text style={styles.statsText}>Recipes</Text>
                </View>
                <View style={styles.statsItem}>
                    <Text style={styles.statsNum}>
                        {userData?.followings.length}
                    </Text>
                    <Text style={styles.statsText}>Following</Text>
                </View>
                <View style={styles.statsItem}>
                    <Text style={styles.statsNum}>{userData?.followers.length}</Text>
                    <Text style={styles.statsText}>Followers</Text>
                </View>
            </View>
            <FlatList
                data={recipes}
                renderItem={renderRecipeItem}
                keyExtractor={(item) => item.id.toString()}
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
    },
    nameInfo: {
        marginLeft: 20,
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

export default Profile;
