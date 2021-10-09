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
      }
    },
    {
      name: "Nikita",
      band: "Elton John",
      releaseYear: "1980",
      statistics: {
        likes: 9409483256,
        reproductions: 9843293,
      }
    },
    {
      name: "Kashmir",
      band: "Led Zeppelin",
      releaseYear: "1980",
      statistics: {
        likes: 20000,
        reproductions: 8000,
      }
    },
    {
      name: "Smells Like Teen Spirit",
      band: "Nirvana",
      releaseYear: "1989",
      statistics: {
        likes: 25000,
        reproductions: 100000,
      }
    }, {
      name: "So What",
      band: "Metallica",
      releaseYear: "1990",
      statistics: {
        likes: 12000,
        reproductions: 95000,
      }
    }, {
      name: "Nothing Else Matters",
      band: "Metallica",
      releaseYear: "1992",
      statistics: {
        likes: 128000,
        reproductions: 915000,
      }
    }, {
      name: "Daze",
      band: "Poets of the Fall",
      releaseYear: "2014",
      statistics: {
        likes: 3548413,
        reproductions: 87095138,
      }
    }, {
      name: "The Sweet Scape",
      band: "Poets of the fall",
      releaseYear: "2018",
      statistics: {
        likes: 26268856,
        reproductions: 2424568,
      }
    }
  ]
  function findBand(b){
      let band = songsData.find(e => e.band == b);
      return band;
  }
//   console.log(findBand("The Cure"));

function topFive(){
    let morePlays = songsData.sort((a, b)=> (a.statistics.reproductions < b.statistics.reproductions ) ? 1 : (a.statistics.reproductions > b.statistics.reproductions) ? -1 : 0).slice(0,5);
    let moreLikes = songsData.sort((a,b) => (a.statistics.likes < b.statistics.likes) ? 1 : (a.statistics.likes > b.statistics.likes) ? -1 : 0).slice(0,1);
    let moreRecent = songsData.sort((a,b) => (a.releaseYear < b.releaseYear) ? 1 : (a.releaseYear > b.releaseYear) ? -1 : 0).slice(0,1);
    let popular ={
        morePlays,
        moreLikes,
        moreRecent
    }
    return popular;
}
console.log(topFive())