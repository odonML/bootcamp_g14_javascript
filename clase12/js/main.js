function cleanTable(){
    const table = document.querySelector("table");
    const tbody = document.querySelector("tbody");
    table.removeChild(tbody);
}

function removePerson(){
    deleleUser(this.dataset.key);
}

function editPerson(){
    const id = this.dataset.key;
    getUserById(id);
}

function printInput(dataPerson, id){
    let inputName = document.querySelector("input[name='name']");
    let inputLastName = document.querySelector("input[name='lastName']");
    const btnSave = document.querySelector("#btn-save");
    inputName.value = dataPerson.name;
    inputLastName.value = dataPerson.lastName;
    btnSave.dataset.id = id;
}

function renderTable(persons){
    let listPersons = [];
    for(let key in persons){
        let obj = {
            id: key,
            ...persons[key],
        }
        listPersons.push(obj);
    }
    const table = document.querySelector("table");
    const tbody = document.createElement("tbody");
    listPersons.forEach(person => {
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdLastName = document.createElement("td");
        let btnRenove = document.createElement("button");
        let btnEdit = document.createElement("button");

        tdName.textContent = person["name"];
        tdLastName.textContent = person["lastName"];

        btnRenove.textContent = "Eliminar";
        btnRenove.dataset.key = person["id"];
        btnRenove.addEventListener("click", removePerson);

        btnEdit.textContent = "Editar";
        btnEdit.dataset.key = person["id"];
        btnEdit.addEventListener("click", editPerson);

        tr.appendChild(tdName);
        tr.appendChild(tdLastName);
        tr.appendChild(btnEdit)
        tr.appendChild(btnRenove);
        tbody.appendChild(tr);
    })
    table.appendChild(tbody);
}

function addPerson(e){
    let inputName = document.querySelector("input[name='name']");
    let inputLastName = document.querySelector("input[name='lastName']");
    let name = inputName.value;
    let lastName = inputLastName.value;
    if(name !== "" && lastName !==""){
        let id =this.dataset.id
        if(id){ 
            console.log("si hay id========")
            updateUser(id, {name, lastName});
        }
        else{
            console.log("no hay id")
            postUser({name, lastName});
        }
        inputName.value = "";
        inputLastName.value ="";
    }
}
function getUserById(userId){
    const xhr = new XMLHttpRequest();
    const URL = `https://js-14va-default-rtdb.firebaseio.com/odonml/${userId}/.json`;
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          printInput(response, userId);
      } else {
        console.log(xhr.readyState);
      }
    });
    xhr.open("GET", URL, true);
    xhr.send();
  };

function getUsers(up){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            renderTable(response);
        }
    })
    const URL = "https://js-14va-default-rtdb.firebaseio.com/odonml/.json";
    xhr.open("GET", URL, true);
    xhr.send();
}


function postUser({name, lastName}){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            cleanTable();
            getUsers();
        }
    });
    const URL = "https://js-14va-default-rtdb.firebaseio.com/odonml/.json";
    xhr.open("POST", URL, true);
    xhr.send(JSON.stringify({ name, lastName }));
};

function deleleUser(userId){
    const xhr = new XMLHttpRequest();
    const URL = `https://js-14va-default-rtdb.firebaseio.com/odonml/${userId}/.json`;
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
          cleanTable();
          getUsers();
      } else {
        console.log(xhr.readyState);
      }
    });
    xhr.open("DELETE", URL, true);
    xhr.send();
  };


  function updateUser(userId, data){
    const xhr = new XMLHttpRequest();
    const URL = `https://js-14va-default-rtdb.firebaseio.com/odonml/${userId}/.json`;
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.status);
          cleanTable();
            getUsers();
      } else {
        console.log(xhr.readyState);
      }
    });
    xhr.open("PUT", URL, true);
    xhr.send(JSON.stringify(data));
  };

const btnSave = document.querySelector("#btn-save");
btnSave.addEventListener("click", addPerson)


getUsers();
