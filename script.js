var welcomePage = document.querySelector("#welcomePage");
var questionPage = document.querySelector("#questionPage");
var scorePage = document.querySelector("#scorePage");
var highScorePage = document.querySelector("#highScorePage");
var startQuizButton = document.querySelector(".startQuiz");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");
var goBackButton = document.querySelector("#goBack");
var viewHighScoresButton = document.querySelector("#viewHighScores");
var highScoresList = document.getElementById("highScoresList");
var highScoreListItems = highScoresList.childNodes;
var submitInitials = document.getElementById("submitButton");
var clearHighScoresButton = document.querySelector("#clearHighScores");
var startedQuiz = false;
var score = 0;

startQuizButton.addEventListener("click", startQuiz);
viewHighScoresButton.addEventListener("click", viewHighScores);
goBackButton.addEventListener("click", goBack);
submitInitials.addEventListener("click", addInitials);
clearHighScoresButton.addEventListener("click", clearHighScores);

questionPage.style.display = "none";
scorePage.style.display = "none";
highScorePage.style.display = "none";


// STARTS THE QUIZ - TIMER STARTS AND QUESTIONS APPEAR
function startQuiz(){
    timer();
    startedQuiz = true;
    questionPage.style.display = "block";
    welcomePage.style.display = "none";
    scorePage.style.display = "none";
    highScorePage.style.display = "none";
}

// VIEW THE HIGH SCORE LIST
function viewHighScores(){
    questionPage.style.display = "none";
    welcomePage.style.display = "none";
    scorePage.style.display = "none";
    highScorePage.style.display = "block";
}


// GO BACK AND RETURN TO PREVIOUS PAGE
function goBack(){

    if(startedQuiz == true) {
        questionPage.style.display = "block";
        welcomePage.style.display = "none";
    } else {
        questionPage.style.display = "none";
        welcomePage.style.display = "block";
    }
    scorePage.style.display = "none";
    highScorePage.style.display = "none";
}

// CLEAR SCORES FROM THE HIGH SCORE LIST
function clearHighScores(){
    var highScoreListItems = highScoresList.childNodes;
    var i = 0;
    while (i < highScoreListItems.length){
        highScoreListItems[i].innerHTML = "";
        i+=1;
    }
}


// START TIMER AN DISPLAY QUESTIONS PAGE
function timer() {
    //75 seconds
    var counter = 10;

    
    var timerCountdown = setInterval(function(){
      if (counter >= 0) {
        document.querySelector("#time").innerHTML = counter;
        counter -= 1;
      } else {
        clearInterval(timerCountdown);
        questionPage.style.display = "none";
        welcomePage.style.display = "none";
        scorePage.style.display = "block";
        highScorePage.style.display = "none";
        startedQuiz = false;
        score = counter + 1;
        var finalScoreText = "Your final score is " + score + ".";
        var finalScoreIs = document.querySelector("#finalScoreIs");
        finalScoreIs.innerText = finalScoreText;

      }
    }, 1000);
}

// ADD NEW INITIALS AND SCORE TO HIGH SCORE LIST
function addInitials() {
    var initial = document.getElementById("input_id").value;
    var newScore = score;
    var text = initial + " - " + newScore;
    
    var textNode = document.createTextNode(text);
    var node = document.createElement("li");

    node.appendChild(textNode);

    highScoresList.appendChild(node);

    startedQuiz = false;
    questionPage.style.display = "none";
    welcomePage.style.display = "block";
    scorePage.style.display = "none";
    highScorePage.style.display = "none";
}

// var questions = {
//     "String values must be enclosed within _________ when being assigned to variables.":["commas", "curly brackets", "quotes", "parenthesis", 1],
//     "Most lines of Javascript code must end with what character?":[".", ":",";",",",2],
//     "A very useful tool used during development and debugging for printing content to the debugger is":[Javascript
//         Terminal/bash
//         For Loops
//         Console.log
//         ]

// }