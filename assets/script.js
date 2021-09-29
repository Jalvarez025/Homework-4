
// Selects element by id
var timeEl = document.getElementById("timer");
var startEl = document.getElementById("startBtn");

var highScoreEl = document.getElementById("highScore")

var promptEl = document.querySelector(".prompt");

//var alertEl = document.querySelector(".answerAlert");
var alertEl = document.getElementById("spanId")

var submitBtnEl = document.getElementById("submitBtn");

//answer choices
var choice1El = document.querySelector(".choice1");
var choice2El = document.querySelector(".choice2");
var choice3El = document.querySelector(".choice3");
var choice4El = document.querySelector(".choice4");
//questions
var questions = ["This will be the first question",
"This will be the second question",
"This will be the third question",
"This will be the forth question",
"This will be the fifth question"];

var answers = [["a1)","b1)","c1)","d1)"], ["a2)","b2)","c2)","d2)"], 
["a3)","b3)","c3)","d3)"], ["a4)","b4)","c4)","d4)"], ["a5)","b5)","c5)","d5)"]];

promptEl.textContent = "Are you ready to start?";

choice1El.addEventListener("click", function(event){
    nextQuestion();
    correctAnswer();
})

choice2El.addEventListener("click", function(event){
    nextQuestion();
    wrongAnswer();
})

choice3El.addEventListener("click", function(event){
    nextQuestion();
    wrongAnswer();
})

choice4El.addEventListener("click", function(event){
    nextQuestion();
    wrongAnswer();
})

startEl.addEventListener("click", function(event){
    document.getElementById("hideMe").style.visibility = 'visible';
    document.getElementById("startBtn").style.visibility = 'hidden';

    nextQuestion();
})

startEl.addEventListener("click", setTime);

var score = [];

function keepScore(){
     if(alertEl.textContent = "Correct" && score.length < 5){
        score.push(1);
        currentScore = console.log("Current Score: " + score.length);
    }
    
}

function correctAnswer(){
    alertEl.textContent = "Correct";

    var secondsLeft2 = 1;
    var timerInterval2 = setInterval(function() {
    secondsLeft2--;
    //timeEl.textContent = secondsLeft;
    if(secondsLeft2 === 0) {
            //Stops execution of action at set interval
        clearInterval(timerInterval2);
        keepScore();
        alertEl.textContent = " ";
    }
    }, 1000);
}

function wrongAnswer(){
    alertEl.textContent = "Wrong";

    var secondsLeft3 = 1;
    var timerInterval3 = setInterval(function() {
    secondsLeft3--;
    //timeEl.textContent = secondsLeft;
    if(secondsLeft3 === 0) {
            //Stops execution of action at set interval
        clearInterval(timerInterval3);
        alertEl.textContent = " ";
    }
    }, 1000);
}

var i = 0;
//var zeroTime = true;

function setTime(){
        //Sets interval in variable
    var secondsLeft = 10;
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft < 1) {
        //Stops execution of action at set interval 
    clearInterval(timerInterval); 
    submitScore();
    }

    }, 1000);    
}

function nextQuestion(){

    if(i < questions.length){
    promptEl.textContent = questions[i];
    choice1El.textContent = answers[i][0];
    choice2El.textContent = answers[i][1];
    choice3El.textContent = answers[i][2];
    choice4El.textContent = answers[i][3];
    i++;  
    }else if(i = questions.length){
        submitScore();
    }
}

function submitScore(){

    document.getElementById("hideMe").style.visibility = 'hidden';
    document.getElementById("promptId").style.visibility = 'hidden';
    document.getElementById("submitCard").style.visibility = 'visible';

    submitBtnEl.addEventListener("click", function(event){
    userInitials = document.getElementById("myText").value;
    showHighScore();
    });
}

function showHighScore(){

    submitBtnEl.addEventListener("click", function(event){
        document.getElementById("submitCard").style.visibility = 'hidden';
        document.getElementById("highScoreCard").style.visibility = 'visible';
        highScoreEl.textContent = userInitials + "-" + score.length; 
        console.log("High Score: " + highScoreEl.textContent);
    })
}

// function timedOut(){
//     if(zeroTime = false){
//     document.getElementById("hideMe").style.visibility = 'hidden';
//     document.getElementById("promptId").style.visibility = 'hidden';
//     document.getElementById("submitCard").style.visibility = 'visible';
//     }
// }
    //document.getElementById("demo").innerHTML = x;
  

// function beginQuiz(){
//         //set up time
//     function startTime() {
//             //Sets interval in variable
//             //beginQuiz();
//         var secondsLeft = 10;
//         var timerInterval = setInterval(function() {
//         secondsLeft--;
//         timeEl.textContent = secondsLeft;
    
//         if(secondsLeft === 0) {
//             //Stops execution of action at set interval
//         clearInterval(timerInterval);
//             //Calls function to create and append image
//             //sendMessage();
//             //nextQuestion();
      
//         }

//         }, 1000);

//     }

//     function nextQuestion(){
//             promptEl.textContent = questions[0];
//             choice1El.textContent = answers[0][0];
//             choice2El.textContent = answers[0][1];
//             choice3El.textContent = answers[0][2];
//             choice4El.textContent = answers[0][3];
    
//     }

//     startTime();
//     nextQuestion();
    
// }

//click start time to begin count down
//startEl.addEventListener("click", startTime);
//click start to ask questions


