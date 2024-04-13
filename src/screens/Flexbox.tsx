
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React  from "react";
import { View , Image, Text, StyleSheet,TouchableOpacity, SafeAreaView, Button} from "react-native";



const Stack = createNativeStackNavigator();

const FlexboxMain = () => {
    return(
       
        <View style = {styles.wrapper}>
         
         <View style = {styles.box1}>

         <Image 
        source = {require('./../../assets/one.jpg')}
    style= {styles.imageStyle}/>
            
            </View>
         <View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/two.jpg')}
    style= {styles.imageStyle}/>
         </View>
         <View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/three.jpg')}
    style= {styles.imageStyle}/>
         </View>
         <View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/four.jpg')}
    style= {styles.imageStyle}/>
</View>
<View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/five.jpg')}
    style= {styles.imageStyle}/>
</View>
<View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/six.jpg')}
    style= {styles.imageStyle}/>
</View>
<View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/seven.jpg')}
    style= {styles.imageStyle}/>
</View>
<View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/eight.jpg')}
    style= {styles.imageStyle}/>
</View>
<View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/nine.jpg')}
    style= {styles.imageStyle}/>
</View>
<View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/ten.jpg')}
    style= {styles.imageStyle}/>
</View>
<View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/eleven.jpg')}
    style= {styles.imageStyle}/>
</View>
    <View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/twelve.jpg')}
    style= {styles.imageStyle}/>
    </View>

    <Text>Our Universe! all planets being captured </Text>

    </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        color: "#3949AB",
        textAlign: 'center',
        marginBottom:50,
        marginTop: 30,
    },
    wrapper:{
        flex:1,
        padding:5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'flex-start',
        backgroundColor: 'white',
        flexWrap:'wrap',
        paddingTop: 60
    },
    box1:{
        backgroundColor: 'red',
       
        width:100,
        height:100,
        marginRight:2,
        marginTop:50,

    },
    imageStyle:{
        
        width:100,
        height:100
    },
    box3: 
    {
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        flex:1
    }
})

const Flexbox =() =>{
    return (
           
            <Stack.Navigator initialRouteName="Gallery" screenOptions={{
                title:"Gallery", headerShown: false
            }} >
            <Stack.Screen name="Flexbox Main" component={FlexboxMain}></Stack.Screen>
        
        </Stack.Navigator>
    )    
}

export default Flexbox;