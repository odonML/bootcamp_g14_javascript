// let saludo;
// saludo = "hola papus de papus xD";
// console.log(saludo);

// let n1=1, n2=0, suma=0;
// for(let i=0; i<20; i++){
//     console.log(n2);
//     suma=n1+n2;
//     n1=n2;
//     n2=suma;
// }

// let numeroUno=3, numeroDos=2;
// console.log(numeroUno+numeroDos);
// console.log(numeroUno-numeroDos);
// console.log(numeroUno*numeroDos);
// console.log(numeroUno/numeroDos);

// let saludoUno="hola ", saludoDos="mundo";
// console.log(saludoUno+saludoDos);

// let radio = parseInt(prompt("introduce el radio del circulo"));
// let area = 3.1416*(radio*radio);
// console.log(area);

// let y = 3, x = 5;
// if(y>x){
//     console.log("Y es mayor");
// }else if(x>y){
//     console.log("X es mayor")
// }else{
//     console.log("igual")
// }

// let multi = y*x;
// if((multi%2)>0){
//     console.log("resultado impar");
// }else{
//     console.log("resultado par");
// }

// let numero=5;
// if((numero%2)>0){
//     console.log("resultado impar");
// }else{
//     console.log("resultado par");
// }

// let dato = 1;
// function queEs(dato){
//     console.log(typeof dato);
// }
// queEs(dato)

// let anio = 1806;
// function anioBisiesto(anio){
//     if(anio%4 === 0 && anio > 0){
//         console.log("año bisiesto");
//     }else if(anio%4 > 0 && anio > 0){
//         console.log("año no bisiesto");
//     }else{
//         console.log("tu año es cero");
//     }

// }
// anioBisiesto(anio)

let op = prompt("escribe la operacion que quieres realizar", "suma");
let n1 = parseInt(prompt("dame un numero"));
let n2 = parseInt(prompt("dame otro numero"));
let r = 0;

function suma(n1, n2) {
  r = n1 + n2;
  console.log(r);
}
function resta(n1, n2) {
  r = n1 - n2;
  console.log(r);
}
function multi(n1, n2) {
  r = n1 * n2;
  console.log(r);
}
function divi(n1, n2) {
  r = n1 / n2;
  console.log(r);
}
function ex(n1, n2) {
  r = n1 ** n2;
  console.log(r);
}
function calculadora(ope) {
  if (n1 !== 0 && n2 !== 0 && !isNaN(n1) && !isNaN(n2)) {
    switch (ope) {
      case "suma":
        suma(n1, n2);
        break;
      case "resta":
        resta(n1, n2);
        break;
      case "multiplicacion":
        multi(n1, n2);
        break;
      case "division":
        divi(n1, n2);
        break;
      case "exponente":
        ex(n1, n2);
        break;
      default:
        console.log("tu operacion noes valida");
    }
  } else {
    console.log("no pueden ser los dos valores 0 o alguno una letra");
  }
}
calculadora(op);
