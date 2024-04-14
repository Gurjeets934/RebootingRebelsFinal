import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert } from "react-native";
import { AppStateContext } from "../providers/AppState";
import { text } from "stream/consumers";
import HomeScreen from "./HomeScreen";



const Stack = createNativeStackNavigator();


interface ProfilePageMainProps {
    navigation: any; // Change the type according to your navigation type
  }
  
  const ProfilePageMain: React.FC<ProfilePageMainProps> = ({ navigation }) => {
     const {wrapper, textStyle, clickMeStyles} = styles
     const {activeUser} = useContext(AppStateContext);

     return (

    <View style = {wrapper}>
    <Text style = {textStyle}
    > Your Profile </Text>
      <Text style={styles.infoStyle}>Full Name: {activeUser?.firstName} {activeUser?.lastName} </Text>
      <Text style={styles.infoStyle}>Gender: {activeUser?.gender}</Text>
      <Text style={styles.infoStyle}>Address: {activeUser?.address}</Text>
    <Text style={styles.infoStyle}>Avatar:</Text>
    <Image 
    source = {
        {uri: 'https://gravatar.com/avatar/872bdd6da4f5ed4c6d74aa69a8c429de?s=400&d=robohash&r=x'}
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
        Alert.alert("Attention","Are you sure you want to log out?",[
         {   text: 'Yes',
         onPress: () => { console.log('User accepted');
         navigation.reset({
            index: 0,
            routes: [{ name: "HomeScreen"}]
         });
         },
        },
        {
            text: 'No',
            onPress: () => {
                console.log('User rejected');
            }
        },
        ]);   
        // navigation.goBack()
        // navigation.push('AboutUs');

    }}
    >Log out</Text>

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
            fontSize: 24,  
            marginBottom:40,
            marginTop: 80,
            fontWeight: 'bold',
            fontStyle: 'italic'
        },
        infoStyle:{
            color: "#f1f1f1",
            fontSize: 20,
            marginBottom:20,
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
        marginBottom:30,
        borderRadius: 80,
        backgroundColor: "#E6E7EE",
       }
    }
)

const ProfilePage =() =>{
    return (
        <Stack.Navigator initialRouteName="CrossNativeFirst">
            <Stack.Screen name="See your Profile" component = {ProfilePageMain} options={{
                headerShown:true
            }}></Stack.Screen>
       
       <Stack.Screen name="HomeScreen" component = {HomeScreen} options={{
                headerShown:false
            }}></Stack.Screen>
         

        </Stack.Navigator>
    )
    
}

export default ProfilePage;
