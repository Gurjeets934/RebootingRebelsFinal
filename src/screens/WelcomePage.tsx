import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert } from "react-native";

import Flexbox from './Flexbox';
import AboutUs from "./AboutUs";
import ProfilePage from "./Profile";

const Stack = createNativeStackNavigator();


interface WelcomePageMainProps {
    navigation: any; // Change the type according to your navigation type
  }
  
  const WelcomePageMain: React.FC<WelcomePageMainProps> = ({ navigation }) => {
    const {wrapper, textStyle, clickMeStyles} = styles
return (

    <View style = {wrapper}>
    <Text style = {textStyle}
    >Welcome our Planet is: CrossNative do you REACT 😲</Text>
    
    <Image 
    source = {
        require('./../../assets/welcome.jpeg')
    } style= {styles.imageStyle}/>
    <Text style = {clickMeStyles} 
    //Function to Navigate and Redirect to another Page!
    onPress= {()=>{
        navigation.push('Profile');
   
    }}
    >See! Our Planets Here!</Text>
    <Text style = {clickMeStyles} 
   //Function to Navigate and Redirect to another Page!
    onPress= {()=>{
        navigation.goBack()
        // navigation.push('AboutUs');
    }}
    >Log out</Text>

    </View>
)
}  



const styles = StyleSheet.create(
    {
        wrapper:{
            backgroundColor: "#f1f1f1",
            padding: 10,
            alignItems: 'center'
        },
        textStyle:{
            color: "#3949AB",
            textAlign: 'center',
            marginBottom:50,
            marginTop: 80,
        },
        clickMeStyles:{
            margin: 10,
            padding: 10,
            backgroundColor: "blue",
            color: "white",
        },
       imageStyle:{
        width:300,
        height:300,
        marginBottom:30
       }
    }
)

const WelcomePage =() =>{
    return (
        <Stack.Navigator initialRouteName="CrossNativeFirst">
            <Stack.Screen name="CrossNativeFirst" component = {WelcomePageMain} options={{
                headerShown:false
            }}></Stack.Screen>
       
            <Stack.Screen name="Profile" component={ProfilePage} options={{
            title:"Gallery", headerShown:false
            }}></Stack.Screen>

            <Stack.Screen name="AboutUs" component={AboutUs} options={{
            title:"What are we as a team?", headerShown:false
            }}></Stack.Screen>

        </Stack.Navigator>
    )
    
}

export default WelcomePage;
