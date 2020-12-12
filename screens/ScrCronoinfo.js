import React, { useEffect, useState, useContext } from "react";
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
    Fab,
    List,
    ListItem,
    CardItem,
    Spinner,
} from "native-base";
import { color } from "react-native-reanimated";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { vuelta,DatesContext } from "../context/DatesContext";


const { width, height } = Dimensions.get("window");

//Pantalla Principal
const ScrCronoinfo=({route,navigation})=>{
    const { fecha,refreshDates,lookDates,vuelta,borrarfecha,vltnull} = useContext(DatesContext);
    //Variables
    
    //console.log(route.params.params.id);
    
    const changevuelta =()=>{
        vlt=!vuelta;
        setVuelta(vlt);
       
    }
   
   const id = route.params.params.id
   const [data,setdata]=useState(null)
   useEffect(()=>{
      lookDates(id);
     console.log(vuelta)
 },[]);

      const borrar =() =>{
        // Works on both Android and iOS
          Alert.alert(
            'Borrar',
            '¿Esta seguro de borrar el registro?',
            [
              {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'Si', onPress: () => (borrarfecha(id),vltnull(),navigation.navigate('Marcadores')) }
            ],
            { cancelable: true }
          );
      }
    //Pantalla Marcadores
    if(!vuelta){
      return (
        <View style={{flex:1,justifyContent:"center",alignContent:"center"}}>
          <Spinner color="#FC4D5D" />
        </View>  
    )
    }
  return( 
    <Container>
      <Content style={{backgroundColor:"#C6C6C6"}}>
      <Header searchBar rounded style={styles.header} androidStatusBarColor="#000">
            <H1 style={styles.Titulo}>Informacion</H1>
            <TouchableOpacity onPress={() => true? (borrar()):false}>
                <Icon name="trash" style={styles.icn}/>
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => navigation.navigate('Marcadores')} >
                <Icon name="home" style={styles.icn}/>
            </TouchableOpacity>  
        </Header>

          <View style={{flex:1,}}>
          {vuelta
            ?
             <View >
              <View style={styles.textos}>
              <H1 style={styles.txttot}>{vuelta[0].fecha}</H1>
              <H1 style={styles.txttot}>{"Vuelta Total "}{vuelta[0].total}</H1>
              </View>
            <ScrollView >
            {vuelta.map((item,index) => (
                <View key={index}>
                  {
                    index%2==0?
                  <Card style={styles.crd2} >
                    <CardItem style={styles.crd2}>
                     <Text style={styles.txtc}>{" Vuelta "}{index+1}{`\t`}{`\t`}{item.vuelta}</Text>
                    </CardItem>
                  </Card>
                  :
                  <Card style={styles.crdi} >
                    <CardItem style={styles.crdi}>
                      <Text style={styles.txtc}>{" Vuelta "}{index+1}{`\t`}{`\t`}{item.vuelta}</Text>
                    </CardItem>
                  </Card>
                }
                </View>
                
                
              ))}
              </ScrollView>
              </View>
            : <Text>No hay Vueltas</Text>}
            </View>
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
      
      justifyContent:"center",
      alignItems:"center",
      borderBottomLeftRadius:25,
    },
    crd2:{
      marginTop:5,
      justifyContent:"center",
      alignItems:"center",
      borderTopRightRadius:25,
     
    },
    textos:{
      flex:1/2,
      
      backgroundColor:"#F9F9F9",
      justifyContent:"center",
      alignItems:"center",
      borderBottomRightRadius:25,
      borderBottomLeftRadius:25,
      
    },
    txttot:{
      paddingTop:15,
        color:"#FC4D5D",
        fontSize:25,
    },
});

export default ScrCronoinfo;