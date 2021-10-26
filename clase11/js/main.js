const frag = document.createDocumentFragment();

const add = document.createElement("button");
const contador = document.createElement("p");
const less = document.createElement("button");
let number = 0;

add.textContent = "Mas";
add.dataset.action = "add";
contador.textContent = number;
less.textContent = "Menos";
less.dataset.action = "less";

frag.appendChild(add);
frag.appendChild(contador);
frag.appendChild(less);

document.body.appendChild(frag);

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", actionBtn))

function actionBtn(){
    let action = this.dataset.action;
    if(action == "add"){
        number++;
        contador.textContent = number;
    }else{
        number--;
        contador.textContent = number;
    }
}
