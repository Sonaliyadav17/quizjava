const questions = [
    {
        question: 'What is the default value of an `int` variable in Java?',
        answers: [
            { text: '0', correct: true },
            { text: 'null', correct: false },
            { text: '1', correct: false },
            { text: 'undefined', correct: false }
        ]
    },
    {
        question: 'Which keyword is used to inherit a class in Java?',
        answers: [
            { text: 'implements', correct: false },
            { text: 'extends', correct: true },
            { text: 'inherits', correct: false },
            { text: 'super', correct: false }
        ]
    },
    {
        question: 'What is the purpose of the `static` keyword in Java?',
        answers: [
            { text: 'To make a variable or method belong to an instance of a class', correct: false },
            { text: 'To make a variable or method belong to the class itself', correct: true },
            { text: 'To restrict access to a variable or method', correct: false },
            { text: 'To provide a default value to a variable', correct: false }
        ]
    },
    {
        question: 'Which of the following is not a valid access modifier in Java?',
        answers: [
            { text: 'public', correct: false },
            { text: 'private', correct: false },
            { text: 'protected', correct: false },
            { text: 'local', correct: true }
        ]
    },
    {
        question: 'How do you declare an array in Java?',
        answers: [
            { text: 'int[] arr;', correct: true },
            { text: 'int arr[];', correct: true },
            { text: 'array int arr;', correct: false }
        ]
    },

    {
        question: 'Which method is used to start a thread in Java?',
        answers: [
            { text: 'start()', correct: true },
            { text: 'run()', correct: false },
            { text: 'execute()', correct: false },
            { text: 'begin()', correct: false }
        ]
    },
    {
        question: 'How do you handle exceptions in Java?',
        answers: [
            { text: 'try-catch block', correct: true },
            { text: 'if-else block', correct: false },
            { text: 'switch-case block', correct: false },
            { text: 'loop block', correct: false }
        ]
    },
    {
        question: 'Which of the following is an immutable class in Java?',
        answers: [
            { text: 'String', correct: true },
            { text: 'ArrayList', correct: false },
            { text: 'HashMap', correct: false },
            { text: 'LinkedList', correct: false }
        ]
    },
    {
        question: 'What is the time complexity of accessing an element in an ArrayList by index in Java?',
        answers: [
            { text: 'O(1)', correct: true },
            { text: 'O(log n)', correct: false },
            { text: 'O(n)', correct: false },
            { text: 'O(n log n)', correct: false }
        ]
    },
    {
        question: 'Which data structure uses LIFO (Last In First Out) principle?',
        answers: [
            { text: 'Queue', correct: false },
            { text: 'Stack', correct: true },
            { text: 'Linked List', correct: false },
            { text: 'Tree', correct: false }
        ]
    },
    {
        question: 'What is the time complexity of binary search on a sorted array?',
        answers: [
            { text: 'O(n)', correct: false },
            { text: 'O(log n)', correct: true },
            { text: 'O(n log n)', correct: false },
            { text: 'O(1)', correct: false }
        ]
    },
    {
        question: 'In which data structure is a node connected to its previous and next nodes?',
        answers: [
            { text: 'Array', correct: false },
            { text: 'Stack', correct: false },
            { text: 'Queue', correct: false },
            { text: 'Doubly Linked List', correct: true }
        ]
    },
    {
        question: 'What is the space complexity of an algorithm that uses a constant amount of extra space?',
        answers: [
            { text: 'O(n)', correct: false },
            { text: 'O(log n)', correct: false },
            { text: 'O(1)', correct: true },
            { text: 'O(n^2)', correct: false }
        ]
    }
];


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');
const feedbackElement = document.getElementById('feedback');

function startGame() {
    console.log('Game started');
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    feedbackElement.textContent = '';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    console.log('Showing question:', question.question);
    questionElement.textContent = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    console.log('Selected answer:', answer.text);
    const correct = answer.correct;
    if (correct) {
        score++;

        feedbackElement.textContent = 'Correct!';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = 'Wrong!';
        feedbackElement.style.color = 'red';
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.textContent === answer.text) {
            button.style.backgroundColor = correct ? 'green' : 'red';
        }
    });
    nextButton.classList.remove('hide');
}

function nextQuestion() {
    console.log('Next question button clicked');
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
        feedbackElement.textContent = '';
    } else {
        showScore();
    }
}

function showScore() {
    console.log('Showing final score');
    questionElement.textContent = `Quiz Over! Your final score is ${score}/${questions.length}`;
    answerButtons.innerHTML = '';
    nextButton.classList.add('hide');
    feedbackElement.textContent = '';
}

// Initialize the game
startGame();
