/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Ivan"
    input Apellido = "Diaz"
    Output: "ivan DIAZ"
*/
// const showName = function(){
//     let nombre = prompt("dame tu nombre");
//     let apellido = prompt("dame tu apellido");
//     let cadena = nombre.toLowerCase() +" "+ apellido.toUpperCase();
//     return cadena;
// }
// console.log(showName());
//====================================================================================
/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/
// const nameLength = function(){
//     let nombreCompleto = prompt("dame tu nombre completo");
//     let numCaracteres = nombreCompleto.replace(" ","").length;
//     return numCaracteres;
// }
// console.log(nameLength());
//====================================================================================
/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/
// const vocals = function(){
//     let nombreCompleto = prompt("dame tu nombre completo");
//     let arrayNombre = nombreCompleto.toLowerCase().split("");
//     const vocales = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     arrayNombre.forEach((e)=>{
//         let find = vocales.indexOf(e);
//         if(find != -1){
//             count++;
//         }
//     })
//     return count;
// }
// console.log(vocals())
//====================================================================================
/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/
// const msjKoders = function(){
//     let text = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";
//     let numPalabra = text.split(" ").filter(e => e === "estudiante").length;
//     let textKoder = text.replaceAll("estudiante", "koder");
//     return `la palabra de estudiate se repite ${numPalabra} veces en ${textKoder}`;
// }
// console.log(msjKoders());
//====================================================================================
/*
Ejercicio 5:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/
// const large = function(){
//     let oracion = prompt("dame una oracion");
//     console.log(oracion)
//     let arrayOracion = oracion.split(" ");
//     let large = {
//         palabra: "",
//         count: 0,
//     }
//     arrayOracion.forEach((e)=>{
//         if(e.length > large.count){
//             large.palabra = e;
//             large.count = e.length;
//         }
//     })
//     return large;
// }
// console.log(large());