//Arrays
// function numeroKoders(){
//     let numkoders = parseInt(prompt("dame un numero"));
//     let koders=[];
//     for(let i = 1; i <= numkoders; i++){
//         let name = prompt("dame el nombre");
//         koders.push(`koder ${i} : ${name}`);
//     }
//     if(numkoders === koders.length){
//         koders.forEach((e)=>{
//             console.log(e);
//         })
//     }
// }
// numeroKoders();

// input: Kodemia
// output: aimedoK;

// function reverse(){
//     let cadena = "Kodemia";
//     let reverse = cadena.split("").reverse().join("");
//     console.log(reverse);
// }
// reverse();

//INICIALES
// function numeroKoders(){
//     let numkoders = parseInt(prompt("dame un numero"));
//     let koders=[];
//     for(let i = 1; i <= numkoders; i++){
//         let name = prompt("dame el nombre");
//         let iniciales = name.split(" ");
//         let koder = {
//             id : i,
//             nombre : iniciales[0],
//             apellido : iniciales[1],
//             iniciale : `(${iniciales[0].charAt(0).toUpperCase()}.${iniciales[1].charAt(0).toUpperCase()}.`,
//         }
//         koders.push(koder);
//     }
//     return koders;
// }
// console.log(numeroKoders());

let songsData = [
  {
    name: "Just like Heaven",
    band: "The Cure",
    releaseYear: "1980",
    statistics: {
      likes: 2545109856,
      reproductions: 4324309,
    },
  },
  {
    name: "Nikita",
    band: "Elton John",
    releaseYear: "1980",
    statistics: {
      likes: 9409483256,
      reproductions: 9843293,
    },
  },
  {
    name: "Kashmir",
    band: "Led Zeppelin",
    releaseYear: "1980",
    statistics: {
      likes: 20000,
      reproductions: 8000,
    },
  },
  {
    name: "Smells Like Teen Spirit",
    band: "Nirvana",
    releaseYear: "1989",
    statistics: {
      likes: 25000,
      reproductions: 100000,
    },
  },
  {
    name: "So What",
    band: "Metallica",
    releaseYear: "1990",
    statistics: {
      likes: 12000,
      reproductions: 95000,
    },
  },
  {
    name: "Nothing Else Matters",
    band: "Metallica",
    releaseYear: "1992",
    statistics: {
      likes: 128000,
      reproductions: 915000,
    },
  },
  {
    name: "Daze",
    band: "Poets of the Fall",
    releaseYear: "2014",
    statistics: {
      likes: 3548413,
      reproductions: 87095138,
    },
  },
  {
    name: "The Sweet Scape",
    band: "Poets of the fall",
    releaseYear: "2018",
    statistics: {
      likes: 26268856,
      reproductions: 2424568,
    },
  },
];
function findBand(b) {
  let band = songsData.find((e) => e.band == b);
  return band;
}
//   console.log(findBand("The Cure"));

// function topFive(){
//     let morePlays = songsData.sort((a, b)=> (a.statistics.reproductions < b.statistics.reproductions ) ? 1 : (a.statistics.reproductions > b.statistics.reproductions) ? -1 : 0).slice(0,5);
//     let moreLikes = songsData.sort((a,b) => (a.statistics.likes < b.statistics.likes) ? 1 : (a.statistics.likes > b.statistics.likes) ? -1 : 0).slice(0,1);
//     let moreRecent = songsData.sort((a,b) => (a.releaseYear < b.releaseYear) ? 1 : (a.releaseYear > b.releaseYear) ? -1 : 0).slice(0,1);
//     let popular ={
//         morePlays,
//         moreLikes,
//         moreRecent
//     }
//     return popular;
// }
// console.log(topFive())

// function findTop(section, propiedad ,minlist,maxlist){
//     let top = songsData.sort((a, b )=> (b[section][propiedad] ?? b[section]) - (a[section][propiedad] ?? a[section]) ).slice(minlist,maxlist);
//     return top;
// }

// function printList(){
//     console.log("top five",findTop("statistics", "reproductions", 0, 5));
//     console.log("top likes",findTop("statistics", "likes", 0, 1));
//     console.log("top recent",findTop("releaseYear", "", 0, 1));
// }
// printList();

