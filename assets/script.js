//timer to start 

var countdown = getElementByID("countdown");

let question1 = document.getElementByID("q1");
let question2 = document.getElementByID("q2");
let question3 = document.getElementByID("q3");
let question4 = document.getElementByID("q4");
let question5 = document.getElementByID("q5");


//need function to get questions to progress to next after answered

nextQuestion.onclick = function() {
    if (nextQuestion > question1) {
        question1.style.display = 'none'
        question2.style.display = 'block' //how does this work with 5 questions?
    }
}

//want to add event listener to the function
//do I still need an Onclick on the html even though I have the click function on the start id here? 
/*document.getElementById("start").addEventListener("click", function() {
    var timeLeft = 60;
    var runningTimer = setInterval(function() {
    document.getElementByID("countdown").innerHTML = timeLeft + "&nbsp" + "seconds remaining";

    timeLeft -=1;
    if(timeLeft <= 0) {
        clearInterval(downloadTimer)
        document.getElementById("countdown").innerHTML = ("Time is up!")
    }
}, 1000);
        console.log(countdown);
}); */
   

//or different method 
var remainingTimeEl = document.querySelector("#remainingTime"),
    timeLeft = 60

var countdown = setInterval(function() {
if (timeLeft <= 0) clearInterval(downloadTimer) {
    remainingTimeEl.value = timeLeft;
    remainingTimeEl.textContent = timeLeft;
    timeLeft -= 1
    }
},
1000)