



let dia = "Domingo"
let tiempo = "malo"
let energía = "alta"
let dinero = "suficiente"
let aftersun = "no"
console.log(`Hoy es día ${dia}, tengo que ver si trabajo`)

switch (dia) {
    case "Lunes":
        console.log("Hoy es Lunes, tengo que trabajar y no tengo energía");
        break;
    case "Martes": 
        console.log("Hoy es Martes 13, y aunque tengo un rato a la tarde, no me apetece ir a bañarme por si me come un tiburón");
        break;
    case "Miércoles": 
        console.log("Hoy podría pasarme un rato a la tarde si hace bueno");
        break;
    case "Jueves":
        console.log("Si hace bueno y tengo energía voy");
            if (tiempo == "bueno", energía == "alta") {console.log("Vamos a la playita")} // CÓMO HACEMOS PARA PONER QUE SE CUMPLAN DOS CONDICIONES 
            else {console.log("Me quedo en casa")}
    case "Viernes": 
        console.log("Estamos a Viernes, alegría en el cuerpo, en cuanto salga si tengo dinero me voy a emborrachar a la playa")
            if (dinero == "suficiente") {console.log("Hoy me pillo un pedo si hace bueno")}
            else {console.log("Nah, no hay dinero, solo una cerve que no he cobrado")}
                if (tiempo == "bueno") {console.log("Se viene pedal")}
                else {console.log("Vaya día de mierda que hace, hoy toca netflix")}
    case "Sábado":
        console.log("Hoy nos vamos a la playita todo el día")
    case "Domingo":
        console.log("Dios, creo que ayer me quemé, si tengo aftersun voy a la playa")
            if (aftersun == "si") {console.log("Venga va, nos vamos")}
            else {console.log("No puedo ni movere, me quedo en casa")}
        
            

}

