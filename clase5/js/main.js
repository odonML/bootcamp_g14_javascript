/* usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5 
-crear un array de strings con la siguiente forma:
    "Mi nombre es {nombre} y mi promedio es de {promedio}"
*/

const mentorsArray = [
    {
        name:"Ivan Diaz",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"Alan Medina",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Elvira Camarillo",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Alejandra Paez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
      name:"Alejandra Paez",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:9
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  }
  ]

//   const getScore = (subject) => {
//       let promedio = 0;
//       let suma = 0;
//       mentorsArray.forEach((mentor, index) => {
//         mentor.scores.forEach((materia) => { 
//             if(materia.signature === subject){
//                 suma += materia.score;
//                 promedio = suma/(index+1); 
//             }
//         });
//     });
//     return promedio;
//   }
//   console.log(getScore("HTML"));
  
//   const getScoreByName = (mentorName) => {
//       mentorsArray.forEach((mentor) => {
//         let suma = 0;
//         let promedio= 0;
//         if(mentor.name === mentorName){
//             mentor.scores.forEach((materia, index) => {
//                 suma += materia.score;
//                 promedio = suma/(index + 1);
//             });
//             console.log(`Promedio individual de ${mentor.name} es de ${promedio}`);
//         }
//     });
//   }
//   getScoreByName("Ivan Diaz")
  
  
  
//   const selectedGroup = (calif) => {
//       mentorsArray.forEach((mentor) => {
//           let name = mentor.name;
//           let suma = 0;
//         let promedio= 0;
//         mentor.scores.forEach((materia, index) => {
//             suma += materia.score;
//             promedio = suma/(index + 1);
//         });
//         if(promedio >= calif){
//             console.log(`Soy ${name} y mi promedio de ${promedio} es mayor a ${calif}`);
//         }
//     });
// }
// selectedGroup(8);

// const getAllScores = () => {
//     let allMentorsPromedio = [];
//     mentorsArray.forEach((mentor) => {
//         let name = mentor.name;
//         let suma = 0;
//         let promedio= 0;
//         let cadena = '';
//             mentor.scores.forEach((materia, index) => {
//                 suma += materia.score;
//                 promedio = suma/(index + 1);
//             });
//             cadena = `Mi nombre es ${name} y mi promedio es de ${promedio}`;
//             allMentorsPromedio.push(cadena);
//       });

//       return allMentorsPromedio;
// }

// console.log(getAllScores());



// ----------------------------------------
//-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
const avgScoreBySignature = (signature) =>{
    const calif = [];
    const newFilter = mentorsArray.filter(mentor => mentor.scores.map(mat => { if(mat.signature === signature)calif.push(mat.score) }));
    const listFound = (calif.reduce((suma,score) => (Number(suma) + Number(score)),0))/calif.length;
    return console.log(`El promedio de ${signature} es ${listFound}`);
};
avgScoreBySignature('ReactJS'); //'HTML', 'CSS', 'JS', 'ReactJS'


//-Obtener el promedio individual de cada mentor
const avgScoreByMentor = (mentor) =>{
    const array=[];
    mentorsArray.map(mentorKodemia => {if(mentorKodemia.name === mentor){array.push(mentorKodemia.scores.map(e => e.score))}})
    console.log(array)
    const [calif] = array;
    const reducerFunction = (calif.reduce((suma,score)=>suma + score,0))/calif.length;
    return console.log(`El promedio de ${mentor} es ${reducerFunction}`);
};
avgScoreByMentor('Elvira Camarillo');

//-Obtener la lista de mentores cuyo promedio sea mayor a 9.5 
const avgGreatestByMentor = (reference) =>{
    // const getAvg = mentorsArray.map((mentor)=>{
    //     const getScore = mentor.scores.map(scores => scores.score);
    //     const getSummation = getScore.reduce((suma,score)=>suma + score,0);
    //     let avg = getSummation/getScore.length;
    //     if(avg > reference){ return console.log(`El mentor ${mentor.name} tiene un promedio de ${avg} el cual es mayor a ${reference}`)};
    // });
}
avgGreatestByMentor(9);

/*-crear un array de strings con la siguiente forma:
    "Mi nombre es {nombre} y mi promedio es de {promedio}"
*/
const createArrayScore = () =>{
    let arrMentors = [];
    const getAvg = mentorsArray.map((mentor)=>{
        const getScore = mentor.scores.map(scores => scores.score);
        const getSummation = getScore.reduce((suma,score)=>suma + score,0);
        let avg = getSummation/getScore.length;
        arrMentors.push(`Mi nombre es ${mentor.name} y mi promedio es de ${avg}`);
        
    });return console.log(arrMentors);
}
createArrayScore();


const materias = () =>{
    let materiasNombres = {};
    mentorsArray.forEach(mentor => {
        mentor.scores.forEach(myscore =>{
                
        })
    })
}
materias();