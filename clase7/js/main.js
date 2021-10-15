let arrayPersons = [
    {
        name: "Phibee", age: 25, voted: true, gender: "mujer"
    },
    {
        name: "Katrinka", age: 26, voted: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, voted: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, voted: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, voted: false, gender: "hombre"
    },
    {
        name: "Eugene", age: 38, voted: true, gender: "hombre"
    },
    {
        name: "Big Bob", age: 29, voted: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, voted: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, voted: false, gender: "mujer"
    },
    {
        name: "Harold", age: 45, voted: true, gender: "hombre"
    },
    {
        name: "Gerald", age: 22, voted: false, gender: "hombre"
    },
    {
        name: "Arnold", age: 35, voted: true, gender: "hombre"
    },
    {
        name: "Gelga", age: 28, voted: true, gender: "mujer"
    },
    {
        name: "Lila", age: 18, voted: true, gender: "mujer"
    },
    {
        name: "Rhonda", age: 18, voted: true, gender: "mujer"
    },
]

/*
Usar reduce para obtener la siguiente informacion
- Un array con aquellas personas que se vacunaron ---check
- la edad promedio de todos los vacunados ---check
- un array con aquellas personas que se vacunaron y que son menores a 30 años ---check
- la edad promedio de los no vacunados ---check
- el porcentaje de vacunados vs no vacunados
- el procentaje de mujeres que se vacunaron ---check
- el porcentaje de los hombres que vacunarion ---cehck
*/  

const allPersonsByCondition = (propiedad ,condition) => {
    const onlyPersonsVacunadas = arrayPersons.reduce((count, person) => {
        if(person[propiedad] === condition) count = [...count,person];
        return count;
    },[]);
    return onlyPersonsVacunadas;
}

const averagePersonAgeVaccine = (propiedad,condition) => {
    let vacunados = allPersonsByCondition(propiedad,condition);
    let promedio = vacunados.reduce((contador, person) => {
           contador = contador + person["age"] / vacunados.length ;
        return contador;
    }, 0)
    return `promedio de edad de las personas ${condition === false? "No vacunadas": "vacunadas"}  ${Math.trunc(promedio)}`;
}

const vaccinePersonsLessAge = (rank) => {
    let vacunados = allPersonsByCondition(true);
    let lessAge = vacunados.reduce((contador, person) => {
        if(person.age > rank) contador = [...contador, person];
        return contador;
    }, [])
    return lessAge;
}

const percentage = (arrayPersons, propiedad, condition) =>{
    let vaccine = allPersonsByCondition(propiedad, condition);
    let noVaccine = allPersonsByCondition(propiedad, !condition);
    return `Vacunados ${(vaccine.length/arrayPersons.length)*100} VS ${(noVaccine.length/arrayPersons.length)*100} No Vacunados`
}

console.log(allPersonsByCondition("voted",true));
console.log(averagePersonAgeVaccine("voted", true));
console.log(vaccinePersonsLessAge(30));
console.log(averagePersonAgeVaccine("voted", false));
console.log(percentage(arrayPersons, "voted", true))
console.log(allPersonsByCondition("gender","mujer"));
console.log(allPersonsByCondition("gender","hombre"));


