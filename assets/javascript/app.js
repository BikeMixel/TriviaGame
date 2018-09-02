var time = 30
var intervalId
var correct = 0
var incorrect = 0

var timeHold = $("#timeLeft")
var start = $("#startBtn")
var gameHold = $("#testArea")
var answerHold = $("#answers")
var submit = $("#submitBtn")

var triviaArray = [{
    question: "1. What is my name?",
    userChoices: ["Mike", "Steve", "Paul"],
},
{
    question: "2. Where am I?",
    userChoices: ["Hell", "Wood Street", "The Bathroom"],
},
{
    question: "3. How am I?",
    userChoices: ["Ok", "Swell", "Awful"],
},
{
    question: "4. Who's the best?",
    userChoices: ["Me", "You", "Fairbanks"],
},
{
    question: "5. What's on TV?",
    userChoices: ["Archer", "Porn", "Baseball"],
},
{
    question: "6. What's a PIG Launcher?",
    userChoices: ["Pipe Inspection Gauge", "A device to launch pigs", "Fun"]
}
]

var correctAns = ["Mike", "Wood Street", "Swell", "Fairbanks", "Archer", "Pipe Inspection Gauge"]
var userPicks = []

var len = triviaArray.length

timeHold.html("You have " + time + " seconds to finish")

submit.on('click', final)
start.on('click', game)

function game() {
    run()
    display()
}
function final() {
    timeHold.remove()
    submit.remove()
    end()
}

function run() {
    start.remove()
    clearInterval(intervalId)
    intervalId = setInterval(timer, 1000)
}
function timer() {
    time--
    timeHold.html("You have " + time + " seconds left")
    if (time <= 0) {
        end()
    }
}
function end() {
    clearInterval(intervalId)
    score()
    time = 0
}

function display() {
    for (var i = 0; i < len; i++) {
        gameHold.append("<div>" + triviaArray[i].question + "</div>")
        for (var j = 0; j < triviaArray[i].userChoices.length; j++) {
            gameHold.append("<button type ='submit' value ='" + triviaArray[i].userChoices[j] + "'>"
                + triviaArray[i].userChoices[j] + "</button>")
            $("button[value='" + triviaArray[i].userChoices[j] + "']").on("click", function () {
                console.log(userPicks)
                userPicks.push(this.value)
                if (correctAns.includes(this.value) === true) {
                    correct++
                    console.log("Correct " + correct)
                }
                else {
                    incorrect++
                    console.log("Incorrect " + incorrect)
                }
            })
        }
    }
}

function score() {
    if (correctAns.length > userPicks.length) {
        alert("You didn't finish!")
    }
    gameHold.html("You got " + correct + " out of " + correctAns.length + "!")
}

