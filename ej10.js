const prompt= require("prompt-sync")()
let color= prompt("Ingrese el color:")

function traduccion(color) {
    let colornuevo;
    switch (color) {
        case "azul":
            colornuevo = "blue";
            break;
        case "rojo":
            colornuevo = "red";
            break;
        case "verde":
            colornuevo = "green";
            break;
        case "naranja":
            colornuevo = "orange";
            break;
        case "amarillo":
            colornuevo = "yellow";
            break;
        default:
            colornuevo = "Color not found";
            break;
    }
    return colornuevo;
}

console.log(traduccion(color));