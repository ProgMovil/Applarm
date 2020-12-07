const inicio = () => {
    if (crono.timer == null){
        crono.timer = setInterval(() => {
            if (crono.seg == 9.99999999999998){
                crono.min++;
                crono.seg = 0;
            }
            crono.seg += 0.1;
            console.log(crono);
            console.log(cont);
            console.log("********************************************************************");
            return crono;
        }, 100);
    }else{
        clearInterval(crono.timer);
        crono.timer = null;
    }
}

const detener = () => {
    crono.cent = 0;
    crono.seg = 0;
    crono.min = 0;
    crono.timer = null;
    console.log(crono);
    console.log(cont);
    console.log("********************************************************************");
}