
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { signInAsync } from './api.service';
import AppStateProvider from './src/providers/AppState';






export default function App(){
    return (
      
    <NavigationContainer>
      
        <HomeScreen />
      {/* <Text>Somethingh</Text> */}
 {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        /> 
      <Stack.Screen name="Profile" component={ProfileScreen} />   
      </Stack.Navigator>  */}

 </NavigationContainer>

    );
}


