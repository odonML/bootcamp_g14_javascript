const koders = [
  {
    name: "Harold",
    lastName: "López",
    birthday: "1996/06/24",
    generation: 9,
    bootcamp: "JavaScript",
    scores: [
      {
        module: "Frontend",
        score: 90,
      },
      {
        module: "Backend",
        score: 80,
      },
      {
        module: "Cloud",
        score: 80,
      },
    ],
  },

  {
    name: "Arnold",
    lastName: "Osborn",
    birthday: "1998/05/12",
    generation: 1,
    bootcamp: "Python",
    scores: [
      {
        module: "Frontend",
        score: 90,
      },
      {
        module: "Backend",
        score: 100,
      },
      {
        module: "Cloud",
        score: 100,
      },
    ],
  },
  {
    name: "Peter",
    lastName: "Parker",
    birthday: "1994/10/26",
    generation: 10,
    bootcamp: "JavaScript",
    scores: [
      {
        module: "Frontend",
        score: 100,
      },
      {
        module: "Backend",
        score: 95,
      },
      {
        module: "Cloud",
        score: 80,
      },
    ],
  },
  {
    name: "Homer",
    lastName: "Simpson",
    birthday: "1996/06/24",
    generation: 1,
    bootcamp: "Python",
    scores: [
      {
        module: "Frontend",
        score: 98,
      },
      {
        module: "Backend",
        score: 100,
      },
      {
        module: "Cloud",
        score: 70,
      },
    ],
  },
  {
    name: "Ren",
    lastName: "López",
    birthday: "1996/06/24",
    generation: 9,
    bootcamp: "JavaScript",
    scores: [
      {
        module: "Frontend",
        score: 80,
      },
      {
        module: "Backend",
        score: 90,
      },
      {
        module: "Cloud",
        score: 100,
      },
    ],
  },
  {
    name: "odon",
    lastName: "Lozada",
    birthday: "1996/06/24",
    generation: 9,
    bootcamp: "Java",
    scores: [
      {
        module: "Frontend",
        score: 80,
      },
      {
        module: "Backend",
        score: 90,
      },
      {
        module: "Cloud",
        score: 100,
      },
    ],
  },
];
// console.log(koders)

/*
  Ejercicio en clase:
  Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:
  Prototipo de tipo koder
  Obtener la edad a partir de la fecha de nacimiento
  Obtener promedio de sus scores
  ---
  Colección de Koder que pertenezcan a JavaScript
  Colección de Koder que pertenezcan a Python
  {
    kavascrip: [
      koder1
    ],
    python: [
      
    ]
  }
  */

// function Koder ({name, lastName, birthday, generation, bootcamp, scores}) {
//     this.name = name;
//     this.lastName = lastName;
//     this.birthday = birthday;
//     this.generation = generation;
//     this.bootcamp = bootcamp;
//     this.scores = scores;
//     this.average = average(this.scores);
//     this.age = calculationAge(this.birthday);
// }

// function calculationAge(birthday) {
// let stringBirthday = birthday.split('/');
// let today = new Date().getFullYear();
// return today - Number(stringBirthday[0]);
// }

// function average(scores){
//   let finalAverage = 0;
//   scores.forEach((score)=>{
//     finalAverage += score.score / scores.length;
//   })
//   return finalAverage;
// }

// const genarateKoder = (koders) => {
// let array = [];
// koders.forEach(koder => {
//     let objKoder = new Koder(koder);
//     array.push(objKoder);
// });
// return array;
// }

// const bootcampFilter = (koders) =>{
//   let array = genarateKoder(koders);
//   let properties = array.reduce((contador,koder)=>{
//     if(!(koder["bootcamp"] in contador)) {
//       contador[koder["bootcamp"]] = array.filter((koderFilter)=> koderFilter["bootcamp"] === koder["bootcamp"]);
//     }
//     return contador;
//   },{})
//   return properties;
// }

// console.log(bootcampFilter(koders));

class Koder {
  constructor({ name, lastName, birthday, generation, bootcamp, scores, promedio, age}) {
    this.name = name;
    this.lastName = lastName;
    this.birthday = birthday;
    this.generation = generation;
    this.bootcamp = bootcamp;
    this.scores = scores;
    this.average = promedio;
    this.age = age;
  }
}

function calculationAge(birthday) {
  let stringBirthday = birthday.split("/");
  let today = new Date().getFullYear();
  return today - Number(stringBirthday[0]);
}

function average(scores) {
  let finalAverage = 0;
  scores.forEach((score) => {
    finalAverage += score.score / scores.length;
  });
  return finalAverage;
}

const genarateKoder = (koders) => {
  let array = [];
  koders.forEach((koder) => {
    let promedio = average(koder.scores);
    let age = calculationAge(koder.birthday);
    let objKoder = new Koder({
      ...koder,
      promedio,
      age
    });
    array.push(objKoder);
  });
  return array;
};

const bootcampFilter = (koders) => {
  let array = genarateKoder(koders);
  let properties = array.reduce((contador, koder) => {
    if (!(koder["bootcamp"] in contador)) {
      contador[koder["bootcamp"]] = array.filter(
        (koderFilter) => koderFilter["bootcamp"] === koder["bootcamp"]
      );
    }
    return contador;
  }, {});
  return properties;
};

console.log(bootcampFilter(koders));