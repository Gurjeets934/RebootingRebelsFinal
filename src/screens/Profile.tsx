import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert } from "react-native";




const Stack = createNativeStackNavigator();


interface ProfilePageMainProps {
    navigation: any; // Change the type according to your navigation type
  }
  
  const ProfilePageMain: React.FC<ProfilePageMainProps> = ({ navigation }) => {
    const {wrapper, textStyle, clickMeStyles} = styles
return (

    <View style = {wrapper}>
    <Text style = {textStyle}
    > YOUR PROFILE </Text>
    
    <Image 
    source = {
        require('./../../assets/about.jpg')
    } style= {styles.imageStyle}/>
    {/* <Text style = {clickMeStyles} 
    //Function to Navigate and Redirect to another Page!
    onPress= {()=>{
        navigation.push('Flexbox');
   
    }}
    >See! Our Planets Here!</Text> */}
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

const ProfilePage =() =>{
    return (
        <Stack.Navigator initialRouteName="CrossNativeFirst">
            <Stack.Screen name="CrossNativeFirst" component = {ProfilePageMain} options={{
                headerShown:false
            }}></Stack.Screen>
       

         

        </Stack.Navigator>
    )
    
}

export default ProfilePage;
