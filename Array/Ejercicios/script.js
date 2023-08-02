// obtenerMenor(numeros)----------------------------------------------------------
// Crear una función obtenerMenor que tome como argumento un array de números y devuelva el menor de ellos.

// const obtenerMenor = (numeros) => {
//     const arrayOrdenado = numeros.sort((a, b) => {
//     return a - b;
//     });
//     const numeroMenor = arrayOrdenado[0];
//     return numeroMenor;
// };

// console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12])) // 2

// sumar(numeros)----------------------------------------------------------
// Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos.

// const sumar = (numeros) => {
//     let suma = 0;
//     for (let i = 0; i < numeros.length; i++) {
//         suma += numeros[i];
//     }
//     return suma;
// }

// console.log(sumar([5, 7, 10, 12, 24])) // 58

// contiene(numero, numeros)----------------------------------------------------------
// Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

// const contiene = (numero, numeros) => {
//     return numeros.includes(numero);
// }

// console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])) // true
// console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])) // false

// invertirCaso(string)----------------------------------------------------------
// Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

// const invertirCaso = (string) => {
//     let resultado = '';
//     for (let i = 0; i < string.length; i++) {
//         const caracter = string.charAt(i);
//         let caracterInvertido;
//         if (caracter === caracter.toUpperCase()) {
//         caracterInvertido = caracter.toLowerCase();
//         } else {
//         caracterInvertido = caracter.toUpperCase();
//         }
//         resultado += caracterInvertido;
//     }
//     return resultado;
// };

// console.log(invertirCaso('Ada Lovelace')) // 'aDA lOVELACE'
// console.log(invertirCaso('feliz cumple')) // 'FELIZ CUMPLE'
// console.log(invertirCaso('jAvAsCrIpT')) // 'JaVaScRiPt'

// gano(tragamonedas)----------------------------------------------------------
// Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.

// const gano = (simbolos) => {
//     for (let i = 0; i < 5; i++) {
//         if (simbolos[i] !== simbolos[0]) {
//         return false;
//         }
//     }
//     return true;
// };


// console.log(gano(['⭐️', '⭐️', '⭐️', '💫', '✨'])) // false
// console.log(gano(['💫', '💫', '💫', '💫', '💫'])) // true
// console.log(gano(['💫', '💫', '💫', '💫', '💫', '⭐️'])) // true

// estanJuntos(personajes)----------------------------------------------------------
// Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino.

// const estanJuntos = (personajes) => {
//     for (let i = 0; i < personajes.length; i++) {
//         if (personajes[i] === 'Frodo' && personajes[i + 1] === 'Sam') {
//         return true;
//         } else if (personajes[i] === 'Sam' && personajes[i + 1] === 'Frodo') {
//         return true;
//         }
//     }
//     return false;
// }

// console.log(estanJuntos(['Sam', 'Frodo', 'Legolas'])) //true
// console.log(estanJuntos(['Aragorn', 'Frodo', 'Frodo'])) //false
// console.log(estanJuntos(['Sam', 'Orco', 'Frodo'])) //false

// separar(perrosYGatos)----------------------------------------------------------
// Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

// const separar = (perrosYGatos) => {
//     let perros = ``;
//     let gatos = ``;
//     for (let elemento of perrosYGatos) {
//     if (elemento === `p`) {
//         perros += elemento;
//     } else {
//         gatos += elemento;
//     }
//     }
//     return perros + gatos;
// };

//reemplace los emojis por su inicial
// console.log(separar('pgpggpp')) // 'ppppggg'

// obtenerChatStatus(usuarias)----------------------------------------------------------
// Crear una función obtenerChatStatus que tome como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas

// const obtenerChatStatus = (usuarias) => {
//     if (usuarias.length === 1) {
//         return `${usuarias[0]} está conectada`;
//     } else if (usuarias.length === 2) {
//         const usuariasConectadas = usuarias.join(" y ");
//         return `${usuariasConectadas} están conectadas`;
//     } else {
//         return `${usuarias[0]}, ${usuarias[1]} y ${
//         usuarias.length - 2
//         } persona(s) estan conectadas`;
//     }
// };

// console.log(obtenerChatStatus(['Ada'])) // 'Ada está conectada'
// console.log(obtenerChatStatus(['Ada', 'Grace'])) // 'Ada y Grace están conectadas'
// console.log(obtenerChatStatus(['Ada', 'Grace', 'Marie'])) // 'Ada, Grace y 1 persona(s) más están conectadas'

// ***************************************************************************
// A PARTIR DE AHORA EN ADELANTE SOLO REALIZARE EJERCICIOS QUE SEAN DE ARRAYS
// ***************************************************************************

// multiplicar(multiplicador, numeros)----------------------------------------------------------
// Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado.

