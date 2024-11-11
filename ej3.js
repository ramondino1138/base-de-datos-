const prompt= require("prompt-sync")()
let string1= prompt("Ingrese un string:")
let string2= prompt("Ingrese otro string:")
let iguales= string1 == string2
let longitud= string1.lenght == string2.lenght
console.log("¿Son iguales?", {iguales})
console.log("¿Tienen la misma longitud?", {longitud})