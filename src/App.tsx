import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './loginScreen/login';
import SignupScreen from './signup/signup';
import LandingScreen from './landing/index';

export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Signup: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    background: '#333',
    card: 'green',
    text: 'black',
    border: 'gray',
    notification: 'red',
  },
  dark: true,
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName={'Landing'}>
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown : false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown : false}}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
