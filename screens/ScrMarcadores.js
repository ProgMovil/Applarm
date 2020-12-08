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
    
} from "native-base";
import { color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

import { DatesContext } from "../context/DatesContext";


const { width, height } = Dimensions.get("window");

//Pantalla Principal
const ScrPrincipal=({route,navigation})=>{
    const { fechas } = useContext(DatesContext);
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
    <Container>
      <Content>
        <List>
          {fechas
            ? fechas.map((fecha) => (
                <ListItem key={fecha.PKfechaID.toString()}>
                  <Text>{fecha.fecha.toString()}</Text>
                </ListItem>
              ))
            : null}
        </List>
        <Fab
          active={true}
          position="bottomRight"
          style={{ backgroundColor: "#ff0023" }}
          direction="up"
          onPress={() => {
            navigation.navigate("noteCreate");
          }}
        >
          <Icon name="plus" type="FontAwesome" />
        </Fab>
      </Content>
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