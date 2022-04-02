//areglos

const arr1 = [1, true, false, "casa"];

const nombre = ["Pepito", "Maria", "Agustina"];

//acceder a las posiciones del arreglo

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* console.log(numeros[0]);
console.log(numeros[3]);

let resultados = numeros[3] + numeros[5];

console.log(resultados); */

/* for (let index = 0; index < 5; index++) {
    console.log(numeros[index]);
} */

console.log(numeros.length);
console.log(nombre.length);

/* for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
} */

for (let i = numeros.length; i > -1; --i) {
    console.log(numeros[i]);
}

//agregar valores al final
nombre.push("Luis", "Juan", "Pedro");
console.log(nombre.length);
for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
}

//agregar valores al inicio
nombre.unshift("Primero");
console.log(nombre.length);
for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
}

console.log(nombre); //todos los nombres
//quitar elementos
nombre.pop(); //quita ultimo
console.log(nombre);

nombre.shift(); // quita el primero
console.log(nombre);

// eliminar elementos de cualquier posición
/* nombre.splice(2, 3); //(indice, cantidad de elementos)
console.log(nombre); */

//generar string con elementos del array
console.log(nombre.join(", "));
console.log(nombre.join("*"));
console.log(nombre.join(" + "));

//concatenar dos o arrays
const nuevoArreglo = nombre.concat(numeros);
console.log(nuevoArreglo);

//copia de una parte del array en nuevo array
const nombreMasc = nombre.slice(0, 1);
const nombreMasc2 = nombre.slice(3, 2);
console.log(nombreMasc.concat(nombreMasc2));

//indexof() retorna indice del valor buscado

console.log(nombre.indexOf("Maria"));
console.log(nombre.indexOf("Agustina"));
console.log(nombre.indexOf("Lucas"));

//includes devuleve un booleano (tru or flase)

console.log(nombre.includes("Lorena"));
console.log(nombre.includes("Agustina"));

//reverse voltea el orden de los elementos del arreglo