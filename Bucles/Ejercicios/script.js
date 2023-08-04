// obtenerIndice(valor, array)----------------------------------------------------------
// Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.

// const obtenerIndice = (valor, array) => {
//     for (let indice of array) {
//     return array.indexOf(valor);
//     }
// }

// console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12])) // 2
// console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12])) // -1

// repetir(valor, cantidad)----------------------------------------------------------
// Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.

// const repetir = (valor, cantidad) => {
//     let arrayRepetido = [];
//     for (let i = 0; i < cantidad; i++) {
//     arrayRepetido.push(valor);
//     }
//     return arrayRepetido;
// }

// console.log(repetir('lovelace', 3)) // ['lovelace', 'lovelace', 'lovelace']
// console.log(repetir('a', 5)) // ['a', 'a', 'a', 'a', 'a']
// console.log(repetir('html', 0)) // []

// sumarImparesHasta(numero)----------------------------------------------------------
// Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

// const sumarImparesHasta = (numero) => {
//     let sumaImpares = 0;
//     for (let i = 1; i <= numero; i += 2) {
//     sumaImpares += i;
//     }
//     return sumaImpares;
// }

// console.log(sumarImparesHasta(5)) // 9 (1 + 3 + 5 = 9)
// console.log(sumarImparesHasta(13)) // 49
// console.log(sumarImparesHasta(47)) // 576

// crearCuentaRegresiva(numeroInicial)----------------------------------------------------------
// Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

// const crearCuentaRegresiva = (numeroInicial) => {
//     const cuentaRegresiva = [];
//     for (let i = numeroInicial; i >= 0; i--) {
//     cuentaRegresiva.push(i);
//     }
//     return cuentaRegresiva;
// }

// console.log(crearCuentaRegresiva(3)) // [3, 2, 1, 0]
// console.log(crearCuentaRegresiva(5)) // [5, 4, 3, 2, 1, 0]

// invertir(array)----------------------------------------------------------
// Crear una función invertir que tome como argumento un array array y que devuelva un array con los mismos valores pero en orden invertido.

// const invertir = (array) => {
//     return array.reverse();
// }

// console.log(invertir([1, 2, 3])) // [3, 2, 1]
// console.log(invertir([5, 7, 99, 34, 54, 2, 12])) // [12, 2, 54, 34, 99, 7, 5]

// removerDuplicados(array)----------------------------------------------------------
// Crear una función removerDuplicados que tome como argumento un array array y que devuelva un array con los mismos valores de array pero sin valores duplicados.

// const removerDuplicados = (array) => {
//     let sinDuplicados = [];
//     array.forEach((num, index) => {
//     if (!sinDuplicados.includes(num)) {
//     sinDuplicados.push(num);
//     }
//     });
//     return sinDuplicados;
// };

// console.log(removerDuplicados([1, 1, 1])) // [1]
// console.log(removerDuplicados([1, 1, 2, 2, 3, 3])) // [1, 2 ,3]
// console.log(removerDuplicados([5, 23, 8, 5, 5, 44, 23])) // [5, 23 ,8, 44]

// repetirLetras(palabra, cantidad)----------------------------------------------------------
// Crear una función repetirLetras que tome como argumento un string palabra y un número entero cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.

// const repetirLetras = (palabra, cantidad) => {
//     let nuevaPalabra = "";
//     for (let letra of palabra) {
//     nuevaPalabra = nuevaPalabra + letra.repeat(cantidad);
//     }
//     return nuevaPalabra;
// };

// console.log(repetirLetras('hola', 2)) // 'hhoollaa'
// console.log(repetirLetras('ada', 3)) // 'aaadddaaa'
// console.log(repetirLetras('ah!', 5)) // 'aaaaahhhhh!!!!!'
// console.log(repetirLetras('basta', 1)) // 'basta'

// capitalizarPalabras(string)----------------------------------------------------------
// Crear una función capitalizarPalabras tome como argumento un string string y devuelva un string donde cada palabra está capitalizada (con la primera letra mayuscula). Dejar las demás letras como están.

// const capitalizarPalabras = (string) => {
//     const palabras = string.split(" ");
//     const palabrasCapitalizadas = palabras.map((palabra) => {
//     const primeraLetraMayuscula = palabra.charAt(0).toUpperCase();
//     const restoPalabra = palabra.slice(1).toLowerCase();
//     return primeraLetraMayuscula + restoPalabra;
// });
//     return palabrasCapitalizadas.join(" ");
// }

// console.log(capitalizarPalabras('Esto es un título')) // 'Esto Es Un Título'
// console.log(capitalizarPalabras('había una vez')) // 'Había Una Vez'
// console.log(capitalizarPalabras('OMG')) // 'OMG' NO FUNCIONA