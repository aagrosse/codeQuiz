$(document).ready(function(){

var timeremaining = 75
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
});



function loadQandA() {
    choices = questions[indexQandA].choices;
    var question = questions[indexQandA].title;
    $('.question').html(question);
    for (var i = 0; i < 4; i++) {
        var answer = questions[indexQandA].choices[i];
        $('.answers').append('<h4 class= "btn btn-info" id=' + i + '>' + answer + '</h4><br>');
    }
}


});