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
    question: "Which one of these is a English movie??",
    choice1: "Kirik Party",
    choice2: "Raajakumara",
    choice3: "Avengers",
    choice4: "K G F",
    answer: 3
  },
  {
    question: "Which one of these is a Kannada movie??",
    choice1: "John Cena",
    choice2: "K G F",
    choice3: "Housefull",
    choice4: "Iron man",
    answer: 2
  },
  {
    question: "Which one of these is a telugu movie??",
    choice1: "Maga-dheera",
    choice2: "Kirik party",
    choice3: "Pirates of the carribean",
    choice4: "WALL-E",
    answer: 1
  },
  {
    question: "Which one these Indian movie got OSCAR award?",
    choice1: "Life of Pi",
    choice2: "Captain America",
    choice3: "Black widow",
    choice4: "Black panther",
    answer: 1
  },
  {
    question:
      "What is full form of K.G.F?",
    choice1: "Kolar Gold Field",
    choice2: "Karnataka Gold Film",
    choice3: "Kolar Gold Film",
    choice4: "Karnataka Gold Field",
    answer: 1
  },
  {
    question: "What is Bangalore Days?",
    choice1: "Kannada movie",
    choice2: "Telugu movie",
    choice3: "English movie",
    choice4: "Malayalam movie",
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
