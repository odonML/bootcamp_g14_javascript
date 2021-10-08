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

function reverse(){
    let cadena = "Kodemia";
    let reverse = cadena.split("").reverse().join("");
    console.log(reverse);
}
reverse();