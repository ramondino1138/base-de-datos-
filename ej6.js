const prompt= require("prompt-sync")()
let ang1= parseFloat(prompt("Ingresa un angulo:"))
let ang2= parseFloat(prompt("Ingresa otro angulo:"))
let ang3= parseFloat(prompt("Ingresa el ultimo angulo:"))
if(ang1+ang2+ang3 == 180){
    console.log("El triangulo SI es valido")
}
else{
    console.log("El triangulo NO es valido")
}