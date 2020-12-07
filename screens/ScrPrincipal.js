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
    

    //Pantalla principal
  return( 
    <Container style={styles.Container}>
        <Header searchBar rounded style={styles.header} androidStatusBarColor="#000">
            <H1 style={styles.Titulo}>Cronometro</H1>
        </Header>
        <View>
            
            <Button style={styles.bmarca} onPress={()=> estado?navigation.navigate("Marcadores"):false}>
                <Text style={styles.tmarca}>Marcadores</Text>
            </Button>
        </View>
        <View style={styles.bid}>
            
        <TouchableOpacity >  
                    <Text style={styles.btni}>Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity   >  
                    <Text style={styles.btndc}>Cancelar</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.crono}>
            <Text style={styles.tcrono}>00S</Text>
        </View>
        <View style={styles.bid}>
        <TouchableOpacity onPress={() => estado?changeStatus():changevuelta()}  >
                {   
                    estado?
                    <Text style={styles.btni}>Iniciar</Text>
                    :
                    <Text style={styles.btni}>Vuelta</Text>
                }
                
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => stop?changeStatus():false}>
            <Text style={styles.btndc}>Detener</Text>
        </TouchableOpacity>
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
        justifyContent:"flex-start",
        alignItems:"center"
    },
    Titulo:{
        paddingTop:15,
        color:"#FC4D5D",
        fontSize:35,
    },
    bmarca:{
        width:width,
        justifyContent:"center",
        backgroundColor:"#FCFCFC"
    },
    tmarca:{
        color:"#FC4D5D",
        fontSize:25,
    },
    crono:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff"
    },
    tcrono:{
        color:"#FC4D5D",
        fontSize:45,
    },
    bid:{
        flex:1/7,
        backgroundColor:"#FAFAFA",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
     
    },
    btni:{
       padding:5,
       backgroundColor:"#FC4D5D",
       width:width*0.25,
       height:30,
       alignItems:"center",
       textAlign:"center",
       color:"#fff",
       borderRadius:25,
    },
    btndc:{
        padding:5,
        backgroundColor:"#7B7171",
        width:width*0.25,
        height:30,
        alignItems:"center",
        textAlign:"center",
        color:"#fff",
        borderRadius:25,
    }

});

export default ScrPrincipal;