import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, Dimensions, Keyboard,Image} from "react-native";
import {
    Container,
    Header,
    Item,
    Input,
    Icon,
    Content,
    View,
    H2,
    Button,
    Card,
    H3,
    Left,
    H1,
    Fab,
    List,
    ListItem,
    CardItem,
    
} from "native-base";
import { color } from "react-native-reanimated";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { DatesContext } from "../context/DatesContext";


const { width, height } = Dimensions.get("window");

//Pantalla Principal
const ScrCronoinfo=({route,navigation})=>{
    const { fecha,refreshDates,lookDates,vuelta} = useContext(DatesContext);
    //Variables
    
    //console.log(route.params.params.id);
    
    const changevuelta =()=>{
        vlt=!vuelta;
        setVuelta(vlt);
       
    }
0
   const id = route.params.params.id
   const [data,setdata]=useState(null)
   useEffect(()=>{
    const cro=lookDates(id);
     //console.log(cro)
 },[]);

    //Pantalla Marcadores
  return( 
    <Container>
      <Content style={{backgroundColor:"#F0F0F0"}}>
      <Header searchBar rounded style={styles.header} androidStatusBarColor="#000">
            <H1 style={styles.Titulo}>Informacion</H1>
            <TouchableOpacity onPress={() => navigation.navigate('Principal')} >
                <Icon name="home" style={styles.icn}/>
            </TouchableOpacity>  
        </Header>
            <Text>No hay Vueltas</Text>
      </Content>
    </Container>

  );
}; 

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"#F9F9F9", 
    },
    header:{
        backgroundColor:"#F9F9F9",
        justifyContent:"space-between",
        alignItems:"center"
    },
    Titulo:{
   
        paddingTop:15,
        color:"#FC4D5D",
        fontSize:35,
    },
    icn:{

        color:"#FC4D5D",
        fontSize:45,
    },
    txtc:{
      fontSize:16,
      color:"#FC4D5D",
    },
    crdi:{
      margin:0,
     
      borderRadius:25,
    },
    crd:{
      borderRadius:25
        
    },
});

export default ScrCronoinfo;