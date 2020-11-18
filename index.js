import q from "./modules/dataManager.js"
import comp from "./component.js"

const el = document.querySelector("#question");
const render = (question) => {
    el.innerHTML += comp.questionComponent(question)
    question.answer_values.forEach(answer => {
        el.innerHTML += comp.answer(answer)
    })
}


const question = () => {
    
    const renderIt = q.getQuestion().then(render);
    renderIt;
}

question()