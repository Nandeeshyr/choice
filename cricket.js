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
    question: "How many balls can be bowled in an over??",
    choice1: "7",
    choice2: "8",
    choice3: "6",
    choice4: "5",
    answer: 3
  },
  {
    question: "Who among these is a cricketer??",
    choice1: "John Cena",
    choice2: "Virat Kohli",
    choice3: "Ronaldo",
    choice4: "Messi",
    answer: 2
  },
  {
    question: "What is DRS??",
    choice1: "Digital Review System",
    choice2: "Dhoni Review System",
    choice3: "Don't Resign System",
    choice4: "Dark Review System",
    answer: 1
  },
  {
    question: "How many world cups INDIA have won?",
    choice1: "3",
    choice2: "4",
    choice3: "5",
    choice4: "2",
    answer: 1
  },
  {
    question:
      "What is full form of ICC?",
    choice1: "Indian Cricket Council",
    choice2: "Indigo Cricket Council",
    choice3: "International Cricket Council",
    choice4: "Indian Cadet Cops",
    answer: 3
  },
  {
    question: "How many players can be played in a team?",
    choice1: "9",
    choice2: "8",
    choice3: "7",
    choice4: "11",
    answer: 4
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
