const prompt= require("prompt-sync")()
let num1= parseFloat(prompt("Ingrese el primer numero:"))
let num2= parseFloat(prompt("Ingrese el segundo numero:"))
if(num1>num2){
    console.log(num1, "es mayor que", num2)
}
if(num1<num2){
    console.log(num2, "es mayor que", num1)
}
if(num1==num2){
    console.log(num1, "es igual que", num2)
}