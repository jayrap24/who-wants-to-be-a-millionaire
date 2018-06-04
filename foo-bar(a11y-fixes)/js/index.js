"use strict"
// create an array of objects of the questions and answers. 
const questionTemplate = [{
        id: 1,
        question: "How long have sharks been in the ocean?",
        answerA: "A) 300 Million Years",
        answerB: "B) 12 Million Years",
        answerC: "C) 88 Million Years",
        answerD: "D) 450 Million Years",
        correct: "A",
    },

    {
        id: 2,
        question: "How many Oscars did Hitchcock win as a film director?",
        answerA: "A) 0",
        answerB: "B) 2",
        answerC: "C) 8",
        answerD: "D) 4",
        correct: "A",
    },
    {
        id: 3,
        question: "What percentage of our brain do we use?",
        answerA: "A) 4%",
        answerB: "B) 22%",
        answerC: "C) 10%",
        answerD: "D) 15%",
        correct: "C",
    },
    {
        id: 4,
        question: "How many capsules are on the London Eye?",
        answerA: "A) 28",
        answerB: "B) 22",
        answerC: "C) 32",
        answerD: "D) 27",
        correct: "C",
    }, {
        id: 5,
        question: "What color was originally associated with Saint Patrick's Day?",
        answerA: "A) Yellow",
        answerB: "B) Purple",
        answerC: "C) Red",
        answerD: "D) Blue",
        correct: "D",
    },
    {
        id: 6,
        question: "When does The Hunchback of Notre Dame take place?",
        answerA: "A) 1888",
        answerB: "B) 1794",
        answerC: "C) 1800",
        answerD: "D) 1845",
        correct: "D",
    },
    {
        id: 7,
        question: "When did Cuba gain its independence from Spain?",
        answerA: "A) 1902",
        answerB: "B) 1890",
        answerC: "C) 1923",
        answerD: "D) 1911",
        correct: "A",
    },
    {
        id: 8,
        question: "Who was the inventor of the first digital camera?",
        answerA: "A) John Canon",
        answerB: "B) Eastman Kodak",
        answerC: "C) Steve Sasson",
        answerD: "D) Jerry Whinehouse",
        correct: "C",
    },
    {
        id: 9,
        question: "Which planet is known as bright wandering star?",
        answerA: "A) Jupiter",
        answerB: "B) Mars",
        answerC: "C) Neptune",
        answerD: "D) Venus",
        correct: "A",
    },
    {
        id: 10,
        question: "How many bones did Evel Knievel break in his life?",
        answerA: "A) 230",
        answerB: "B) 433",
        answerC: "C) 490",
        answerD: "D) 309",
        correct: "B",
    }
]
// variable where the objects of data are stored
let currentQuestion = 0;
let score = 0;
let questionNum = 1;
let totalQuestions = questionTemplate.length;
let nextButton = document.getElementById("next");
//javascript variables for the score
let currentQuestionNum = document.getElementById("currentQuestionNum");
let money = document.getElementById("money");
let wallet = document.getElementById("wallet");
//jQuery variables for the question and answers
let questionElement = $("#theQuestion");
let answerA = $("#labelA");
let answerB = $("#labelB");
let answerC = $("#labelC");
let answerD = $("#labelD");
//function for the start div
$("#iDo").click(function() {
    $(".scoreboard").show();
    $(".questions").show();
    $(".start").hide();
});
//function to load the questions and asnwers to the HTML page 
function loadQuestion(questionIndex) {
    let q = questionTemplate[questionIndex];
    if (q) {
        questionElement.text(q.question);
        answerA.text(q.answerA);
        answerB.text(q.answerB);
        answerC.text(q.answerC);
        answerD.text(q.answerD);
        currentQuestionNum.textContent = questionNum;
    }
};
//function that shows if the user got it right or wrong
document.getElementById("submit").onclick =
    function loadnextquestion() {
        let questionAnswered = document.querySelector("input[type=radio]:checked");
        //once user selects then we compare the user selected value to the correct answer 
        //feedback correct or incorrect

        if (questionAnswered) {
            let answer = questionAnswered.value;
            if (questionTemplate[currentQuestion].correct == answer) {
                $(".correctFeedback").show();
                $(".wrongFeedback").hide();
                score += 100000;
                money.textContent = "$" + score;
                wallet.textContent = "$" + score;
            } else {
                $(".wrongFeedback").show();
                $(".correctFeedback").hide();
                document.getElementById("theAnswer").textContent = questionTemplate[currentQuestion].correct;
            }
            //increase to the next question
            currentQuestion++;
            //clear checked radio option
            questionAnswered.checked = false;
            // add 1 to the question number everytime this function rolls 
            questionNum++;
            // push the number to the HTML page
            currentQuestionNum.textContent = questionNum;
            //once you complete the quiz
            if (currentQuestion == totalQuestions) {
                $(".questions").hide();
                $(".scoreBoard").css("display", "block");
                $(".money").css("display", "block");
                $(".score").hide();
            } else {
                loadQuestion(currentQuestion);
            }

        } else {
            alert("Please choose an answer :)")
        }
    };
//Next button for next question
$(".next").click(function() {
    $(".wrongFeedback").hide();
    $(".correctFeedback").hide();
})
//what happens when the user clicks next
loadQuestion(currentQuestion);
$("#myForm").on('submit', (e) => {
    e.preventDefault();
});
//focus & hover backround orange
$("#answerA").focusin(function() {
    $("#labelA").css("background", "orange");
    $("#labelA").css("cursor", "pointer");
});
$("#answerA").focusout(function() {
    $("#labelA").css("background", "black");
});
$("#answerB").focusin(function() {
    $("#labelB").css("background", "orange");
    $("#labelB").css("cursor", "pointer");
});
$("#answerB").focusout(function() {
    $("#labelB").css("background", "black");
});
$("#answerC").focusin(function() {
    $("#labelC").css("background", "orange");
    $("#labelC").css("cursor", "pointer");
});
$("#answerC").focusout(function() {
    $("#labelC").css("background", "black");
});
$("#answerD").focusin(function() {
    $("#labelD").css("background", "orange");
    $("#labelD").css("cursor", "pointer");
});
$("#answerD").focusout(function() {
    $("#labelD").css("background", "black");
});
$(".wrongFeedback").on("keydown", function(ev) {
    if (ev.keyCode == 13) {
        $(".wrongFeedback").hide();
        $(".correctFeedback").hide();
    }
});
$(".correctFeedback").on("keydown", function(ev) {
    if (ev.keyCode == 13) {
        $(".wrongFeedback").hide();
        $(".correctFeedback").hide();
    }
});
// restart          
document.getElementById("restart").onclick = function() {
    currentQuestion = 0;
    score = 0;
    questionNum = 1;
    currentQuestionNum.textContent = questionNum;
    questionElement.text(questionTemplate[0].question);
    money.textContent = "$" + score;
    wallet.textContent = "$" + score;
    $(".scoreboard").show();
    $(".questions").show();
    $(".money").hide();
    $(".questions").show();
    $(".score").show();
    loadQuestion();
}