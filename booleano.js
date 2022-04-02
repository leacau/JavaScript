/* Primer desafio */

/* alert("Hola! Vamos a registrar tu ingreso a la empresa.");
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
} */

/* Segundo desafio */
alert(
    "Hola!, te damos la bienvenida a esta calculadora de valor final de productos"
);
let nombre = prompt("Para comenzar, decinos tu nomnbre");

let elegir = prompt(
    `${nombre} vamos a calcular el valor final de un producto, teniendo en cuenta los impuestos o taxes por ventas que tengas en tu país y las ganancias que desees tener. ¿Continuamos? (S - N)`
);

while (elegir !== "S" && elegir !== "s" && elegir !== "N" && elegir !== "n") {
    elegir = prompt(
        nombre +
        ", necesitamos que ingreses un valor válido. Deseas continuar (S-N)"
    );
}

while (elegir !== "N" && elegir !== "n") {
    let precio = parseFloat(
        prompt("Vamos! Indicanos el precio de costo del producto")
    );
    let impuesto = parseFloat(
        prompt("indica el porcentaje de impuesto o taxes por venta.")
    );
    let ganancia = parseFloat(
        prompt("Indica el porcentaje de markup (ganancias) a aplicar")
    );
    if (!isNaN(precio) && !isNaN(ganancia) && !isNaN(impuesto)) {
        function valorFinal(costo, markup, taxes) {
            let markupFinal = parseFloat(
                parseFloat(costo) * parseFloat(markup / 100)
            );
            let taxesFinal =
                parseFloat(costo + markupFinal) * parseFloat(taxes / 100);

            return parseFloat((taxesFinal += markupFinal += costo));
        }
        alert(valorFinal(precio, ganancia, impuesto));
    } else {
        alert(
            "No has ingresado alguno de los valores, en caso de no tener un valor, usar 0."
        );
    }

    elegir = prompt(`${nombre}, ¿volvemos a calcular otro valor? (S-N)`);
    while (elegir !== "S" && elegir !== "s" && elegir !== "N" && elegir !== "n") {
        elegir = prompt(
            nombre +
            ", necesitamos que ingreses un valor válido. Deseas continuar (S-N)"
        );
    }
}
alert("Gracias por usar nuestra calculadora! Adios " + nombre);