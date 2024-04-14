import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert } from "react-native";
import Login from "./Login";
import Sign from "./Sign";
// import { useAppData } from "../providers/AppState";


const Stack = createNativeStackNavigator();

interface HomeScreenMainProps {
  navigation: any; 
}

const HomeScreenMain: React.FC<HomeScreenMainProps> = ({ navigation }) => {
    const {wrapper, textStyle, clickMeStyles} = styles
  
return (
      
    <View style = {wrapper}>    
        
        <Text style={textStyle}>Rebooting Rebels </Text>
            <Image 
                source={require('./../../assets/home_page_react.jpg')}
                style={styles.imageStyle}
            />
            <Text style={styles.textStyleTwo}>Rebooting Rebels Home Site </Text>
            
            <TouchableOpacity onPress={() => navigation.push('Login')}>
                <Text style={clickMeStyles}>Already User? Login</Text>
            </TouchableOpacity>
   
            <TouchableOpacity onPress={() => navigation.push('Sign')}>
                <Text style={styles.paraStyles}>New User? Register</Text>
            </TouchableOpacity>
        
        
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
            fontSize: 30,
            
        },

       
     

        clickMeStyles:{
            margin: 10,
            padding: 10,
            backgroundColor: "#131ada",
            color: "#f2e5d7",
        },
    


        paraStyles:{
            margin: 10,
            padding: 10,
            backgroundColor: "yellow",
            color: "#000000",
        },
        textStyleTwo:{
            color: "#e6e1c5",
            textAlign: 'center',
            marginBottom:50,
            marginTop: 80,
            fontSize: 20,
            
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
            <Stack.Screen name="HomeScreenMain" component = {HomeScreenMain}
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
