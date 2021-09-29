
// Selects element by id
var timeEl = document.getElementById("timer");
var startEl = document.getElementById("startBtn");

var promptEl = document.querySelector(".prompt");

var alertEl = document.querySelector(".answerAlert");

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

function startTime() {
            //Sets interval in variable
    var secondsLeft = 10;
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    
        
    if(secondsLeft === 0) {
            //Stops execution of action at set interval
        clearInterval(timerInterval);
        
          
    }
    
    }, 1000);
}

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

startEl.addEventListener("click", startTime);

  var score = [];

 function keepScore(){
     if(alertEl.textContent = "Correct" && score.length < 5){
        score.push(1);
        currentScore = console.log(score.length);
    }
    
 }

function correctAnswer(){
    alertEl.textContent = "Correct";

    var secondsLeft = 1;
    var timerInterval = setInterval(function() {
    secondsLeft--;
    //timeEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
            //Stops execution of action at set interval
        clearInterval(timerInterval);
        keepScore();
        alertEl.textContent = " ";
    }
    }, 1000);
}

function wrongAnswer(){
    alertEl.textContent = "Wrong";
    

    var secondsLeft = 1;
    var timerInterval = setInterval(function() {
    secondsLeft--;
    //timeEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
            //Stops execution of action at set interval
        clearInterval(timerInterval);
        alertEl.textContent = " ";
    }
    }, 1000);
}

var i = 0;

function nextQuestion(){
  
    if(i < questions.length){
    promptEl.textContent = questions[i];
    choice1El.textContent = answers[i][0];
    choice2El.textContent = answers[i][1];
    choice3El.textContent = answers[i][2];
    choice4El.textContent = answers[i][3];
    i++;  
    }
    
}

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


