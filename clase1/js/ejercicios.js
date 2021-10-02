// 1------------------------------------------------------------------
// let num = parseInt(prompt("dame un numero del 1 al 100"));

// if(!isNaN(num)){
//     if(num>0 && num <= 100){
//         let mensaje = num%2 === 0 ? `${num} es par` : `${num} es inpar`;
//         console.log(mensaje);
//     }else{
//         console.log("tu numero es 0 o mayor a 100");
//     }
// }else{
//     console.log("es una letra")
// }
// 2------------------------------------------------------------------
// let num1 = parseInt(prompt("dame un numero"));
// let num2 = parseInt(prompt("dame otro numero"));

// if(!isNaN(num1) && !isNaN(num2) && num1>0 && num2>0 ){
//     let mayor = num1 > num2 ? `${num1} es mayot que ${num2}`: `${num1} es menor que ${num2}`;
//     console.log(mayor);
// }else{
//     console.log("hay una letra o ambos son 0 ")
// }
// 3------------------------------------------------------------------
// let name = prompt("dame tu nombre");
// let weight = parseFloat(prompt("dame tu peso en kg"));

// let moon = (weight/9.18)*1.622;
// console.log("tu peso en la luna es ", moon);
// 4------------------------------------------------------------------
 let cal = parseInt(prompt("dame tu calificacion"));


if(!isNaN(num)){
 if(cal >= 90){
     console.log("tu calificacion es A")
 }else  if(cal >= 80 && cal < 90){
    console.log("tu calificacion es B")
}else  if(cal >= 70 && cal < 80){
    console.log("tu calificacion es C")
}else  if(cal >= 60 && cal < 70){
    console.log("tu calificacion es D")
}else  if(cal >= 50 && cal < 60){
    console.log("tu calificacion es E")
}else  if(cal < 50){
    console.log("tu calificacion es F")
}
}else{
    console.log("no son validas las letras")
}
