var time = 10
var intervalId
var correct = 0 
var incorrect = 0

var timeHold = $("#timeLeft")
var start = $("#startBtn")
var showHold = $("#testArea")
var answerHold = $("#answers")


var triviaArray = {
    questions: ["1. Who am I?","2. Where am I?","3. How am I?","4. What day is it?","5. What's my favorite color?"],
    a: ["Mike","Hell","Ok","Tuesday","Blue"],
    b: ["Steve","The Bathroom","Swell","Monday","Purple"],
    c: ["Paul","Mars","Awful","Friday","Green"]
}
var questLen = triviaArray.questions.length
var ansLen = triviaArray.a.length

var answers = ["Mike","The Bathroom","Swell","Friday","Green"]
var userAns = []

timeHold.html("You have " + time + " to finish")

start.on('click', game)

function game(){
    run()
    show()
}

function run(){
    start.remove()
    clearInterval(intervalId)
    intervalId = setInterval(timer, 1000)
}
function timer(){
    time--
    timeHold.html("You have " + time + " seconds left")
    if(time <= 0){
        end()
    }
}
function end(){
    clearInterval(intervalId)
}

function show(){
    for(var i = 0; i < questLen; i++){
        showHold.append("<div>" + triviaArray.questions[i] + "</div")
                .append("<button id='aBtn'>" + triviaArray.a[i] + "</button>")
                .append("<button id='bBtn'>" + triviaArray.b[i] + "</button>")
                .append("<button id='cBtn'>" + triviaArray.c[i] + "</button>")
    }
    for (var j = 0; j < ansLen; j++)
    $("#aBtn").on('click', function(){
        userAns.push(triviaArray.a[j])
        console.log(userAns)
        $("#bBtn").remove()
        $("#cBtn").remove()
        $("#aBtn").css("background-color", "green")
    })
    $("#bBtn").on('click', function(){
        userAns.push(triviaArray.b[j])
        console.log(userAns)
        $("#aBtn").remove()
        $("#cBtn").remove()
        $("#bBtn").css("background-color", "green")
    })
    $("#cBtn").on('click', function(){
        userAns.push(triviaArray.c[j])
        console.log(userAns)
        $("#aBtn").remove()
        $("#bBtn").remove()
        $("#cBtn").css("background-color", "green")
    })
}
