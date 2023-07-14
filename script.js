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

var question = document.getElementById("question");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");

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
    populateQuestions();
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

var counter = 75;
// START TIMER AN DISPLAY QUESTIONS PAGE
function timer() {
    //75 seconds

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


// QUESTIONS ANSWERS & CORRECT ANSWERS
var questions = [
    "String values must be enclosed within _________ when being assigned to variables.",
    "Most lines of Javascript code must end with what character?",
    "A very useful tool used during development and debugging for printing content to the debugger is",
];

// CORRECT ANSWERS ARE EQUAL TO LAST ITEM IN ARRAY. 
// LAST ITEM ARRAY IS THE NUMBER IN THE ARRAY WHICH IS CORRECT
var answers = [
    ["commas", "curly brackets", "quotes", "parenthesis", 1],
    [".",";", ":",",", 1],
    ["Javascript", "Terminal/bash", "For Loops", "Console.log", 2],
];

var correctAnswers = ["quotes", ";", "Console.log"];
var i = 0;
function populateQuestions(i){
        question.innerHTML = questions[this.i];
        button1.innerHTML = answers[this.i][0];
        button2.innerHTML = answers[this.i][1];
        button3.innerHTML = answers[this.i][2];
        button4.innerHTML = answers[this.i][3];

}

button1.addEventListener("click", correctOrNo1);
button2.addEventListener("click", correctOrNo2);
button3.addEventListener("click", correctOrNo3);
button4.addEventListener("click", correctOrNo4);
correct = false;

function correctOrNo1() {
    while(i<5) {
        if (answers[0][0] == correctAnswers[0]) {
            alert("true!");
            correct = true;
            populateQuestions(i+=1);
        } else {
            alert("false.");
            counter -= 10;
            correct = false;
            populateQuestions(i+1);
        }
        i+=1;
    }

}

function correctOrNo2() {
    while(i<5) {
        if (answers[0][1] == correctAnswers[0]) {
            alert("true!");
            correct = true;
            populateQuestions(i+1);
        } else {
            alert("false.");
            counter -= 10;
            correct = false;
            populateQuestions(i+1);
        }
        i+=1;
    }

}

function correctOrNo3() {
    while(i<5) {
        if (answers[0][2] == correctAnswers[0]) {
            alert("true!");
            correct = true;
            populateQuestions(i+1);
        } else {
            alert("false.");
            counter -= 10;
            correct = false;
            populateQuestions(i+1);
        }
        i+=1;
    }

}

function correctOrNo4() {
    while(i<5) {
        if (answers[0][3] == correctAnswers[0]) {
            alert("true!");
            correct = true;
            populateQuestions(i+1);
        } else {
            alert("false.");
            counter -= 10;
            correct = false;
            populateQuestions(i+1);
        }
        i+=1;
    }

}