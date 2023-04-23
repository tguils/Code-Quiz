var startQuizButton = document.getElementById('startButton');
var highScoreButton = document.querySelector('.highScoresButton');
var remainingTime = document.getElementById('remainingTime');
var nextQuestionButton = document.getElementById('nextQuestion');

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
    screenOneWrapper.classList.add('hidden');
    screenTwoWrapper.classList.remove('hidden'); 
}

// Getting questions from text
    var question1 = document.getElementById('q1');
    var question2 = document.getElementById('q2');
    var question3 = document.getElementById('q3');
    var question4 = document.getElementById('q4');

// Getting options from text
    var option1 = document.getElementById('o1');
    var option2 = document.getElementById('o2');
    var option3 = document.getElementById('o3');
    var option4 = document.getElementById('o4');

// I will set up the questions here

    var quizData = [{
        id: 0,
        question: "Which of the following are JavaScript Datatypes?",
        answer: [{ text: "boolean", isCorrect: false },
                 { text: "quote", isCorrect: false },
                 { text: "string", isCorrect: false },
                 { text: "a and b", isCorrect: true }
            ]
    },

    {
        id: 1,
        question: "Who is a lazy pOS",
        answer: [{ text: "boolean", isCorrect: false },
                 { text: "quote", isCorrect: false },
                 { text: "string", isCorrect: false },
                 { text: "me", isCorrect: true }
            ]
    },

    {
        id: 2,
        question: "Who doesn't want to do the work",
        answer: [{ text: "boolean", isCorrect: false },
                 { text: "quote", isCorrect: false },
                 { text: "string", isCorrect: false },
                 { text: "me", isCorrect: true }
            ]
    },

    {
        id: 3,
        question: "Whos the problem",
        answer: [{ text: "boolean", isCorrect: false },
                 { text: "quote", isCorrect: false },
                 { text: "string", isCorrect: false },
                 { text: "me", isCorrect: true }
            ]
        }
    ]

    if(question1) {
        question1.textContent = quizData[0].question;
    }
    
    if(question2) {
        question2.textContent = quizData[1].question;
    }
    
    if(question3) {
        question3.textContent = quizData[2].question;
    }

    if(question4) {
        question4.textContent = quizData[3].question;
    }
    //
    if(option1) {
        option1.textContent = quizData[0].answer;
    }
    
    if(option2) {
        option2.textContent = quizData[1].answer;
    }
    
    if(option3) {
        option3.textContent = quizData[2].answer;
    }

    if(option4) {
        option4.textContent = quizData[3].answer;
    }

// Need function to get questions to progress to next after answered

    // nextQuestion.onclick = function() {
    //     if (nextQuestion > question1) {
    //         question1.style.display = 'none'
    //         question2.style.display = 'block' //how does this work with 5 questions?
    //     }
    // }

// Screen Three work

// Screen four final step
