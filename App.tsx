/* eslint-disable prettier/prettier */
import React from 'react';
import Register from './src/pages/Register';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartPage from './src/pages/StartPage';
import BottomTab from './src/components/BottomTab';
import {SavedRecipesProvider} from './src/components/context/saveContext';
import { AuthContextProvider } from './src/components/context/AuthContext';
import RecipeDetail from './src/pages/RecipeDetail';
import ProfileScreen from './src/pages/OthersProfile';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <SavedRecipesProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="StartPage"
              component={StartPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
            }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="RecipeDetailScreen"
              component={RecipeDetail}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen
              name="BottomTab"
              component={BottomTab}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SavedRecipesProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
