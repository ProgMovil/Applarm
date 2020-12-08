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

    /*Todos esto estaba dentro del return */