var timerEl = document.getElementById("time-left");
var start = document.getElementById("start-button");
var timer;
var timerVal;
var isWin = false;
var content = document.getElementById("content-box");
var cont = document.getElementById("restart")
var questionCont = document.getElementById("question");
var buttonsDiv = document.getElementById("buttons");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var currentQue;

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
    questionCont.classList.remove("hide")
    buttonsDiv.classList.remove("hide")
    renderQuestion0()
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

function reduceTime() {
    if (timerVal < 6) {
        timerVal <= 0
    }
    else {
        timerVal = timerVal - 5
    }
}

function renderQuestion0(currentQue) {
    currentQue = questions[0].title;
    questionCont.innerText = currentQue;
    btn1.innerText = questions[0].choices[0];
    btn2.innerText = questions[0].choices[1];
    btn3.innerText = questions[0].choices[2];
    btn4.innerText = questions[0].choices[3];

    btn1.addEventListener("click", reduceTime)
    btn2.addEventListener("click", reduceTime)
    btn3.addEventListener("click", renderQuestion1)
    btn4.addEventListener("click", reduceTime)
}

function renderQuestion1(currentQue) {
    currentQue = questions[0].title;
    questionCont.innerText = currentQue;
    btn1.innerText = questions[1].choices[0];
    btn2.innerText = questions[1].choices[1];
    btn3.innerText = questions[1].choices[2];
    btn4.innerText = questions[1].choices[3];

    btn1.addEventListener("click", reduceTime)
    btn2.addEventListener("click", reduceTime)
    btn3.addEventListener("click", reduceTime)
    btn4.addEventListener("click", renderQuestion2)
}

function renderQuestion2(currentQue) {
    currentQue = questions[0].title;
    questionCont.innerText = currentQue;
    btn1.innerText = questions[2].choices[0];
    btn2.innerText = questions[2].choices[1];
    btn3.innerText = questions[2].choices[2];
    btn4.innerText = questions[2].choices[3];

    btn1.addEventListener("click", reduceTime)
    btn2.addEventListener("click", endGame)
    btn3.addEventListener("click", reduceTime)
    btn4.addEventListener("click", reduceTime)
}

function endGame() {
    questionCont.innerText = "You Win!"
}

function loseGame() {
    questionCont.innerText = "You Lose!"
}


