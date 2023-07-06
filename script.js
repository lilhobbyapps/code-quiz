var h1 = document.querySelector("h1");
var mainText = document.querySelector("#mainText");
var timerText = document.getElementById("timerText");
var timer = 100;

  // Start Quiz
var startQuizButton = document.querySelector("#buttonStartQuiz");
startQuizButton.addEventListener("click", startQuiz);

function startQuiz() {
    timer = 100;
    timerText.innerText = timer;
    startTimer;
}

var startTimer = setInterval(function(){
        
    if(timer > 0) {
        timer -= 1;
        timerText.innerText = timer;
    } else {
        timer = 0;
        clearInterval();
    }

}, 1000);


// QUESTIONS/OPTIONS/ANSWER
var questions = {
    "String values must be enclosed within _________ when being assigned to variables.":["commas", "curly brackets", "quotes", "parenthesis", 1],
    "Most lines of Javascript code must end with what character?":[".", ":",";",",",2],

}
/*
High Scores
*/
