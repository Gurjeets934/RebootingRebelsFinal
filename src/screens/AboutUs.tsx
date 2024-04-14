import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity,Alert } from 'react-native';

const Stack = createNativeStackNavigator();

const AboutUsMain = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/about.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>About Universe</Text>
      <Text style={styles.description}>
      Believe something and the Universe is on its way to being changed. Because you've changed, by believing. Once you've changed, other things start to follow. Isn't that the way it works?”.
      </Text>
      <TouchableOpacity style={styles.contactButton} onPress={() => 
        Alert.alert('Email Address','rebootrebels@email.com')}>
        <Text style={styles.contactButtonText}>About Us</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#395c6b',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#e6e1c5',
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#f1f1f1'
  },
  contactButton: {
    backgroundColor: '#e6e1c5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
   
  },
  contactButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});







const AboutUs =() =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component = {AboutUsMain} options={{
             headerShown:true
            }}></Stack.Screen>
          
        </Stack.Navigator>
    )
    
}

export default AboutUs;
