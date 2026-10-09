
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Welcome from "./src/screens/Welcome";
import  SignIn from "./src/screens/SignIn"
import  LogIn from "./src/screens/LogIn";
import MainScr from "./src/screens/MainScr";
import Transaction from './src/screens/Transaction';
import { SafeAreaProvider } from 'react-native-safe-area-context';
  const Stack = createNativeStackNavigator()
export default function App() {
 

  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false,}}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
           <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="LogIn" component={LogIn} />
              <Stack.Screen name='Transaction' component={Transaction} />
                   <Stack.Screen name="MainScr" component={MainScr} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
