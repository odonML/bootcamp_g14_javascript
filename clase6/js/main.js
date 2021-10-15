/*
Ejercicio:
*/
const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
]

// [
//     'banda1',
//     'banda2',
// ];

/*
- Agrupar los nombres de la bandas, que no esten repetidas
- Agrupar las canciones por banda
- La cancion con más reproducciones
- La cancion con más likes
*/


const nameBands = () => {
    // const bands = songsData.map(song => song.band);
    // const names = bands.filter((name, index) => bands.indexOf(name) === index);
    // return names;
    let nameBands = songsData.reduce((arrayName, value)=>{
        if(!arrayName.includes(value.band)) arrayName.push(value.band);
        return arrayName;
    },[])
    return nameBands;
}
console.log(nameBands())

const songsByBands = () =>{
    const names = nameBands();
    const namesAndSongs = [];
    names.forEach((name)=>{
        let songsAndBands = songsData.reduce((arrayBands, band) => {
            if(name === band.band) arrayBands.push(band.name);
            return arrayBands;
        },[])
        namesAndSongs.push({ [name] : songsAndBands });
    })
    return namesAndSongs;
    // const songsAndBands = [];
    // names.forEach(nameBand => {
    //     bandsAndSongs = songsData.filter(song =>{
    //         return nameBand === song.band;
    //     })
            //     let obj = {
                //         [nameBand]: bandsAndSongs
                //     }
                //     songsAndBands.push(obj);
                // });
                // return songsAndBands;
}
console.log(songsByBands())

const moreReproducciones = (rank) =>{
    let repro = songsData.reduce((acumulador, item) => {
       
    } )
    return repro;
}
console.log(moreReproducciones("reproductions"));




let calificaciones = [1,2,3,4];

let total = calificaciones.reduce((contador, item, index, perro)=>{
    return contador = perro;
}, "a" )

console.log(total);
