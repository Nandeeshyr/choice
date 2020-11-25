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
    question: "Which one of these is south indian food??",
    choice1: "Maggi",
    choice2: "Burger",
    choice3: "Dosa",
    choice4: "Pizza",
    answer: 3
  },
  {
    question: "Which one of these is chinese origin food??",
    choice1: "Roti",
    choice2: "Momos",
    choice3: "Idli",
    choice4: "Poori",
    answer: 2
  },
  {
    question: "Which one of these is English origin food??",
    choice1: "Burger",
    choice2: "Gobi manchurian",
    choice3: "Chicken biriyani",
    choice4: "Veg Hydrabadi",
    answer: 1
  },
  {
    question: "Which of the following food needs BUNS?",
    choice1: "Gobi-manchurian",
    choice2: "Babycorn-manchurian",
    choice3: "Burger",
    choice4: "Noodles",
    answer: 3
  },
  {
    question:"Which one of the following is a sweet?",
    choice1: "Gulab Jamun",
    choice2: "Momos",
    choice3: "Roti",
    choice4: "Burger",
    answer: 1
  },
  {
    question: "Which place is famous for butter dosa?",
    choice1: "Bangalore",
    choice2: "Ranchi",
    choice3: "Hariyana",
    choice4: "Davanagere",
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
