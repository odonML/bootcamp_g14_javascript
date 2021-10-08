/*
    Ejercicio 1:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/
// const tabla = function(){
//     let num = parseInt(prompt("dame un numero"));
//     let resultado = 0;
//     for(let i = 1; i<=10; i++){
//         resultado = i*num;
//         console.log(`${i} X ${num} = ${resultado}`);
//     }
// }
// tabla();

//================================
/*
Ejercicio 2:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/
// function pares(){
//     let num = parseInt(prompt("dame un numero entre el 10 y 100"));
//     if(num >= 10 && num <= 100){
//         for(let i = 1; i<=num; i++){
//             if(i%2 === 0){
//                 console.log(`${i} es par`);
//             }else{
//                 console.log(`${i} es inpar`);
//             }
//         }
//     }else{
//         console.log("tu numero no esta en el parametro de 10 a 100");
//     }
// }
// pares();

//================================
/*
Ejercicio 3:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/

// function sumaTotal(){
//     let num = prompt("dame una serie de numeros");
//     let numeros = num.split("");
//     let res = 0;
//     numeros.forEach((n)=>{
//         res += Number(n);
//     })
//     console.log(res);
// }
// sumaTotal()

//================================

/*
Ejercicio 4:
Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
*/

// function pino(){
//     let caracter = "*";
//     let niveles = 10;
//     let print = "";
//     for(let i = 1; i<=niveles; i++){
//         print += caracter;
//         console.log(print);
//     }
// }
// pino()

// const aleatorio =function(){
//     let num = parseInt(prompt("dame un numero"));
//     let text = ""
//     for(let i = 0; i<num; i++){
//         let random =Math.floor( Math.random()*(91 - 48)) + 48;
//         let randomMas = 168;
//         const caracter = String.fromCharCode(random, randomMas);
//         text += caracter;
//     }
//     return text;
// }
// console.log(aleatorio())


// function camelCase(){
//     let cadena = "hola papus";
//     let cadenaCamel = "";
//     for(let i = 0; i<cadena.length; i++){
//         if(i%2 !== 0){
//             cadenaCamel += cadena[i].toLowerCase();
//         }else{
//             cadenaCamel += cadena[i].toUpperCase();
//         }
//     }
//     console.log(cadenaCamel)
// }
// camelCase()