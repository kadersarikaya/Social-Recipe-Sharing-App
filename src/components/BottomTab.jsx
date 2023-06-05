/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Profile from '../Profile';
import Saved from '../Saved';
import Discover from '../Discover';
import CreatePost from '../CreatePost';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow,
        }}
        onPress={onPress}
    >
        <View
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: '#fff',
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
);

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                showLabel: false,
                headerShown: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    elevation: 0,
                    right: 20,
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow,
                },
                tabBarLabelStyle: { display: 'none' },
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    showLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
                            <Image
                                source={require('../assets/Home.png')}
                                resizeMode="contain"
                            />
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="Discover" component={Discover}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
                            <Image
                                source={require('../assets/Search.png')}
                                resizeMode="contain"
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="CreatePost" component={CreatePost}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/Add.png')}
                                resizeMode="contain"
                            />
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    ),
                }}
            />
            <Tab.Screen name="Saved" component={Saved}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
                            <Image
                                source={require('../assets/Saved.png')}
                                resizeMode="contain"
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
                            <Image
                                source={require('../assets/Profile.png')}
                                resizeMode="contain"
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});


export default BottomTab;
