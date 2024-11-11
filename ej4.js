const prompt= require("prompt-sync")()
let numero= parseFloat(prompt("Ingrese el numero:"))
function resultado(numero){
    if(numero%5 == 0){
        console.log("SI es divisible por 5")
    }
    else{
        console.log("NO es divisible por 5")
    }
}
resultado(numero)