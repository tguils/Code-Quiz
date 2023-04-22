//timer to start 

var countdown = getElementByID("countdown");
const d = new Date();
let time = d.getTime();
console.log(now)

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