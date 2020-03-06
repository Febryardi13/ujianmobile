import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Detailresto from './detailresto';

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator 
          initialRouteName="Home"
          headerMode="none"
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}