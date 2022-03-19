let valor = true;

if (valor) {
    console.log("Esto funciona perfecto");
}

/* let unNumero = 5;

// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5) {
    console.log("vas a ver este mensaje");
}

// Con (unNumero == 6) comparamos si unNumero es igual a 6
if (unNumero == 6) {
    console.log("no vas a ver este mensaje");
} */

let unColor = "Azul";

// Con (unColor == "Rojo") comparamos si unColor es igual "Rojo"
if (unColor == "Rojo") {
    console.log("el color es Rojo");
} else {
    //La instrucción se interpreta cuando unColor NO es "Rojo"
    console.log("el color NO es Rojo");
}

let edad = prompt("Ingrese su edad");

if (edad < 18) {
    alert("Usted no puede ingresar");
} else {
    alert("Puedes ingresar");
}