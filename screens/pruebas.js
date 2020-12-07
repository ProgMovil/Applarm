import React, { useEffect, useState , } from "react";
import { StyleSheet, Text, Dimensions, Keyboard,Image, Alert} from "react-native";
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
    let status;
    let vlt;

    const changeStatus= ()=>{
     status=!estado;
     setestado(status);
  
    }
    
    const changevuelta =()=>{
        vlt=!vuelta;
        setVuelta(vlt);
    }
    useEffect(()=>{
        console.log("vuelta");
        
    },[vlt]);
    
    let crono = {
        timer: null,
        min: 0,
        seg: 0,
        cent:0,
    }
    
    const [cent, setCent] = useState(0);

    const [centecima, setCount1] = useState(crono);

    const inicio = () => {
        if (crono.timer == null){
            crono.timer = setInterval(() => {
                crono.seg += 0.01;
                if (crono.seg == 60){
                    crono.min++;
                    crono.seg = 0;
                }
                setCent(cent + 0.01);
                console.log(crono.timer);
            }, 1);
        }else{
            clearInterval(crono.timer);
            crono.timer = null;
        }
    }

    const detener = () => {

    }

    //Pantalla principal
  return( 
    <Container style={styles.Container}>
        <Header searchBar rounded style={styles.header} androidStatusBarColor="#000">
            <H1 style={styles.Titulo}>Cronometro</H1>
        </Header>
        <View>
            <Button style={styles.bmarca}>
                <Text style={styles.tmarca}>Marcadores</Text>
            </Button>
        </View>
        <View style={styles.crono}>
            <Text style={styles.tmin}>{centecima.min}m</Text>
            <Text style={styles.tseg}>{centecima.seg.toFixed(2)}</Text>
            <Text style={styles.tcentseg}>{centecima.cent}</Text>
        </View>
        
        <View style={styles.bid}>
            <TouchableOpacity onPress={() => estado?changeStatus():changevuelta()} onPress={inicio}>
                {   
                    estado?
                    <Text style={styles.tbtni}>Iniciar</Text>
                    :
                    <Text style={styles.tbtni}>Vuelta</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity  >
                <Text style={styles.tbtni}>Detener</Text>
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
        color:"#FC4D5D",
        fontSize:30,
    },
    bmarca:{
        width:width,
        justifyContent:"center",
        backgroundColor:"#F0F0F0"
    },
    tmarca:{
        color:"#FC4D5D",
        fontSize:25,
    },
    crono:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#f1f1"
    },tmin:{
        color:"#000",
        fontSize:60,
    },
    tseg:{
        color:"#FC4D5D",
        fontSize:60,
        marginLeft:15,
    },
    tcentseg:{
        color:"#000",
        fontSize:30,
        paddingTop:21,
        marginLeft:15,
    },
    bid:{
        flex:1/7,
        backgroundColor:"#D0C7C7",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
    },
    tbtni:{
       backgroundColor:"#f1f",
       width:width*0.25,
       height:30,
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       textAlign:"center",
       color:"#fff",
       borderRadius:25,
    },
    prueba:{
        backgroundColor:"#f1f",
        width:width*0.25,
        height:30,
        alignItems:"center",
        textAlign:"center",
        color:"#fff",
        borderRadius:25,
     }

});

export default ScrPrincipal;