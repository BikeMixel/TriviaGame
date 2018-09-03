var time = 45
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

var correctAns = ["$16.12", "He tried to fly off his roof", "Mel Gibson", "Mr. Kitty", "Kenny", "Wendy", "CartmanLand", "Charles Manson", "Come Sail Away", "Family Guy"]
var userPicks = []

var ansLen = correctAns.length
var triviaLen = triviaArray.length

timeHold.html("You have " + time + " seconds to finish")

start.on('click', game)
submit.on('click', final)

function game() {
    run()
    display()
}
function final() {
    timeHold.remove()
    $("#submitBtn").remove()
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
    endHold.html("<button id='submitBtn'>I'm done!</button>")
    $("#submitBtn").on("click", final)
    for (var i = 0; i < triviaLen; i++) {
        triviaHold.append("<div id='divQuest'>" + triviaArray[i].question + "</div>")
        for (var j = 0; j < triviaArray[i].userChoices.length; j++) {
            triviaHold.append("<button type ='submit' id ='" + triviaArray[i].id[j] + "' value ='" + triviaArray[i].userChoices[j] + "'>"
                + triviaArray[i].userChoices[j] + "</button>")
            $("button[value='" + triviaArray[i].userChoices[j] + "']").on("click", function () {
                userPicks.push(this.value)
                $(this).hide(this.id)
                $(this).css("background-color", "green")
                if (correctAns.includes(this.value) === true) {
                    correct++
                }
                else {
                    incorrect++
                    $(this).css("background-color", "red")
                }
            })
        }
    }
}

function score() {
    if (ansLen > userPicks.length) {
        alert("You didn't finish!")
        triviaHold.remove()
        timeHold.html("Way to go! Try again.")
        endHold.html("<button id ='refreshBtn'>Retry</button>")
        $("#refreshBtn").on("click", refresh)
        startHold.append("<img src='assets/images/Cartman_angry.jpg'>")
    }
    else {
        endHold.html("<button id ='refreshBtn'>Retry</button>")
        $("#refreshBtn").on("click", refresh)
        if (correct / ansLen > .6) {
            triviaHold.html("You got " + correct + " out of " + ansLen + "! Killer!")
            startHold.append("<img src='assets/images/Cartman_happy.jpg'>")
        }
        else {
            triviaHold.html("You got " + correct + " out of " + ansLen + "! Weak!")
            startHold.append("<img src='assets/images/Crying_Cartman.jpg'>")
        }
    }
}
function refresh() {
    window.location.reload()
}