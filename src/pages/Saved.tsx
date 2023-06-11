/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { SavedRecipesContext } from '../components/context/saveContext.js';
import Bookmark from '../components/Bookmark';

const Saved = () => {
    const { savedRecipes, unsaveRecipe } = useContext(SavedRecipesContext);

    return (
        <View style={
            { flex: 1, backgroundColor: '#FFF', paddingHorizontal: 20}
        } >
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#303030',
                marginBottom: 20,
                marginTop: 20,
            }} >
                Saved Recipes
            </Text>
            {savedRecipes.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Image source={require('../assets/emptyImage.png')} style={styles.emptyImage} />
                    <Text style={styles.emptyText}>No saved recipes found.</Text>
                </View>
            ) : (
                <FlatList
                    data={savedRecipes}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.container} >
                            <Bookmark isSaved={true}
                                onPress={() => unsaveRecipe(item)}
                                imageSource={require('../assets/Saved.png')}
                                savedImageStyle={styles.savedImage}
                                imageStyle={styles.saveImage}
                            />
                            <Image source={item.image}
                                style={styles.image}
                            />
                            <Text style={styles.title} >{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
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
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    emptyText: {
        fontSize: 18,
        color: '#999',
    },
});

export default Saved;
