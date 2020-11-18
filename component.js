
const questionComponent = question => {
    return `
    <div class="question">
    <h2>${question.question_display_text}</h2>
    </div>
    `
}


const answer = answer => {
    return `
    <p>${answer[2]}. ${answer[0]} ${answer[1]}</p>
    `
}

export default { questionComponent, answer };