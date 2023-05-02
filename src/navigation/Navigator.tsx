import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from './consts/screens';
import { FirstScreen } from '../screens/FirstScreen';
import { SecondScreen } from '../screens/SecondScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screens.FIRST} component={FirstScreen} />
        <Stack.Screen name={Screens.SECOND} component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
