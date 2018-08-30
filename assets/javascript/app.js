var timer = 10
var intervalId;
var correct = 0 
var incorrect = 0

var triviaArray = 
    {
        question: ["what is my name", "what is my favorite color", "wanna fight about it"],
        a: ["mike", "green", "yes"],
        b: ["steve", "blue", "no"],
        c: ["paul", "yellow", "maybe"]
    }

var timeHold = $("#timeLeft")
var incorrectHold = $("#incorrectNum")
incorrectHold.html("You have " + incorrect + " incorrect answers")
var correctHold = $("#correctNum")
correctHold.html("You have " + correct + " correct answers")

var btnA = $("#btnA")
var btnB = $("#btnB")
var btnC = $("#btnC")

var questionZone = $("#questionArea")
function start() {
    show();
    run();
}
function show () {
    questionZone.html(triviaArray.question[0])
    btnA.html(triviaArray.a[0])
    btnB.html(triviaArray.b[0])
    btnC.html(triviaArray.c[0])
}
function run() {
    intervalId = setInterval(time, 1000)
}
function time() {
    timer--
    $("#timeLeft").html("Time Left: " + timer + " seconds")
    if (timer <= 0) {
        endTime();
    }
}
function endTime() {
    clearInterval(intervalId)
}
$("#startbtn").on("click", start)