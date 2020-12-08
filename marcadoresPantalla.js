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