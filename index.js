import q from "./modules/dataManager.js"
import comp from "./component.js"

const el = document.querySelector("#question");
const render = (question) => {
    el.innerHTML += comp.questionComponent(question)
}

const question = () => {
    
    const a = q.getQuestion().then(render);
    a;
}

question()