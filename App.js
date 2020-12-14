import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScrPrincipal from './screens/ScrPrincipal';
import ScrMarcadores from './screens/ScrMarcadores';
import ScrCronoinfo from './screens/ScrCronoinfo';
import useDatabase from "./hooks/useDatabase";
import {DatesContextProvider} from "./context/DatesContext";
import { View,Text } from 'native-base';


const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator();

export default function App() {

  const img = [require('./assets/giphy.gif')];

  const isloadingComplete = useDatabase();
  if(!isloadingComplete){
    return(
      <View style={{backgroundColor:"#ffffff",flex:1,justifyContent:"center",alignContent:"center"}}>
      <Image source={require('./assets/giphy.gif')} style = {{height:400,width:width}}/>
    </View>  
    );
    
  }else{

  
  return (
   <View style={{ flex: 1 }}>
     <DatesContextProvider>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal"  >
        <Stack.Screen name = "Principal" component={ScrPrincipal} options={{ headerShown: false }} />
        <Stack.Screen name = "Marcadores" component={ScrMarcadores} options={{ headerShown: false }} />
        <Stack.Screen name = "Cronoinfo" component={ScrCronoinfo} options={{ headerShown: false }} />
       </Stack.Navigator>      
    </NavigationContainer>
     </DatesContextProvider>
    
   </View>
    
   
  );
  }
}

const styles = StyleSheet.create({
  
});
