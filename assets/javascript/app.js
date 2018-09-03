var time = 30
var intervalId
var correct = 0
var incorrect = 0

var timeHold = $("#timeLeft")
var start = $("#startBtn")
var triviaHold = $("#triviaArea")
var textHold = $("#textArea")
var submit = $("#submitBtn")
var endHold = $("#endArea")
var startHold = $("#startArea")

var triviaArray = [{
    question: "1. How much money did Scott Tennorman owe Cartman?",
    userChoices: ["$16.12", "$14.35", "$21.95", "$9.47"],
    id: ["1", "1", "1", "1"]
},
{
    question: "2. How did the child wunderkind Eric Cartman gain his psychic abilities?",
    userChoices: ["Kyle hit him on the head", "He crashed his bicycle", "He tried to fly off his roof", "He electrocuted himself"],
    id: ["2", "2", "2", "2"]
},
{
    question: "3. Cartman is the head of who's fan club?",
    userChoices: ["Ron Howard", "Mel Gibson", "Tom Brady", "Justin Timberlake"],
    id: ["3", "3", "3", "3"]
},
{
    question: "4. What is Cartman's cat's name?",
    userChoices: ["Mr. Magic", "Kitty", "Fluffy", "Mr. Kitty"],
    id: ["4", "4", "4", "4"]
},
{
    question: "5. Cartman drinks the ashes of, and becomes possessed by, who?",
    userChoices: ["Kenny", "Michael Jackson", "Stan", "His Grandfather"],
    id: ["5", "5", "5", "5"]
},
{
    question: "6. Who beats up Cartman for making fun of breast cancer?",
    userChoices: ["Butters", "Kyle", "Wendy", "Token"],
    id: ["6", "6", "6", "6"]
},
{
    question: "7. What is the name of Cartman's short-lived theme park?",
    userChoices: ["CartmanWorld", "CartmanLand", "Super FunLand", "Super FunWorld"],
    id: ["7", "7", "7", "7"]
},
{
    question: "8. Cartman's uncle is in jail. Who is his cellmate?",
    userChoices: ["Charles Manson", "Mark David Chapman", "OJ Simpson", "Aaron Hernandez"],
    id: ["8", "8", "8", "8"]
},
{
    question: "9. Cartman can't focus if the lyrics to which song are started, but not finished?",
    userChoices: ["Africa", "Heat of the Moment", "Come Sail Away", "Rock You Like a Hurricane"],
    id: ["9", "9", "9", "9"]
},
{
    question: "10. What is Cartman's least favorite show?",
    userChoices: ["Friends", "The Simpsons", "The Big Bang Theory", "Family Guy"],
    id: ["10", "10", "10", "10"]
},
]

var correctAns = ["$16.12", "He tried to fly off his roof", "Mel Gibson", "Mr. Kitty", "Kenny", "Wendy", "CartmanLand", "Charles Manson", "Come Sail Away", "Family Guy",]
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
    textHold.remove()
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
    
}

function display() {
    for (var i = 0; i < len; i++) {
        triviaHold.append("<div>" + triviaArray[i].question + "</div>")
        for (var j = 0; j < triviaArray[i].userChoices.length; j++) {
            triviaHold.append("<button type ='submit' class ='" + triviaArray[i].id[j] + "' value ='" + triviaArray[i].userChoices[j] + "'>"
                + triviaArray[i].userChoices[j] + "</button>")
            $("button[value='" + triviaArray[i].userChoices[j] + "']").on("click", function () {
                userPicks.push(this.value)
                if (correctAns.includes(this.value) === true) {
                    correct++
                    console.log(correct)
                }
                else {
                    incorrect++
                }
            })
        }
    }
}

function score() {
    if (correctAns.length > userPicks.length) {
        alert("You didn't finish!")
        endHold.html("<button id ='refreshBtn'>Refresh</button>")
        $("#refreshBtn").on("click", function(){
            window.location.reload()
        })
    }
    else {
    endHold.append("<button id ='refreshBtn'>Refresh</button>")
    $("#refreshBtn").on("click", function(){
        window.location.reload()
    })
        if(correct / correctAns.length > .6){
            triviaHold.html("You got " + correct + " out of " + correctAns.length + "! Killer!")
            startHold.append("<img src='assets/images/Cartman.jpg'>")
        }
        else {
            triviaHold.html("You got " + correct + " out of " + correctAns.length + "! Weak!")  
            startHold.append("<img src='assets/images/Eric_Cartman_Crying.png'>")
        }
    }
  }