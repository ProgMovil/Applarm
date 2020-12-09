import React, { useEffect, useState ,Component,useContext, } from "react";
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
import { render } from "react-dom";
import { useStopwatch } from 'react-timer-hook';
import { DatesContext} from '../context/DatesContext'
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
    let ir=false;
    const changeStatus= (dr)=>{
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
      
        
    },[vlt]);
       
 
    function MyStopwatch() {
        const {
          seconds,
          minutes,
          hours,
          days,
          isRunning,
          start,
          pause,
          reset,
        } = useStopwatch({ autoStart: false });
        const datesContext = useContext(DatesContext);
        const { addNewDate, refreshDates } = datesContext;
        const [fecha,setfecha]=useState(null);
        const temps=[];
        const handlertemps = () => {
           
           temps.push((`${hours}s${minutes}m${seconds}s`))
            console.log(temps);
            // Regresar a la pantalla anterior
            
          };  
        const handlerNewNote = () => {
           
            addNewDate(temps, refreshDates);
       
            // Regresar a la pantalla anterior
            
          };   
          
        return (
            <Container>
                <View style={{backgroundColor:"#D0C7C7"}}>
                    <Button style={styles.bmarca} onPress={()=> isRunning?false:navigation.navigate("Marcadores")}>
                        <Text style={styles.tmarca}>Marcadores</Text>
                    </Button>
                </View>
                <View style={styles.bid}>
                    <TouchableOpacity  onPress={ ()=>handlerNewNote()}>  
                                <Text style={styles.btni}>Guardar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   >  
                                <Text style={styles.btndc}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.crono}>
                <View style={styles.tmr}>
                    <H2 style={styles.tmin}>{hours}h: {minutes}m: {seconds}s</H2>
                </View>
               
                <View style={styles.bid}>
                    
                        {   
                            isRunning?
                            <TouchableOpacity onPress={handlertemps()}>
                            <Text style={styles.btni}>Vuelta</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={start}>
                            <Text style={styles.btni}>Iniciar</Text>
                            </TouchableOpacity>
                        }
                    
                    <TouchableOpacity  onPress={pause}>
                        <Text style={styles.btndc}>Pausa</Text>
                    </TouchableOpacity>
                </View>       
            </View>
            </Container>
            
            
        
        );
      }

    //Pantalla principal
    
  return( 
      
    <Container style={styles.Container}>
        <Header searchBar rounded style={styles.header} androidStatusBarColor="#000">
            <H1 style={styles.Titulo}>Cronometro</H1>
        </Header>
        

        <MyStopwatch/>
        
    
    </Container>

  );
}; 
//Termina ScrPrincipal


const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"#D0C7C7", 
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
        backgroundColor:"#F0F0F0",
     
        

    },
    tmarca:{
        color:"#FC4D5D",
        fontSize:25,
    },
    crono:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#D0C7C7",
        
    },
    tmin:{
        paddingTop:20,
        color:"#FC4D5D",
        fontSize:35,
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
    tmr:{
        flex:1,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25,
        
    },
    bid:{
        flex:1/8,
        backgroundColor:"#D0C7C7",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
    },
    btni:{
        padding:5,
       backgroundColor:"#FC4D5D",
       width:width*0.25,
       height:30,
       display:"flex",
       justifyContent:"center",
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