const questions = [
  {
    question: "Which of these animals is native to New Zealand?",
    options: ["Kangaroo", "Kiwi bird", "Koala", "Emu"],
    answer: "Kiwi bird",
  },
  {
    question: "What is the capital city of New Zealand?",
    options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
    answer: "Wellington",
  },
  {
    question: "What is the name of the indigenous people of New Zealand?",
    options: ["Maori", "Aborigines", "Inuit", "Sami"],
    answer: "Maori",
  },
  {
    question: "Which of these films was primarily shot in New Zealand?",
    options: [
      "Harry Potter series",
      "Lord of the Rings trilogy",
      "Pirates of the Caribbean",
      "Star Wars series",
    ],
    answer: "Lord of the Rings trilogy",
  },
  {
    question: "What is the highest mountain in New Zealand?",
    options: [
      "Mount Cook (Aoraki)",
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount McKinley",
    ],
    answer: "Mount Cook (Aoraki)",
  },
  {
    question: "Which city in New Zealand is known as the 'City of Sails'?",
    options: ["Auckland", "Wellington", "Dunedin", "Queenstown"],
    answer: "Auckland",
  },
  {
    question: "What is the official national sport of New Zealand?",
    options: ["Cricket", "Rugby Union", "Soccer", "Netball"],
    answer: "Rugby Union",
  },
  {
    question: "Which sea lies to the west of New Zealand?",
    options: ["Tasman Sea", "Coral Sea", "South China Sea", "Arafura Sea"],
    answer: "Tasman Sea",
  },
  {
    question: "What is the traditional Maori greeting called?",
    options: ["Haka", "Hongi", "Powhiri", "Waka"],
    answer: "Hongi",
  },
  {
    question:
      "Which New Zealand town is famous for its geothermal activity and Maori culture?",
    options: ["Rotorua", "Christchurch", "Hamilton", "Napier"],
    answer: "Rotorua",
  },
];

let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let didSubmitAnswer = false;

const questionEl = document.getElementById("question");
const option1El = document.getElementById("option1");
const option2El = document.getElementById("option2");
const option3El = document.getElementById("option3");
const option4El = document.getElementById("option4");
const submitButton = document.getElementById("submit");
const scoreDisplay = document.getElementById("scoreDisplay");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;
  option1El.innerText = currentQuestion.options[0];
  option2El.innerText = currentQuestion.options[1];
  option3El.innerText = currentQuestion.options[2];
  option4El.innerText = currentQuestion.options[3];

  document.querySelectorAll(".Option").forEach((option) => {
    option.style.backgroundColor = "";
    option.classList.remove("correct", "incorrect");
  });

  selectedAnswer = null;
  submitButton.innerText = "Submit Answer";
  didSubmitAnswer = false;
}

function selectOption(optionIndex) {
  const options = [option1, option2, option3, option4];
  selectedAnswer = questions[currentQuestionIndex].options[optionIndex - 1];

  options.forEach((option) => option.classList.remove("selected"));
  options[optionIndex - 1].classList.add("selected");
}

function checkAnswer() {
  if (selectedAnswer === null) {
    alert("Please select an option.");
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswer = currentQuestion.answer;

  document.querySelectorAll(".Option").forEach((option) => {
    if (option.innerText === correctAnswer) {
      option.classList.add("correct");
    } else if (option.innerText === selectedAnswer) {
      option.classList.add("incorrect");
    }
  });

  if (selectedAnswer === correctAnswer) {
    score++;
  }

  scoreDisplay.innerText = `Question: ${
    currentQuestionIndex + 1
  } | Score: ${score}`;
  submitButton.innerText = "Next Question";
  didSubmitAnswer = true;
}

function handleNext() {
  if (!didSubmitAnswer) {
    checkAnswer();
  } else {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      alert(`Quiz finished! Final score: ${score}`);
    }
  }
}

loadQuestion();

function restartQuiz() {