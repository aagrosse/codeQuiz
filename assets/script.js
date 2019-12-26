$(document).ready(function(){

var indexQandA = 0;
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store _________",
      choices: ["numbers and strings", "other arrays", "booleans", "all-of-the-above"],
      answer: "all-of-the-above"
    },
    {
      title: "String values must be enclosed within _____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title: "A very useful tool used during debuggingfor printing content to the debugger is:",
      choices: ["JavaScript", "terminal/ bash", "for loops", "console.log"],
      answer: "console.log"
      },
]
var secondsLeft = (questions.length) * 15


$("#start").on("click", function () {
    $('#startText').remove();
    loadQandA();
    setTimer();
});


function setTimer(){
    $("#seconds-left").text(secondsLeft);
let countdown = setInterval(function(){
    secondsLeft--;
    $("#seconds-left").text(secondsLeft);
    if (secondsLeft <=0) {
        clearInterval(countdown);
    }
}, 1000);
}




function loadQandA() {
    choices = questions[indexQandA].choices;
    var question = questions[indexQandA].title;
    $('.question').html(question);
    for (var i = 0; i < 4; i++) {
        var displayAnswer = questions[indexQandA].choices[i];
        $('.answers').append('<h4 class= "button-answer" id=' + displayAnswer + '>' + displayAnswer + '</h4><br>');
    }
    
    $("h4").click(function () {
        var id = $(this).attr('id');
        var answer= questions[indexQandA].answer;
        if (id === answer) {
            answered = true;
            console.log("correct") 
            // $('.question').text("Correct Answer");
            indexQandA++;
            correctAnswer();
        
        } else {
            answered = true; 
            // $('.question').text("Wrong Answer");
            indexQandA++;
            incorrectAnswer();
        }
    });

    
function correctAnswer(){
    resetRound();
}

function incorrectAnswer(){
    resetRound();
    timerDown();
}

function timerStop(){
    clearInterval(secondsLeft);
    console.log(secondsLeft);
}

function timerDown(){
    secondsLeft = secondsLeft -= 9;
}

function resetRound(){
    $('.answers').empty();
    
    if (indexQandA < questions.length) {
        loadQandA();
    } else {
    timerStop();
    $('.question').remove();
    $('.show-onclick').append('<div class="form-group"> <label id= "initials" ></label><input class="form-control" placeholder="Enter initials"></div><button type="submit" class="btn btn-primary">Submit</button>');
    var score = secondsLeft
    $("#initials").append("Your score is: " + score);
        
        }    
}
}
var highScoreInput = document.querySelector(".form-control");
var highScoreForm = document.querySelector(".btn-primary");
var highScoreList = document.querySelector("#high-score");
var highScores = [];

init();

function renderHighScores() {
  // Clear highScoreList element
  highScoreList.innerHTML = "";
  

  // Render a new li for each highScore
  for (var i = 0; i < todos.length; i++) {
    var highScore = highScores[i];

    var li = document.createElement("li");
    li.textContent = highScore;
    li.setAttribute("data-index", i);
    highScoreList.appendChild(li);
  }
}

function init() {
  // Get stored highScores from localStorage
  var storedHighScoreString = localStorage.getItem("highScores");
  // Parsing the JSON string to an object
  var storedHighScores = JSON.parse(storedHighScoreString);

  // If highScores were retrieved from localStorage, update the highScores array to it
  if (storedHighScores !== null) {
    highScores = storedHighScores;
  }

  // Render highScores to the DOM
  renderHighScores();
}

function storeHighScores() {
  // Stringify and set "highScores" key in localStorage to highScores array
  var highScoresString = JSON.stringify(highScores);
  
  localStorage.setItem("highScores", highScoresString);
}

// When form is submitted...
highScoreForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var highScoreText = highScoreInput.value.trim();

  // Return from function early if submitted highScoreText is blank
  if (highScoreText === "") {
    return;
  }

  // Add new highScoreText to highScores array, clear the input
  highScores.push(highScoreText);
  highScoreInput.value = "";

  // Store updated highScores in localStorage, re-render the list
  storeHighScores();
  renderHighScores();
});


});




