const questions = [
    { 
        question: "1. What is the difference between steaming and boiling?",
        answers: [
            { answer: "Steaming involves cooking food in a small amount of liquid, boiling involves cooking in plenty of water", correct: false }, 
            { answer: "Steaming cooks food in steam, boiling cooks it directly in water", correct: true }, //true
            { answer: "There is no difference, they are the same", correct: false },
        ]
    },
    { 
        question: "2. What is the correct method for cooking pasta?",
        answers: [
            { answer: "Put it in cold water and slowly heat it up", correct: false }, 
            { answer: "Put it in boiling water and add salt", correct: true }, //true
            { answer: "Put it in boiling water without salt", correct: false },
        ]
    },
    { 
        question: "3. What does 'blanching' mean?",
        answers: [
            { answer: "Rapidly freezing the food", correct: false }, 
            { answer: "Briefly boiling the food in hot water, then plunging it into cold water", correct: true }, //true
            { answer: "Slowly cooking the food at a low temperature", correct: false },
        ]
    },
    { 
        question: "4. What is mirepoix?",
        answers: [
            { answer: "A French meat dish", correct: false }, 
            { answer: "A spice blend", correct: false }, 
            { answer: "A mix of diced vegetables (onion, carrot, celery)", correct: true }, //true
        ]
    },
    { 
        question: "5. Which ingredient is used to make pesto sauce?",
        answers: [
            { answer: "Parsley", correct: false }, 
            { answer: "Basil", correct: true }, //true
            { answer: "Cilantro", correct: false },
        ]
    },
    { 
        question: "6. What is julienne cutting?",
        answers: [
            { answer: "Cutting vegetables into large pieces", correct: false }, 
            { answer: "Cutting vegetables into thin, long strips", correct: true }, //true
            { answer: "Cutting vegetables into cubes", correct: false }, 
        ]
    },
    { 
        question: "7. What is the technique called when you cook food quickly at high heat while continuously stirring?",
        answers: [
            { answer: "Grilling", correct: false }, 
            { answer: "Baking", correct: false }, 
            { answer: "Stir-frying", correct: true }, //true
        ]
    },
    { 
        question: "8. Which spice gives curry its characteristic yellow color?",
        answers: [
            { answer: "Paprika", correct: false }, 
            { answer: "Turmeric", correct: true }, //true
            { answer: "Saffron", correct: false },
        ]
    },
    { 
        question: "9. Which oil is best for cooking at high temperatures?",
        answers: [
            { answer: "Olive oil", correct: false }, 
            { answer: "Sunflower oil", correct: true }, //true
            { answer: "Coconut oil", correct: false },
        ]
    },
    { 
        question: "10. What is a smoker used for in cooking?",
        answers: [
            { answer: "Tenderizing meats", correct: false }, 
            { answer: "Flavoring food with a smoky taste", correct: true }, //true
            { answer: "Softening vegetables faster", correct: false },
        ]
    },
    { 
        question: "11. What is the essential ingredient in risotto besides rice?",
        answers: [
            { answer: "Cream", correct: false }, 
            { answer: "Broth", correct: true }, //true
            { answer: "Water", correct: false },
        ]
    },
    { 
        question: "12. Which meat should always be fully cooked before consuming?",
        answers: [
            { answer: "Chicken", correct: true }, //true
            { answer: "Beef", correct: false }, 
            { answer: "Lamb", correct: false },
        ]
    },
    { 
        question: "13. What does the 'sous vide' technique involve?",
        answers: [
            { answer: "Quickly searing meat at high heat", correct: false },
            { answer: "Slowly cooking meat at a low temperature in a vacuum-sealed bag", correct: true }, //true
            { answer: "Roasting meat over an open flame", correct: false },
        ]
    },
    { 
        question: "14. What is the best way to mince garlic?",
        answers: [
            { answer: "Grate it on a grater", correct: false },
            { answer: "Chop it finely on a cutting board with a knife", correct: true }, //true
            { answer: "Use a garlic press", correct: false },
        ]
    },
    { 
        question: "15. Which dish is not a classic of French cuisine?",
        answers:
        [
            { answer: "Coq au vin", correct: false },
            { answer: "Paella", correct: true }, //true
            { answer: "Ratatouille", correct: false }
        ] 
    },
];

