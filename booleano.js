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