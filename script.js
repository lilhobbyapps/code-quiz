var h1 = document.querySelector("h1");
var mainText = document.querySelector("#mainText");
var timerText = document.getElementById("timerText");

var score = 0;
var finalScore = score;

var counter = 10;
  // Start Quiz
var startQuizButton = document.querySelector("#buttonStartQuiz");
startQuizButton.addEventListener("click", startQuiz);

function startQuiz() {
    counter = 10;
    startQuizButton.style.display = "none";
    
    
    var timerCountdown = setInterval(function(){
      if (counter >= 0) {
        timerText.innerHTML = counter;
        counter -= 1;
      } else {
        clearInterval(timerCountdown);
        startQuizButton.style.display = "block";
        h1.innerText = "All Done!";
        mainText.innerText = "Your final score is " + finalScore + ".";
      }
    }, 1000);
}


  // View High Score
var highScoreButton = document.querySelector("#highScores");
highScoreButton.addEventListener("click", viewScores);

function viewScores(){
    h1.innerText = "High Scores";
    mainText.style.display = "none";
    startQuizButton.style.display = "none";
}







// QUESTIONS/OPTIONS/ANSWER
var questions = {
    "String values must be enclosed within _________ when being assigned to variables.":["commas", "curly brackets", "quotes", "parenthesis", 1],
    "Most lines of Javascript code must end with what character?":[".", ":",";",",",2],

}
/*
High Scores
*/
