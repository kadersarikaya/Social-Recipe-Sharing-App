/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

interface BookmarkProps {
    isSaved: boolean;
    onPress: () => void;
    imageSource: any;
    savedImageStyle: any;
    imageStyle: any;
}

const Bookmark: React.FC<BookmarkProps> = ({
    isSaved,
    onPress,
    imageSource,
    savedImageStyle,
    imageStyle,
}) => {
    return (
        <TouchableOpacity style={styles.saveButton} onPress={onPress}>
            <Image style={isSaved ? savedImageStyle : imageStyle} source={imageSource} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    saveButton: {
        position: 'absolute',
        zIndex: 1,
        right: 10,
        top: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
});


export default Bookmark;
