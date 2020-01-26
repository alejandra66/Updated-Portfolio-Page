// My variable's 
var currentQuestion = 0;
var score = 0;
// total question count
var totQuestions = questions.length;

// html elements 
var container = document.getElementById('quizcontainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultsCont = document.getElementById('result');


nextButton.addEventListener("click", loadNextQuestion);

function loadQuestion(index) {
    var q = questions[index];
    question.textContent = (index + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

loadQuestion(currentQuestion);

// if nothing is defined, the alret will be diplayed 
function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //This answer will compared to the array and add a score of 10 
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 10;
    }
    // Will show when quiz is finished 
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totQuestions - 1) {
        nextButton.textContent = 'finish';
    }
    // Will show final score 
    if (currentQuestion == totQuestions) {
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }
    // will load the next question 
    loadQuestion(currentQuestion);
    // Count down timer 
    var counter = 0;
    var timeLeft = 75;

    function setup() {
        noCanvas();

        var timer = select('#timer');
        timer.html(timeLeft - counter);

        function timeIt() {
            counter++;
            timer.html(timeLeft - counter);
        }

        setInterval(timeIt, 1000);
    }
}