const startNextBtn = document.querySelector('.start-next-btn');
const quizContainer = document.querySelector('.quiz-container');
const welcome = document.querySelector('.welcome');
const numberOfQuestions = document.querySelector('.number-of-questions');
const answerLines = document.querySelector('.answer-lines');
const answerList = document.querySelector('.answer-list');
const displayQuestion = document.querySelector('.question');

const resultSummary = document.querySelector('.result-summary');

let currentQuestion = 0;
let score = 0;
let answerNumber = 0;

startNextBtn.addEventListener('click', () => {
    welcome.classList.add('hide');
    quizContainer.classList.remove('hide');
    startNextBtn.innerHTML = 'Next';
    startNextBtn.classList.add('disabled');
    answerNumber++;
    numberOfQuestions.innerHTML = `${answerNumber} /15`;
    nextQuestion();
    showQuestion(questions[currentQuestion -1]);
    
});

const showQuestion = (question) => {
    displayQuestion.innerHTML = question.question;
    
answerList.innerHTML = "";

    question.answers.forEach(answer => {
        if (answer.correct) {
            answerList.innerHTML += `
            <button type="button" class="answer corr list-group-item list-group-item-action corr text-center">${answer.answer}</button>`;
        } else {
            answerList.innerHTML += `
            <button type="button" class="answer notCorr list-group-item list-group-item-action text-center">${answer.answer}</button>`;
        }
    });

    const answerDiv = document.querySelectorAll('.answer');

    answerDiv.forEach((answer) => {
        answer.addEventListener('click', () => {
            startNextBtn.classList.remove('disabled');
            answerDiv.forEach(btn => {
                btn.classList.add('disabled');
            });
            answer.classList.add('chosen');
            answer.classList.add('box-shadow');
            answer.classList.add('fw-bold');
            checkAnswer();
            isCorrectAnswer();
        })  
    });
};

const nextQuestion = () => {
if (currentQuestion > questions.length - 1) {
    showScore();
    quizContainer.classList.add('hide');
    startNextBtn.classList.add('hide');
} else {
    currentQuestion++;
    showQuestion(questions[currentQuestion - 1]);
}
};

const checkAnswer = () => {
    const correctAnswer = document.querySelector('.corr');
    const incorrectAnswer = document.querySelectorAll('.notCorr');
    const chosen = document.querySelector('.chosen');
    
    incorrectAnswer.forEach(incorrect => {
        incorrect.classList.add('text-danger');
        if (chosen.contains(incorrect)) {
            chosen.classList.add('box-shadow-danger');
        }
    });

    if (correctAnswer) {
        correctAnswer.classList.add('text-success');
        
        if (chosen.contains(correctAnswer)) {
            correctAnswer.classList.add('box-shadow-success');
        }
        incorrectAnswer;
    } else {
        console.log("Incorrect answer");
        
    }
};

const isCorrectAnswer = () => {
    const chosenAnswer = document.querySelector('.chosen');
    if (chosenAnswer.classList.contains('corr')) {
        score++;
        answerLines.innerHTML += `<div class="bg-success"></div>`;
    } else {
        answerLines.innerHTML += `<div class="bg-danger"></div>`;
    }
};

const showScore = () => {
    resultSummary.classList.remove('hide');
    const progressValue = document.querySelector('.progress-value');
    const progressCircle = document.querySelector('.progress-circle');
    const basicCard = document.querySelector('.basic');
    const advancedCard = document.querySelector('.advanced');
    const pointingFinger = document.querySelector('.pointing-finger-2');
    let counter = 0;
    let result = (score / 15) * 100;

    let timer = setInterval(() => {
        counter++;
        progressCircle.style.background = `conic-gradient(var(--primary-color) ${counter * 3.6}deg, transparent 0deg)`;
        progressValue.innerHTML = `${counter}%`;

        if(counter >= Math.round(result)) {
            clearInterval(timer);
            pointingFinger.classList.remove('hide');
        }
    }, 40);

    setTimeout(() => {
        if (result < 50) {
            basicCard.classList.remove('hide');
        } else {
            advancedCard.classList.remove('hide');
        }
    }, 3500)
    
};

