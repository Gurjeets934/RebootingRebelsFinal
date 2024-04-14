import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert } from "react-native";

import Flexbox from './Flexbox';
import AboutUs from "./AboutUs";
import ProfilePage from "./Profile";
import { AppStateContext } from "../providers/AppState";

const Stack = createNativeStackNavigator();


interface WelcomePageMainProps {
    navigation: any; // Change the type according to your navigation type
  }
  
  const WelcomePageMain: React.FC<WelcomePageMainProps> = ({ navigation }) => {
    const {wrapper, textStyle, clickMeStyles} = styles
    const {activeUser} = useContext(AppStateContext);
return (

    <View style = {wrapper}>
        
    <Text style = {textStyle}
    >Welcome, {activeUser?.firstName} {activeUser?.lastName} </Text>
    
    <Image 
    source = {
        require('./../../assets/welcome_to_the_app.jpeg')
    } style= {styles.imageStyle}/>
    <Text style = {clickMeStyles} 
    //Function to Navigate and Redirect to another Page!
    onPress= {()=>{
        navigation.push('Profile');
   
    }}
    >See your profile here!</Text>
    <Text style = {clickMeStyles} 
   //Function to Navigate and Redirect to another Page!
    onPress= {()=>{
        navigation.push('Flexbox')
        // navigation.push('AboutUs');
    }}
    >See our Gallery here</Text>

     <Text style = {clickMeStyles} 
   //Function to Navigate and Redirect to another Page!
    onPress= {()=>{
        navigation.push('AboutUs')
        // navigation.push('AboutUs');
    }}
    >Want to know? About Us</Text>

    </View>
)
}  



const styles = StyleSheet.create(
    {
        wrapper:{
            backgroundColor: "#395c6b",
            padding: 10,
            alignItems: 'center',
            height: '100%'
        },
        textStyle:{
            color: "#e6e1c5",
            textAlign: 'center',
            marginBottom:50,
            marginTop: 80,
            fontSize: 23,
        },
        clickMeStyles:{
            margin: 10,
            padding: 10,
            backgroundColor: "#e6e1c5",
            color: "#000000",
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
            title:"My Profile", headerShown:false
            }}></Stack.Screen>

            <Stack.Screen name="Flexbox" component={Flexbox} options={{
            title:"Gallery", headerShown:false
            }}></Stack.Screen>

            <Stack.Screen name="AboutUs" component={AboutUs} options={{
            title:"What are we as a team?", headerShown:false
            }}></Stack.Screen>

        </Stack.Navigator>
    )
    
}

export default WelcomePage;
