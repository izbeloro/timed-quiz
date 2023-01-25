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
var initials = document.getElementById("int");
var score = document.getElementById("Highscore");
var submit =document.getElementById("submit");
var initialEl  = document.getElementById("initialsInput");
var scoreEl = document.getElementById("scoreInput");
var showScore = document.getElementById("showscore");

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
    start.classList.add("hide");
    content.classList.remove("hide");
}

function startGame() {
    content.classList.add("hide");
    isWin = false;
    timerVal = 60;
    startTimer();
    showQuestion();
}

function showQuestion() {
    questionCont.classList.remove("hide");
    buttonsDiv.classList.remove("hide");
    renderQuestion();
}

start.addEventListener("click", showRules);
cont.addEventListener("click", startGame);
cont.addEventListener("click", showQuestion);

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
        timerVal <= 0;
    }
    else {
        timerVal = timerVal - 5;
    }
}

var currentQuestion = 0;

function renderQuestion() {
    questionCont.innerText = questions[currentQuestion].title;
    btn1.innerText = questions[currentQuestion].choices[0];
    btn2.innerText = questions[currentQuestion].choices[1];
    btn3.innerText = questions[currentQuestion].choices[2];
    btn4.innerText = questions[currentQuestion].choices[3];

    btn1.value = questions[currentQuestion].choices[0];
    btn2.value = questions[currentQuestion].choices[1];
    btn3.value = questions[currentQuestion].choices[2];
    btn4.value = questions[currentQuestion].choices[3];


    btn1.addEventListener("click", checkAns);
    btn2.addEventListener("click", checkAns);
    btn3.addEventListener("click", checkAns);
    btn4.addEventListener("click", checkAns);
}

function checkAns(event) {
    var selectedAns = event.target.getAttribute("value");
    var answer = questions[currentQuestion].answer;
    if (selectedAns === answer) {
        alert("Correct answer!");
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            renderQuestion();
        } else {
            endGame();
        }
    }
    else {
        alert("Wrong answer!!!!!");
        reduceTime();
    }
}

function endGame() {
    clearInterval(timer);
    showForm();
    submit.addEventListener("click", function() {
        var userScore = scoreEl.value;
        var userInitals = initialEl.value;

        var highScores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];

        var newScore = {
            score:  userScore,
            initial: userInitals,
        }
        highScores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highScores));
        showScore.innerText = JSON.stringify(window.localStorage.getItem("highscores"));
    });
}

function showForm() {
    initials.classList.remove("hide");
    score.classList.remove("hide");
    questionCont.classList.add("hide");
    buttonsDiv.classList.add("hide");
    submit.classList.remove("hide");
}

// function saveinfo() {
//     var name = initials.value;
//     localStorage
// }

function loseGame() {
    alert("You Lose!");
    showForm();
}


