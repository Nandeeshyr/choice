const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "What is Sin 0 ??",
    choice1: "1",
    choice2: "1/2",
    choice3: "0",
    choice4: "2",
    answer: 3
  },
  {
    question: "What is Cos 0 ??",
    choice1: "0",
    choice2: "1",
    choice3: "1/2",
    choice4: "3",
    answer: 2
  },
  {
    question: "Which of the following does Pythagoras theorem belongs??",
    choice1: "Triangle",
    choice2: "Circle",
    choice3: "Right Angled Triangle",
    choice4: "Square",
    answer: 3
  },
  {
    question: "What is (SIN30 + COS 0) =?",
    choice1: "3",
    choice2: "0",
    choice3: "1",
    choice4: "3/2",
    answer: 4
  },
  {
    question:"What is value of 4! (factorial)?",
    choice1: "23",
    choice2: "24",
    choice3: "25",
    choice4: "26",
    answer: 2
  },
  {
    question: "What is value of (8+6-2)?",
    choice1: "11",
    choice2: "12",
    choice3: "13",
    choice4: "14",
    answer: 2
  }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
                        //go to the end page
    return window.location.assign("./end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply == "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
