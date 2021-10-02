// TAREA-----------------------------------------
// Casa de cambio
// Crear una funcion que obtenga  una cantidad de  dinero a traves de prompt(), tambien debe  pedirle el nombre de un pais , investigar su moneda y el tipo de cambio para hacer la conversion de  la cantidad capturada. ejemplo
// 1-¿Que cantidad en MXN deseas convertir ?
// R= 1500 MXN
// 2¿A que pais vas a viajar?
// R= USA
// salida de la funcion: '$1500MXN (moneda local elegida por el koder) equivale a $750USD(moneda del pais ingresado por el usuario)'
// Considerar minimo 4 tipo de monedas

function convert(monedaEx, pesos, sim){
    let cambio = pesos/monedaEx;
    return console.log(`${pesos} MXM equivalen a ${sim}${cambio.toFixed(2)}`);
}
function casaDeCambio(){
    let pesos = Number(prompt("introduce la cantidad que deseas convertir?"));
    let pais = prompt("escribe uno de estos paises, USA, EU ó UK?");
    let sim = "";
    switch(pais){
        case "Estados Unidos":
        case "USA":
            let dolar = 20.45;
            sim = "$";
            convert(dolar, pesos, sim);
        break;
        case "Europa":
        case "EU":
            let euro = 23.71;
            sim = "€";
            convert(euro, pesos, sim);
        break;
        case "Reino Unido":
        case "UK":
            let libra = 27.70;
            sim = "£";
            convert(libra, pesos, sim);
        break;
        default:
            console.log("pais no valido");
    }
}

casaDeCambio();