/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { launchImageLibrary, Asset } from 'react-native-image-picker';

const RecipeCreationPage: React.FC = () => {
    const [recipeTitle, setRecipeTitle] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [serves, setServes] = useState('');
    const [ingredients, setIngredients] = useState<string[]>(['']);
    const [instructions, setInstructions] = useState<string[]>(['']);
    const [thumbnail, setThumbnail] = useState<Asset | null>(null);

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
            if (!response.didCancel && !response.errorCode) {
                setThumbnail(
                    require('../assets/gallery.png')
                );
            }
        });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageBox}>
                    <Image
                        style={styles.coverImg}
                        source={thumbnail ? { uri: thumbnail.uri } : require('../assets/gallery.png')}
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
            <TouchableOpacity style={styles.submitBtn}>
                <Text style={styles.submitTxt}>Submit</Text>
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
        height: 100,
        width: 100,
        tintColor: '#9E9E9E',
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
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default RecipeCreationPage;

