import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import HomeScreen from '../../screens/';

import TeachersMainScreen from '../../screens/TeachersMainScreen';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TeachersMainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}