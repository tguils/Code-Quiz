// Core Variables
    var startQuizButton = document.getElementById("startButton");
    var highScoreButton = document.querySelector(".highScoresButton");
    var remainingTime = document.getElementById("remainingTime");
    var nextQuestionButton = document.getElementById("nextQuestion");
    var countDownHeader = document.getElementById("countdown");
    var verifyElement = document.getElementById("verify");

// Screen wrappers
    var screenOneWrapper = document.querySelector(".screen-1");
    var screenTwoWrapper = document.querySelector(".screen-2");
    var screenThreeWrapper = document.querySelector(".screen-3");
    var screenFourWrapper = document.querySelector(".screen-4");
    var timeLeft = 100;

// Quiz questions
    var questionArray = [];
    var question1 = document.getElementById("q1");
    var question2 = document.getElementById("q2");
    var question3 = document.getElementById("q3");
    var question4 = document.getElementById("q4");

// Quiz questions Options
    var questionOneOptions = document.querySelector(".questionOneOptions");
    var questionTwoOptions = document.querySelector(".questionTwoOptions");
    var questionThreeOptions = document.querySelector(".questionThreeOptions");
    var questionFourOptions = document.querySelector(".questionFourOptions");

// Created variables

    var quizData = [
        {
            id: 0,
            question: "How do you add a class to an element in javascript?",
            answer: [
                    { text: "element.class()", isCorrect: false },
                    { text: "element.classes.addClass()", isCorrect: false },
                    { text: "element.classAdd()", isCorrect: false },
                    { text: "element.classList.add()", isCorrect: true }
                ]
        },

        {
            id: 1,
            question: "How do you select the first item in an array?",
            answer: [
                    { text: "array.first", isCorrect: false },
                    { text: "array[0]", isCorrect: true },
                    { text: "element[first]", isCorrect: false },
                    { text: "array(0)", isCorrect: false }
                ]
        },

        {
            id: 2,
            question: "How do you select content in an object?",
            answer: [
                    { text: "object(content)", isCorrect: false },
                    { text: "object[0]", isCorrect: false },
                    { text: "object.property", isCorrect:  true},
                    { text: "content = object", isCorrect: false }
                ]
        },

        {
            id: 3,
            question: "Which is a datatype in javascript?",
            answer: [
                { text: "boolean", isCorrect: false },
                { text: "quote", isCorrect: false },
                { text: "string", isCorrect: false },
                { text: "a and c", isCorrect: true }
            ]
        }
    ]

    
    // Screen 1 functions
    function startQuiz() {
        var HeaderTimer = setInterval(function() {
            if (timeLeft >= 0) {
                remainingTime.value = timeLeft;
                remainingTime.textContent = timeLeft;
                timeLeft -= 1;
            } else {
                clearInterval(HeaderTimer);
                quizComplete();
            }
        }, 1000);
        
        
        // hide the screen 1 and show screen 2
        screenOneWrapper.classList.add("hidden");
        screenTwoWrapper.classList.remove("hidden"); 
        putOptionsIntoHTML();
    }

    // Getting options from text
    function putOptionsIntoHTML() {
    
    // I will set up the questions here
        
        // adding in questions
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

        var questionOneOptionOne = document.getElementById("q1o1");
        var questionOneOptionTwo = document.getElementById("q1o2");
        var questionOneOptionThree = document.getElementById("q1o3");
        var questionOneOptionFour = document.getElementById("q1o4");
    
        var questionTwoOptionOne = document.getElementById("q2o1");
        var questionTwoOptionTwo = document.getElementById("q2o2");
        var questionTwoOptionThree = document.getElementById("q2o3");
        var questionTwoOptionFour = document.getElementById("q2o4");
    
        var questionThreeOptionOne = document.getElementById("q3o1");
        var questionThreeOptionTwo = document.getElementById("q3o2");
        var questionThreeOptionThree = document.getElementById("q3o3");
        var questionThreeOptionFour = document.getElementById("q3o4");
    
        var questionFourOptionOne = document.getElementById("q4o1");
        var questionFourOptionTwo = document.getElementById("q4o2");
        var questionFourOptionThree = document.getElementById("q4o3");
        var questionFourOptionFour = document.getElementById("q4o4");
    
        //  adding in options                   
        if(questionOneOptionOne) {
            questionOneOptionOne.textContent = quizData[0].answer[0].text;
            questionOneOptionTwo.textContent = quizData[0].answer[1].text;
            questionOneOptionThree.textContent = quizData[0].answer[2].text;
            questionOneOptionFour.textContent = quizData[0].answer[3].text;
        }
        
        if(questionOneOptionOne) {
            questionTwoOptionOne.textContent = quizData[1].answer[0].text;
            questionTwoOptionTwo.textContent = quizData[1].answer[1].text;
            questionTwoOptionThree.textContent = quizData[1].answer[2].text;
            questionTwoOptionFour.textContent = quizData[1].answer[3].text;
        }
        
        if(questionOneOptionOne) {
            questionThreeOptionOne.textContent = quizData[2].answer[0].text;
            questionThreeOptionTwo.textContent = quizData[2].answer[1].text;
            questionThreeOptionThree.textContent = quizData[2].answer[2].text;
            questionThreeOptionFour.textContent = quizData[2].answer[3].text;
        }
    
        if(questionOneOptionOne) {
            questionFourOptionOne.textContent = quizData[3].answer[0].text;
            questionFourOptionTwo.textContent = quizData[3].answer[1].text;
            questionFourOptionThree.textContent = quizData[3].answer[2].text;
            questionFourOptionFour.textContent = quizData[3].answer[3].text;
        }
    }

    function quizComplete() {
        var scoreText = document.querySelector(".scoreText");
        var score = timeLeft;
        // Moving to the next screen
        screenTwoWrapper.classList.add('hidden');
        screenThreeWrapper.classList.remove('hidden');
        // Changing Content on the page
        countDownHeader.textContent = "Your score is " + score + "."
        scoreText.textContent = score;
    }

    function store() {
        var inputTesterInitials = document.getElementById("testerInitials");
        var inputTesterScore = document.querySelector(".scoreText");
        // console.log('score', inputTesterScore);
        // console.log('score', inputTesterScore.textContent);
        // use local storage to set initials and score
        localStorage.setItem("Initials", inputTesterInitials.value);
        localStorage.setItem("Score", inputTesterScore.textContent);


        // Moving to the next screen
        screenThreeWrapper.classList.add("hidden");
        screenFourWrapper.classList.remove("hidden");

        // use storage to populate highscore list items

// BUG - can't add content to li from storage

        // var scoreCardItem = document.getElementById("score");
        // var storedInitialsValue = localStorage.getItem("Initials");
        // var storedScoreValue = localStorage.getItem("Score");

        // console.log("scoreCardItem html", scoreCardItem);
        // scoreCardItem.textContent('It works');
        // document.getElementById("score").innerHTML = "Item was changed";
    }

    function nextQuestion() {
        questionArray = document.querySelectorAll(".question");
        
        // if selection is correct, hide the question group and unhide the next question group
        if(questionArray[0].classList.contains("active")) {
            questionArray[0].classList.remove("active");
            questionArray[1].classList.add("active");
            console.log("questionSet 1");
            return
        }
        if(questionArray[1].classList.contains("active")) {
            questionArray[1].classList.remove("active");
            questionArray[2].classList.add("active");
            console.log("questionSet 2");
            return
        }
        if(questionArray[2].classList.contains("active")) {
            questionArray[2].classList.remove("active");
            questionArray[3].classList.add("active");
            console.log("questionSet 3");
            return
        }
        if(questionArray[3].classList.contains("active")) {
            quizComplete();
        }
        // var parentElement = selectedItem.parentElement
    }

    function optionSelected(event) {
        // console.log(event.target);
        // How do I click the buttons and get a right or wrong answer?
        // when user clicks each option a boolean test confirms
        var selectedItem = event.target;
        var isCorrect = selectedItem.getAttribute("isCorrect");
        var isNotCorrect = selectedItem.getAttribute("isNotCorrect");


        // Remove class after another button has been clicked
        if(isCorrect) {
            // change the text of the verify element
            verifyElement.textContent = isCorrect;
            // console.log(selectedItem);
            nextQuestion();
        } else {
            // change the text of the verify element
            verifyElement.textContent = isNotCorrect;
            // I need to change timeLeft variable from startQuiz function to subtract by 5 seconds for each wrong answer.

            if(timeLeft <= 5) {
                remainingTime.textContent = 0;
                // BUG - there is an issue if time is below 5 seconds, need to figure out why
            } else {
                timeLeft -= 25;
            }

            nextQuestion();
        }
    }

    function goBack() {
        // Figure out how to go back in the project without clearing the storage
        // reset all the items
        // Moving to the first screen
        screenFourWrapper.classList.add("hidden");
        screenOneWrapper.classList.remove("hidden");
        countDownHeader.innerHTML = ("You have <span id='remainingTime'>100</span> seconds left!");
        verifyElement = '';
        timeLeft = 100;
        console.log('reset timeleft', timeLeft);

        if(questionArray[3].classList.contains("active")) {
            questionArray[3].classList.remove("active");
            questionArray[0].classList.add("active");
        }
        
        // Next: 
        // need to reset the questionArray correct on goBack.
        // TimeLeft is not counting down on second pass thru.

    }

    function clearStorage() {
        // clear the storage without refreshing the page.
    }

// Screen Three work 
//  Score is calculated already 
//  I need to change the screen to an input screen with a place to store initials and show my score.

// 

// Screen four final step
// change to screen four
// add in initials and scores from storage
// create go back and clear functions
