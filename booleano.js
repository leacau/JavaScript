alert("Hola! Vamos a registrar tu ingreso a la empresa.");
alert("A continuación indicanos tu apellido y nombre");
for (var i = 1; i <= 100; i++) {
    var apellido = prompt("¿Cuál es tu apellido?");
    var nombre = prompt("¿Cuál es tu nombre?");
    while (apellido == "" || nombre == "" || apellido == null || nombre == null) {
        alert("Por favor, ingresa tu nombre y apellido. No dejes campo en blanco");
        var apellido = prompt("¿Cuál es tu apellido?");
        var nombre = prompt("¿Cuál es tu nombre?");
    }
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

    alert(
        "Hola " +
        nombre +
        " tu horario de ingreso es: " +
        hora +
        "\nEres el registro n° " +
        i +
        " del día de hoy." +
        "\nQue tengas un bonito día."
    );
    document.write(
        `<div style="color:${color}">Hola ${nombre} tu horario de ingreso es: ${hora}<br>Eres el registro n° ${i} del día.<br>Te deseamos un bonito día.</div>`
    );
}