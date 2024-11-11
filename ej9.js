const prompt= require("prompt-sync")()
let edad= parseFloat(prompt("Ingrese su edad:"))
if(edad < 13 & edad > 0){
    console.log("Es un niño")
}
if(edad >= 13 & edad <=17){
    console.log("Es un adolescente")
}
if(edad >= 18 & edad <= 110){
    console.log("Es un adulto")
}
if(edad < 0 || edad > 110){
    console.log("No es una edad válida")
}