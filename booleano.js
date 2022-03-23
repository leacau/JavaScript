/* let valor = true;

if (valor) {
    console.log("Esto funciona perfecto");
} */

/* let unNumero = 5;

// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5) {
    console.log("vas a ver este mensaje");
}

// Con (unNumero == 6) comparamos si unNumero es igual a 6
if (unNumero == 6) {
    console.log("no vas a ver este mensaje");
} */

/* let unColor = "Azul";

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
} */

/* let edad = 19;

if (edad < 10) {
    console.log("No puedes entrar a la fiesta");
} else if (edad < 18) {
    console.log("Puedes ingresar con un adulto responsable");
} else {
    console.log("Puedes entrar solo");
} */

/* alert(
    "¿Cuántos puntos tiene mi equipo? Ingresá los resultados de los partidos y enterate"
);

let cantGanados = parseInt(prompt("Cantidad de partidos ganados"));
let cantEmpatados = parseInt(prompt("Cantidad de partidos empatados"));
const puntEmpate = 1;
const puntGanado = 3;

var totalPuntos = puntEmpate * cantEmpatados + puntGanado * cantGanados;
alert(`Los puntos que tiene tu equipo son: ${totalPuntos}`);

if (totalPuntos >= 20) {
    alert(`Tu equipo está clasificado al mundial`);
} else if (15 <= totalPuntos < 20) {
    alert(`Tu equipo tiene chances`);
} else {
    alert(`Ya no vas a gritar goles de tu equipo en el mundial`);
} */

/* let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if (nombreIngresado != "" && apellidoIngresado != "") {
    alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
} else {
    alert("Error: Ingresar nombre y apellido");
} */

alert("Hola! Vamos a registrar tu ingreso a la empresa.");
alert("A continuación indicanos tu apellido y nombre");
let apellido = prompt("¿Cuál es tu apellido?");
let nombre = prompt("¿Cuál es tu nombre?");
alert(
    "A contnuación elije alguno de estos colores: rojo, verde, azul, amarillo, violeta "
);
let hoy = new Date();
var minutes = parseInt(hoy.getMinutes());
if (minutes < 10) {
    var minutesN = "0" + minutes;
} else minutesN = minutes;
let hora = parseInt(hoy.getHours()) + ":" + minutesN;
var colEleg = prompt("Elije entre: rojo, verde, azul, amarillo, violeta");
while (
    colEleg != "rojo" &&
    colEleg != "verde" &&
    colEleg != "azul" &&
    colEleg != "amarillo" &&
    colEleg != "violeta"
) {
    var colEleg = prompt("Elije entre: rojo, verde, azul, amarillo, violeta");
}
if (colEleg == "rojo") {
    var color = "red";
} else if (colEleg == "verde") {
    var color = "green";
} else if (colEleg == "azul") {
    var color = "blue";
} else if (colEleg == "amarillo") {
    var color = "yellow";
} else if (colEleg == "violeta") {
    var color = "violet";
} else {
    var color = prompt("Elije entre: rojo, verde, azul, amarillo, violeta");
}

if (nombre != "" && apellido != "") {
    alert(
        "Hola " +
        nombre +
        " tu horario de ingreso es: " +
        hora +
        "\nTe deseamos un bonito día."
    );
}

if (nombre != "" && apellido != "") {
    document.write(
        `<div style="color:${color}">Hola ${nombre} tu horario de ingreso es: ${hora}<br>Te deseamos un bonito día.</div>`
    );
}