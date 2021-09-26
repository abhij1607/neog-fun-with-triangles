const quizForm = document.querySelector('.triangle-quiz');
const btnCheck = document.querySelector('#btn-check');
const outputDiv = document.querySelector('.output');

btnCheck.addEventListener('click',checkAnswers);


const answers = [ "90°",
"70°, 40°, 70°"]

function checkAnswers() {
    let formAnswers = new FormData(quizForm);
    let score = 0;
    let index = 0;
    for(let answer of formAnswers.values()) {
        if(answer === answers[index]) {
            score += 10;
        }
        index +=1;
    }
    showOutput("Your score is "+score);
}

function showError(error) {
    errorDiv.innerHTML = error;
}

function removeError(){
    errorDiv.innerHTML="";
}

function showOutput(msg){
    outputDiv.innerHTML = msg;
}

function clearOutput(){
    outputDiv.innerHTML = "";
}