const prompt= require("prompt-sync")()
let GradosF= parseFloat(prompt("Ingrese la temperatura:"))
function conversion(GradosF){
    GradosC= (GradosF - 32) / 1.8
    console.log(GradosF,"°F son", GradosC,"°C")
}
conversion(GradosF)