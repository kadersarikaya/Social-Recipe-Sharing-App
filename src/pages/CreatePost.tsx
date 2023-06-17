/* eslint-disable prettier/prettier */
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { AuthContext } from '../components/context/AuthContext';

const RecipeCreationPage = () => {
    const { user } = useContext(AuthContext);
    const [recipeTitle, setRecipeTitle] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [serves, setServes] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [instructions, setInstructions] = useState(['']);
    const [file, setFile] = useState(null as any);

    useEffect(() => {
        console.log('Thumbnail:', file);
    }, [file]);

    const handleCreatePost = async () => {
        const newPost = {
            userId: user._id,
            title: recipeTitle,
            cookTime: cookTime,
            servings: serves,
            ingredients: ingredients,
            instructions: instructions,
            thumbnail: file,
        };
        if (file) {
            const formData = new FormData();
            const fileName = Date.now() + '.jpg';
            formData.append('name', fileName);
            formData.append('file', {
                uri: file,
                type: 'image/jpeg',
                name: fileName,
            });
            newPost.thumbnail = fileName;
            try {
                await axios.post('https://rest-api-ngr2.onrender.com/api/upload', formData);
            } catch (err) {
                console.error('Error uploading image:', err);
            }
        }

        try {
            await axios.post('https://rest-api-ngr2.onrender.com/api/posts', newPost);
            console.log('Post created successfully');
        } catch (err) {
            console.error('Error creating post:', err);
        }
    };
    const handleAddIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const handleAddInstruction = () => {
        setInstructions([...instructions, '']);
    };

    const handleIngredientChange = (text: string, index: number) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = text;
        setIngredients(newIngredients);
    };

    const handleInstructionChange = (text: string, index: number) => {
        const newInstructions = [...instructions];
        newInstructions[index] = text;
        setInstructions(newInstructions);
    };

    const renderIngredients = () => {
        return ingredients.map((ingredient, index) => (
            <TextInput
                style={styles.input}
                key={index}
                value={ingredient}
                onChangeText={(text) => handleIngredientChange(text, index)}
                placeholder="Ingredient"
            />
        ));
    };

    const renderInstructions = () => {
        return instructions.map((instruction, index) => (
            <TextInput
                style={styles.input}
                key={index}
                value={instruction}
                onChangeText={(text) => handleInstructionChange(text, index)}
                placeholder="Instruction"
            />
        ));
    };

    const handleImageSelection = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (!response.didCancel && !response.errorCode && response.assets && response.assets.length > 0) {
                setFile(response.assets[0]?.uri || null as any);
            }
        });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageBox}>
                    <Image
                        style={file ? styles.coverImg : styles.coverImgPlaceholder}
                        source={
                            file
                                ? { uri: file }
                                : require('../assets/gallery.png')
                        }
                    />
                </View>
                <TouchableOpacity style={styles.selectImageBtn} onPress={handleImageSelection}>
                    <Text style={styles.selectImageText}>Select Image</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Title</Text>
                <TextInput
                    style={styles.input}
                    value={recipeTitle}
                    onChangeText={setRecipeTitle}
                    placeholder="Recipe Title"
                />
                <Text style={styles.title}>Cook Time</Text>
                <TextInput
                    style={styles.input}
                    value={cookTime}
                    onChangeText={setCookTime}
                    placeholder="Cook Time"
                />
                <Text style={styles.title}>Serves</Text>
                <TextInput style={styles.input} value={serves} onChangeText={setServes} placeholder="Serves" />
                <Text style={styles.title}>Ingredients</Text>
                {renderIngredients()}
                <TouchableOpacity style={styles.addBtn} onPress={handleAddIngredient}>
                    <Text style={styles.addTxt}>+ Add Ingredient</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Instructions</Text>
                {renderInstructions()}
                <TouchableOpacity style={styles.addBtn} onPress={handleAddInstruction}>
                    <Text style={styles.addTxt}>+ Add Instruction</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={handleCreatePost}>
                <Text style={styles.submitTxt}>Share</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#303030',
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#F5F5F5',
        borderWidth: 0.5,
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        fontSize: 16,
    },
    imageBox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: '100%',
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
    },
    coverImg: {
        width: '100%',
        height: '100%',
    },
    selectImageBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '100%',
        backgroundColor: '#F65859',
        borderRadius: 30,
        marginVertical: 10,
    },
    coverImgPlaceholder: {
        width: 100,
        height: 100,
        tintColor: '#F65859',
    },
    selectImageText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    addBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '100%',
        backgroundColor: '#FEEDED',
        borderRadius: 30,
        marginVertical: 10,
    },
    addTxt: {
        color: '#F65859',
    },
    submitBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '100%',
        backgroundColor: '#F65859',
        borderRadius: 30,
        marginVertical: 10,
        marginBottom: 20,
    },
    submitTxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RecipeCreationPage;
