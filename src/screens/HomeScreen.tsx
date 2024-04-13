import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert } from "react-native";
import Login from "./Login";
import Sign from "./Sign";


const Stack = createNativeStackNavigator();

interface HomeScreenMainProps {
  navigation: any; 
}

const HomeScreenMain: React.FC<HomeScreenMainProps> = ({ navigation }) => {
    const {wrapper, textStyle, clickMeStyles} = styles
return (

    <View style = {wrapper}>    
        
    <Text style = {textStyle}>Rebooting Rebels </Text>
   
    <Image 
    source = {
        require('./../../assets/home_page.jpg')
    } style= {styles.imageStyle}/>

<Text style = {clickMeStyles}>If you are interesting in universe and its visuals, our team will show the marvelous universe with never ending formation in it </Text>

    <Text style = {clickMeStyles} 
    //Function to Navigate and Redirect to another Page!
    onPress= {()=>{
        navigation.push('Login');

    }}
    >Already User? Login</Text>
   
   <Text style = {clickMeStyles} 
  //Function to Navigate and Redirect to another Page!
    onPress= {()=>{
        navigation.push('Sign');

    }}
    >New User? Register</Text>
        
        
    </View>
)
}  



const styles = StyleSheet.create(
    {
        wrapper:{
            backgroundColor: "#f1f1f1",
            padding: 10,
            alignItems: 'center',
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
            backgroundColor: "purple",
            color: "white",
        },

        paraStyles:{
            margin: 10,
            padding: 10,
            backgroundColor: "purple",
            color: "white",
        },

       imageStyle:{
        width:300,
        height:300,
        marginBottom:30
       }
    }
)

const HomeScreen =() =>{
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component = {HomeScreenMain}
            options={{
                 headerShown:false
                }}
            ></Stack.Screen>
                     
            <Stack.Screen name="Login" component={Login} options={{
            title:"Registered Users", headerShown:false
            }}></Stack.Screen>
             <Stack.Screen name="Sign" component={Sign} options={{
            title:"Not the User", headerShown:false
            }}></Stack.Screen>
        </Stack.Navigator>
    )
    
}

export default HomeScreen;
