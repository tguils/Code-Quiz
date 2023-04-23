var startQuizButton = document.getElementById('startButton');
var highScoreButton = document.querySelector('.highScoresButton');
var remainingTime = document.getElementById('remainingTime');

var screenOneWrapper = document.querySelector('.screen-1');
var screenTwoWrapper = document.querySelector('.screen-2');
var screenThreeWrapper = document.querySelector('.screen-3');
var screenFourWrapper = document.querySelector('.screen-4');

// Created variables
// Screen 1 functions

function startQuiz() {
    var timeLeft = 90;

    setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval();
        }
        remainingTime.value = timeLeft;
        remainingTime.textContent = timeLeft;
        timeLeft -= 1;
    },
    1000);
    
    // hide the screen 1 and show screen 2
    screenOneWrapper.classList.add("hidden");
    screenTwoWrapper.classList.remove("hidden"); 
}


// Getting options from text
    // let option1 = document.getElementById("o1");
    // let option1 = document.getElementById("o2");
    // let option1 = document.getElementById("o3");
    // let option1 = document.getElementById("o4");

// I will set up the questions here

    // var questions = [{
    //     id: 0,
    //     question: "Which of the following are JavaScript Dataypes?",
    //     answer: [{text: "boolean", isCorrect: false },
    //              { text: "quote", isCorrect: false },
    //              { text: "string", isCorrect: false },
    //              { text: "a and b", isCorrect: true }
    //         ]
    // },

    // {
    //     id: 1,
    //     question: "Which of the following are JavaScript Dataypes",
    //     answer: [{text: "boolean", isCorrect: false },
    //              { text: "quote", isCorrect: false },
    //              { text: "string", isCorrect: false },
    //              { text: "a and b", isCorrect: true }
    //         ]
    // },

    // {
    //     id: 2,
    //     question: "Which of the following are JavaScript Dataypes",
    //     answer: [{text: "boolean", isCorrect: false },
    //              { text: "quote", isCorrect: false },
    //              { text: "string", isCorrect: false },
    //              { text: "a and b", isCorrect: true }
    //         ]
    // },

    // {
    //     id: 3,
    //     question: "Which of the following are JavaScript Dataypes",
    //     answer: [{text: "boolean", isCorrect: false },
    //              { text: "quote", isCorrect: false },
    //              { text: "string", isCorrect: false },
    //              { text: "a and b", isCorrect: true }
    //         ]
    //     }
    // ]

// Need function to get questions to progress to next after answered

    // nextQuestion.onclick = function() {
    //     if (nextQuestion > question1) {
    //         question1.style.display = 'none'
    //         question2.style.display = 'block' //how does this work with 5 questions?
    //     }
    // }

// Screen Three work

// Screen four final step
