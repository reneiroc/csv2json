// Funcion d eprueba para convertir csv a json usando paquete csvtojson


const fs = require('fs');
const convertojson = require('csvtojson');
const path = require('path');
const name = process.argv[2];

convertir = ()=> {
    var json = convertojson()
        .fromFile(name)
        .then((jsonObj) =>{
            newName = name.replace(".csv", ".json");
            fs.writeFileSync(path.join(__dirname,newName), JSON.stringify(jsonObj, null, 2)); 
            console.log ("Archivo convertido con exito")
        })
}

if (fs.existsSync(name)) {
    convertir();
}else{
    console.log("Archivo no encontrado para convertir");
}
