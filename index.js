import q from "./modules/dataManager.js"
import comp from "./component.js"

const el = document.querySelector("#question");

// to use the data that is returned in the Promise, I have to 
// put a function in the .then()
const render = (question) => {
    el.innerHTML += comp.questionComponent(question)
    question.answer_values.forEach(answer => {
        const slicedAnswer = answer.slice(13, 15)
        el.innerHTML += comp.answer(slicedAnswer)
    })
}


const question = () => {
    
    const renderIt = q.getQuestion().then(render);
    renderIt;
}

question()