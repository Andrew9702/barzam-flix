import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesScreen from './MoviesScreen';
import MoviesDetailsScreen from './MoviesDetailsScreen';

const Stack = createStackNavigator();

const MoviesStack = () => {

    return(
        <Stack.Navigator>

            <Stack.Screen 
                name="Movies" 
                component={MoviesScreen}
            />

            <Stack.Screen 
                name="MovieDetail" 
                component={MoviesDetailsScreen}
            />
            
        </Stack.Navigator>
    );

}

export default MoviesStack;