const cartShoppings = [
  {
    name: "Coca lata 355ml",
    description: "Coca lata 355ml",
    price: 11,
    type: "drink",
  },
  {
    name: "Boing Mango 500ml",
    description: "Boing Mango 500ml",
    price: 10,
    type: "drink",
  },
  {
    name: "Boing Mango 1lt",
    description: "Boing Mango 1lt",
    price: 18,
    type: "drink",
  },
  {
    name: "Coca-Cola 3lt No Retornable",
    description: "Coca-Cola 3lt No Retornable",
    price: 40,
    type: "drink",
  },
  {
    name: "Coca-Cola 600ml",
    description: "Coca-Cola 600ml",
    price: 14,
    type: "drink",
  },
  {
    name: "Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t",
    description:
      "Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t",
    price: 27.5,
    type: "chip",
  },
  {
    name: "Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n",
    description:
      "Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n",
    price: 25.5,
    type: "chip",
  },
  {
    name: "Botanas Chips Papas Jalapeño 100 g",
    description: "Botanas Chips Papas Jalapeño 100 g",
    price: 29.7,
    type: "chip",
  },
  {
    name: "Botana Paketaxo Quexo 215 g",
    description: "Botana Paketaxo Quexo 215 g",
    price: 52.8,
    type: "chip",
  },
  {
    name: "Botana Doritos Incógnita 64 g",
    description: "Botana Doritos Incógnita 64 g",
    price: 18.15,
    type: "chip",
  },
  {
    name: "Botana Fritos Sal y Limón 57 g",
    description: "Botana Fritos Sal y Limón 57 g",
    price: 15.4,
    type: "chip",
  },
  {
    name: "Botana Doritos Nacho 58 g",
    description: "Botana Doritos Nacho 58 g",
    price: 17.6,
    type: "chip",
  },
  {
    name: "Botana Doritos Flamin Hot 62 g",
    description: "Botana Doritos Flamin Hot 62 g",
    price: 17.6,
    type: "chip",
  },
  {
    name: "Botanas Chips Papas Fuego Limón 100 g",
    price: 29.7,
    type: "chip",
  },
  {
    name: "Papas Sabritas Original 42 g",
    description: "Papas Sabritas Original 42 g",
    price: 17.6,
    type: "chip",
  },
  {
    name: "Papas Sabritas Adobadas 42 g",
    description: "Papas Sabritas Adobadas 42 g",
    price: 16.5,
    type: "chip",
  },
  {
    name: "Cacahuates Hot Nuts Multintenso 50 g",
    description: "Cacahuates Hot Nuts Multintenso 50 g",
    price: 11,
    type: "chip",
  },
  {
    name: "Botana Fritos Chorizo Chipotle 57 g",
    description: "Botana Fritos Chorizo Chipotle 57 g",
    price: 15.95,
    type: "chip",
  },
  {
    name: "Botana Chips Sal de Mar Bolsa 170 g",
    description: "Botana Chips Sal de Mar Bolsa 170 g",
    price: 49.5,
    type: "chip",
  },
  {
    name: "Botana Cheetos Poffs 100 g",
    description: "Botana Cheetos Poffs 100 g",
    price: 34.1,
    type: "chip",
  },
  {
    name: "Papas Fritas Stax Cheddar 156 g",
    description: "Papas Fritas Stax Cheddar 156 g",
    price: 47.85,
    type: "chip",
  },
  {
    name: "Papas Sabritas Original 240 g",
    description: "Papas Sabritas Original 240 g",
    price: 75.35,
    type: "chip",
  },
  {
    name: "Botana Doritos Nacho 370 g",
    description: "Botana Doritos Nacho 370 g",
    price: 82.5,
    type: "chip",
  },
  {
    name: "Chicharrón de Cerdo Sabritas 115 g",
    description: "Chicharrón de Cerdo Sabritas 115 g",
    price: 55,
    type: "chip",
  },
  {
    name: "Botana Cheetos Torciditos 150 g",
    description: "Botana Cheetos Torciditos 150 g",
    price: 34.1,
    type: "chip",
  },
  {
    name: "Papas Ruffles Queso 290 G",
    description: "Papas Ruffles Queso 290 G",
    price: 71.5,
    type: "chip",
  },
  {
    name: "Dip Tostitos Queso Suave 255 g",
    description: "Dip Tostitos Queso Suave 255 g",
    price: 69.3,
    type: "chip",
  },
];

const productType = (product) =>{
    let products = [];
    cartShoppings.forEach((cartShoppingsProduct) => {
        if (cartShoppingsProduct.type === product) products.push(cartShoppingsProduct);
    });
    return products;
}

const productPrice = (condition) =>{
    let products = [];
    cartShoppings.forEach((cartShoppingsProduct) => {
        if (condition === "menos" && cartShoppingsProduct.price < 50) products.push(cartShoppingsProduct);
        else if(condition === "mas" && cartShoppingsProduct.price >= 50) products.push(cartShoppingsProduct);
    });
    return products;
}

const total = (rango) => {
    let sumatoria = 0;
    cartShoppings.forEach((product) => {
        if(rango === "todo") sumatoria += product.price;
        else if(rango === "chip" && product.type === rango) sumatoria += product.price;
        else if(rango === "drink" && product.type === rango) sumatoria += product.price;
    })
    return sumatoria;
}

console.log(productType("drink"));
console.log(productType("chip"));
console.log(productPrice("menos"));
console.log(productPrice("mas"));
console.log(total("todo"));
console.log(total("chip"));
console.log(total("drink"));