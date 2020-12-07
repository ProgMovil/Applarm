import React, { useEffect, useState } from "react";
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
    
} from "native-base";
import { color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";


const { width, height } = Dimensions.get("window");

//Pantalla Principal
const ScrPrincipal=({route,navigation})=>{
    //Variables
    
    const [estado, setestado] = useState(true)
    const [vuelta,setVuelta]=useState(true)
    const [stop,setstop]=useState(false)
    let status;
    let vlt;
    let dtn;
    const changeStatus= ()=>{
     dtn=!stop;
     setstop(dtn);
     status=!estado;
     setestado(status);
     
    }
    
    const changevuelta =()=>{
        vlt=!vuelta;
        setVuelta(vlt);
       
    }

    useEffect(()=>{
       
        
    },[vuelta]);
    

    //Pantalla Marcadores
  return( 
    <Container style={styles.Container}>
        <Header searchBar rounded style={styles.header} androidStatusBarColor="#000">
            <H1 style={styles.Titulo}>Marcadores</H1>
            <TouchableOpacity onPress={() => navigation.navigate('Principal')} >
                <Icon name="home" style={styles.icn}/>
            </TouchableOpacity>  
        </Header>
      
        <View style={styles.crono}>
            <Text style={styles.tcrono}>00S</Text>
        </View>
      
        
    </Container>

  );
}; 
//Termina ScrPrincipal


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
    }

});

export default ScrPrincipal;