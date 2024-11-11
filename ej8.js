const prompt= require("prompt-sync")()
let año= prompt("Ingrese el año:")
if(año%4 == 0){
    console.log("El año", año, "es bisiesto")
}
else{
    console.log("El año", año, "NO es bisiesto")
}