const mentorsArray = [
  {
    name: "Ivan Diaz",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 8,
      },
      {
        signature: "ReactJS",
        score: 8,
      },
    ],
  },
  {
    name: "Alan Medina",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 7,
      },
      {
        signature: "JS",
        score: 10,
      },
      {
        signature: "ReactJS",
        score: 10,
      },
    ],
  },
  {
    name: "Elvira Camarillo",
    scores: [
      {
        signature: "HTML",
        score: 9,
      },
      {
        signature: "CSS",
        score: 9,
      },
      {
        signature: "JS",
        score: 10,
      },
      {
        signature: "ReactJS",
        score: 9,
      },
    ],
  },
  {
    name: "Alejandra Paez",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 9,
      },
      {
        signature: "ReactJS",
        score: 10,
      },
    ],
  },
  {
    name: "Alejandra Paez",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 9,
      },
      {
        signature: "ReactJS",
        score: 10,
      },
    ],
  },
];

const hfields = {
  id: "ID",
  name: "Nombre",
  html: "HTML",
  css: "CSS",
  js: "JS",
  react: "React",
  promedio: "Promedio",
  action: "Accion",
};



function getScoreAndAverage(scores) {
  let promedio = 0;
  let scoresAndAverage = scores.reduce((acu, score) => {
    promedio += score["score"] / scores.length;
    acu[score["signature"]] = score["score"];
    return acu;
  }, {});
  scoresAndAverage["promedio"] = promedio;
  return scoresAndAverage;
}


function fieldsMentor() {
  let nameMentor = mentorsArray.reduce((acumulador, mentor, index) => {
      let exist = acumulador.some(item => item.name == mentor.name);
      if(!exist){
          let scores = getScoreAndAverage(mentor.scores);
          acumulador.push({
            id: index + 1,
            name: mentor["name"],
            ...scores,
          });
      }
    return acumulador;
  }, []);
  return nameMentor;
}

console.log(fieldsMentor());

function buttons(){
    const buttons = document.querySelectorAll(".btn-remove");
    buttons.forEach(btn => btn.addEventListener("click", remove))
}

function createTable(removeArray = null){
    let fieldsData= fieldsMentor();
    if(removeArray !== null) fieldsData = removeArray;

    const table = document.createElement("table");
    table.id = "mentorsTable";
    const thead = document.createElement("thead");
    const trh = document.createElement("tr")
    const tbody = document.createElement("tbody");
    const frag = document.createDocumentFragment();
    for(const propertie in hfields){
        let th = document.createElement("th");
        th.textContent = hfields[propertie];
        trh.appendChild(th);
    }
    thead.appendChild(trh);
    frag.appendChild(thead);
    fieldsData.forEach((data) => {
        let tr = document.createElement("tr");
        let button = document.createElement("button");
        button.textContent = "Eliminar";
        button.classList.add("btn-remove");
        button.dataset.name = data.name ;
        for(const propertie in data){
            let field = document.createElement("td");
            field.textContent = data[propertie];
            tr.appendChild(field);
        }
        tr.appendChild(button);
        tbody.appendChild(tr);
    });
    frag.appendChild(tbody);
    table.appendChild(frag);
    document.body.appendChild(table);
    buttons();
}

createTable();

let arrayMentor = fieldsMentor();
function remove(e){
    const name = this.dataset.name;
    let position = arrayMentor.findIndex(e => e.name == name);
    arrayMentor.splice(position, 1);
    let child = document.querySelector("#mentorsTable");
    document.body.removeChild(child);
    createTable(arrayMentor);
}


const input = document.getElementById("inputPrueba");
console.log(input)




