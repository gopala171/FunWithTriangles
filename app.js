const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers");
const showScores = document.querySelector("#output-scores");

var answers = ["90°",
"one right angle",
"12, 16, 20",
"Equilateral triangle",
"100°",
"30°",
"no"];

function calculateScoreHandler(){
    var formAnswers = new FormData(quizForm);
    let score=0;
    let index = 0;
    for (let value of formAnswers.values()) {
        if (value===answers[index]) {
            score +=1;
        }
        index++;
    }
    showScores.innerText = "The score is " + score; 
}

submitBtn.addEventListener("click", calculateScoreHandler);