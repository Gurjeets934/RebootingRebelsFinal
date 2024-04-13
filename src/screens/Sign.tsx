
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState }  from "react";
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, TextInput, Alert } from "react-native";

import Login from "./Login";
import { signInAsync, signUpUser } from "../../api.service";
import { validateEmail } from '../helpers';

const Stack = createNativeStackNavigator();

function sleep(ms: number | undefined) {
    return new Promise((resolve) => {
       setTimeout(resolve, ms);
    });
 }

interface SignMainProps {
    navigation: any; // Change the type according to your navigation type
  }

const SignMain: React.FC<SignMainProps> = ({ navigation }) => {

    const [username, onChangeText] = useState("");
    const [password, onChangePassword] = useState("");
    const [passwordConfirm, onChangePasswordConfirm] = useState("");
    const [status, setStatus] = useState("");

    // Function to sign up the user
    async function doSignup(){
    if(username.length<=0)
    {
        Alert.alert("Please enter a username");
        return;
    }
    if(password.length<=0)
    {
        Alert.alert("Please enter a password");
        return;
    }

    if(password !== passwordConfirm)
    {
        Alert.alert("Please confirm password");
        return;
    }

    // if(!validateEmail(username)){
    //     Alert.alert("Please enter a valid email");
    // }
    if(!validateEmail(username))
    {
        Alert.alert("Please enter valid email");
        return;
    }

    setStatus("Registering ..");
    signUpUser(username,password).then(() => {
        console.log('User account created & signed in!');
        Alert.alert('Success, please login');
        navigation.goBack();
    })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
      
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
      
        console.error(error);
        Alert.alert(`${error}`);
    });
    return;
    }

    // const result = await signInAsync(username, password);
    // if (result === "SUCCESS"){
    //     setStatus("Login success");
    //     await sleep(2000); 
    //     navigation.reset({
    //         index: 0,
    //         routes: [{ name: "Welcome" }],
    //     })
    // } else {
    //     setStatus(result);  
    // }

    // }

    return(
        <SafeAreaView style={styles.wrapper}>   
        <View style={styles.topBox}>
        <View style={styles.inputBoxWrapper}>
        <Text>Email </Text>
        </View>

        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={username}
        placeholder="Username"
        autoCorrect={false}
        keyboardType="email-address"
        autoCapitalize="none"
      />

        <Text>Password </Text>

            <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
      />

     <Text>Confirm Password </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangePasswordConfirm}
        value={passwordConfirm}
        placeholder="Confirm Password"
      />
        <Text>{status}</Text>

            
        </View>
        <View style={styles.bottomBox}>

        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={()=>{
            doSignup();
        }}>
            <Text>Login Here</Text>
            </TouchableOpacity>

         <TouchableOpacity
        style={styles.buttonStyle}
        onPress={()=>{
            navigation.goBack();
        }}>
            <Text>GO BACK</Text>
            </TouchableOpacity>

        </View>
        </SafeAreaView>
        )}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    topBox:{
        flex:3,
        justifyContent: 'flex-start',
        alignItems:'center',
        margin: 80
    },
    bottomBox:{
        flexBasis:70, 
        justifyContent:'flex-end',
        padding:10
    },
    buttonStyle:{
        backgroundColor: 'skyblue',
        color: '#000',
        padding: 10,
        alignItems: 'center',
        marginBottom: 2
    },
    inputBoxWrapper: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "100%",
        
      }
})

const Sign =() =>{
    return (
        <Stack.Navigator initialRouteName="Sign Main">
            <Stack.Screen name="Sign Main" component={SignMain} options={{
                title:"Create an Account"
            }}></Stack.Screen>
                 <Stack.Screen name="Login" component={Login} options={{
                headerShown:false, 
            }}></Stack.Screen>
        </Stack.Navigator>
    )    
}

export default Sign;