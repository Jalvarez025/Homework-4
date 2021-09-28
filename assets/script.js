
// Selects element by id
var timeEl = document.getElementById('timer');
var startEl = document.getElementById("startBtn");

var promptEl = document.querySelector(".prompt");

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



function beginQuiz(){
        //set up time
    function startTime() {
            //Sets interval in variable
            //beginQuiz();
        var secondsLeft = 10;
        var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
            //Stops execution of action at set interval
        clearInterval(timerInterval);
            //Calls function to create and append image
            //sendMessage();
            //nextQuestion();
      
        }

        }, 1000);

    }

    function nextQuestion(){
            promptEl.textContent = questions[0];
            choice1El.textContent = answers[0][0];
            choice2El.textContent = answers[0][1];
            choice3El.textContent = answers[0][2];
            choice4El.textContent = answers[0][3];
    
    }

    startTime();
    nextQuestion();
    
    
    
    
    
}





//click start time to begin count down
//startEl.addEventListener("click", startTime);
//click start to ask questions
startEl.addEventListener("click", beginQuiz);