// const multiplicar = (multiplicador, numeros) => {
//     let resultado = [];
//     for(let numero of numeros) {
//         nuevoArray =  numero * multiplicador;
//         resultado.push(nuevoArray);
//     } return resultado;
// }


// console.log(multiplicar(2, [5, 7, 15, 22, 40])) // [10, 14, 30, 44, 80]
// console.log(multiplicar(10, [2, 5, 77])) // [20, 50, 770]

// filtrarPorLongitudMayorA(longitud, palabras)----------------------------------------------------------
// Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud

// const filtrarPorLongitudMayorA = (longitud, palabras) => {
//     const palabrasFiltradas = [];
//     for (let palabra of palabras) {
//         if(palabra.length > longitud) {
//             palabrasFiltradas.push(palabra);
//         }
//     } return palabrasFiltradas;
// }

// console.log(filtrarPorLongitudMayorA(4, ['dia','remolacha','azul','sorpresa','te','verde'])) // ['remolacha', 'sorpresa', 'verde']

// recortar(cantidadLetras, palabras)----------------------------------------------------------
// Crear una función recortar que tome como argumentos un número cantidadLetras y un array de strings palabras y devuelva un array con las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef

// const recortar = (cantidadLetras, palabras) => {
//     const palabrasRecortadas = [];
//     for (let palabra of palabras) {
//     const palabraRecortada = palabra.slice(0, cantidadLetras);
//     palabrasRecortadas.push(palabraRecortada);
//     }
//     return palabrasRecortadas;
// };


// console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america'])) // ['eleft', 'dino' 'chocolate', 'avio', 'amer']
// console.log(recortar(1, ['algoritmo', 'bug', 'compilador'])) // ['a', 'b', 'c']

// sonIguales(a, b)----------------------------------------------------------
// Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true si ambos arrays tienen los mismos valores en la misma posición, o false sino.

// const sonIguales = (a, b) => {
//     const array1 = a.slice(0, -1);
//     const array2 = b.slice(0, -1);
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//         return false;
//         }
//     }
//     return true;
//     };


// console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])) // true
// console.log(sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105])) // false
// console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105])) // false


// obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB)--------------------------------------------
// Crear una función obtenerResultado que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto

// const obtenerResultado = (jugadoraA, jugadoraB, puntajesA, puntajesB) => {
//     let puntosA = 0;
//     let puntosB = 0;
//     for (let i = 0; i < puntajesA.length; i++) {
//         if (puntajesA[i] > puntajesB[i]) {
//         puntosA++;
//         } else if (puntajesA[i] < puntajesB[i]) {
//         puntosB++;
//         }
//     }
//     if (puntosA > puntosB) {
//         return jugadoraA;
//     } else if (puntosA < puntosB) {
//         return jugadoraB;
//     } else {
//         return "Empate";
//     }
// }

// console.log(obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3])) // Ada
// console.log(obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9])) // Empate
// console.log(obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3])) // Grace

// jugarPiedraPapelTijeras(jugadoraA, jugadoraB, jugadasA, jugadasB)---------------------------------------
// Crear una función jugarPiedraPapelTijeras que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de strings jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente.

// const jugarPiedraPapelTijeras = (jugadoraA, jugadoraB, jugadasA, jugadasB) => {
//     let puntosA = 0;
//     let puntosB = 0;
//   // Recorrer las jugadas de ambas jugadoras y comparar las jugadas en cada posición
//     for (let i = 0; i < jugadasA.length; i++) {
//     const jugadaA = jugadasA[i];
//     const jugadaB = jugadasB[i];
//     if (jugadaA === jugadaB) {
//         return `Empate`;
//     } else if (
//         (jugadaA === 'piedra' && jugadaB === 'tijera') ||
//         (jugadaA === 'tijera' && jugadaB === 'papel') ||
//         (jugadaA === 'papel' && jugadaB === 'piedra')
//     ) {
//       // Jugadora A gana la ronda, sumar un punto
//         puntosA++;
//     } else {
//       // Jugadora B gana la ronda, sumar un punto
//         puntosB++;
//     }
//     }
//   // Comparar los puntos de ambas jugadoras al final para determinar la ganadora o si hay empate
//     if (puntosA > puntosB) {
//     return jugadoraA;
//     } else { (puntosB > puntosA) 
//     return jugadoraB;
//     }
// }

// console.log(jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra'])) // Grace
// console.log(jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel'])) // Empate
// console.log(jugarPiedraPapelTijeras('Ada','Grace', ['piedra', 'papel', 'papel', 'piedra', 'tijera'], ['papel', 'piedra', 'tijera', 'tijera', 'papel'])) // Ada


