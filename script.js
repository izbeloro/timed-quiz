var timerEl = document.getElementById("time-left");
var start = document.getElementById("start-button");
var timer;
var timerVal;
var isWin = false;
var content = document.getElementById("content-box");
var cont = document.getElementById("restart")
var question = document.getElementById("question");
var buttonsDiv = document.getElementById("buttons");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

function startTimer() {
    timer = setInterval(function () {
        timerVal--;
        timerEl.textContent = timerVal;
        if (timerVal >= 0) {
            if (isWin && timerVal > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (timerVal === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

function showRules() {
    start.classList.add("hide")
    content.classList.remove("hide")
}

function startGame() {
    content.classList.add("hide")
    isWin = false
    timerVal = 60
    startTimer()
    showQuestion()
}

function showQuestion() {
    question.classList.remove("hide")
    buttonsDiv.classList.remove("hide")
}

start.addEventListener("click", showRules)
cont.addEventListener("click", startGame)
cont.addEventListener("click", showQuestion)

var questions = [
    {
        title: "What does HTML stand for?",
        choices: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
        answer: "Hyper Text Markup Language",
    },
    {
        title: "What does CSS stand for?",
        choices: ["Common Style Sheet", "Colorful Style Sheet", "Computer Style Sheet", "Cascading Style Sheet"],
        answer: "Cascading Style Sheet",
    },
    {
        title: "What is JavaScript?",
        choices: ["the same as Java", "a programming language", "a type of coffee", "a font"],
        answer: "a programming language",
    }
]

function renderQuestion() {
    
}


// function renderQuestion(num) {
//     var question = questions [ num - 1];

//     questionEl.textcontect = question.question;

//     for (let i = 0; i < question.answers.length; i++) {
//         var choices = question.choices(i);

//     }
// }

renderQuestion(1);