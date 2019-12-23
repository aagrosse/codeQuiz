$(document).ready(function(){

var secondsLeft = 75
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
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above"
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
        var answer = questions[indexQandA].choices[i];
        $('.answers').append('<h4 class= "btn btn-info" id=' + answer + '>' + answer + '</h4><br>');
    }
    
    $("h4").click(function () {
        var id = $(this).attr('id');
        if (id === answer) {
            answered = true; 
            $('.question').text("Correct Answer");
            correctAnswer();
        } else {
            answered = true; 
            $('.question').text("Wrong Answer");
            incorrectAnswer();
        }
    });

    
function correctAnswer(){
    resetRound();
}

function incorrectAnswer(){
    resetRound();
    //take timer down by 10
}

function resetRound(){
    indexQandA++;
    $('.btn-info').remove();
    if (indexQandA < questions.length) {
        loadQandA();
    } else {
        //submit high score form and buttons here
    }
}




}


});




