var h1 = document.querySelector("h1");
var mainText = document.querySelector("#mainText");
var timerText = document.getElementById("timerText");
var welcome = "Try to answer the following code-related questions within the time limit. <br> Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
var addHighScore = document.querySelector("#addHighScore");
var score = 0;
var finalScore = score;
var right = 0;
var wrong = 0;

var counter = 10;
  // Start Quiz
var startQuizButton = document.querySelector("#buttonStartQuiz");
startQuizButton.addEventListener("click", startQuiz);
addHighScore.style.display = "none";


function startQuiz() {
    counter = 10;
    startQuizButton.style.display = "none";
    highScoreList.style.display = "none";
    
    var timerCountdown = setInterval(function(){
      if (counter >= 0) {
        timerText.innerHTML = counter;
        counter -= 1;
      } else {
        clearInterval(timerCountdown);
        h1.innerText = "All Done!";
        mainText.innerText = "Your final score is " + finalScore + ".";
        addHighScore.style.display = "block";
      }
    }, 1000);
}


  // View High Score
var highScoreButton = document.querySelector("#highScores");
highScoreButton.addEventListener("click", viewScores);
var open = true;

  // Start Quiz
var clearHighScores = document.querySelector("#buttonClearScores");
var highScoreList = document.querySelector("#highScoreList");
clearHighScores.style.display = "none";
clearHighScores.addEventListener("click", clearScores);
highScoreList.style.display = "none";

function viewScores(){
    if(open == true) {
      open = false;
      addHighScore.style.display = "nopne";
      highScoreButton.innerText = "Go Back";
      h1.innerText = "High Scores";
      mainText.style.display = "none";
      startQuizButton.style.display = "none";
      clearHighScores.style.display = "block";
      highScoreList.style.display = "block";
    } else {
      open = true;
      highScoreButton.innerText = "View High Scores";
      h1.innerText = "Coding Quiz Challenge";
      mainText.style.display = "block";
      startQuizButton.style.display = "block";
      clearHighScores.style.display = "none";
      highScoreList.style.display = "none";
    }
}

var ol = document.querySelectorAll("ol li");

function clearScores(){
  var i = 0;
  while(i<4) {
    ol[i].innerText = (i+1) + ". ";
    i+=1;
  }
}


// Add High Score

// var initial = document.getElementById("input_id").value;




// QUESTIONS/OPTIONS/ANSWER
var questions = {
    "String values must be enclosed within _________ when being assigned to variables.":["commas", "curly brackets", "quotes", "parenthesis", 1],
    "Most lines of Javascript code must end with what character?":[".", ":",";",",",2],

}
/*
High Scores
*/
