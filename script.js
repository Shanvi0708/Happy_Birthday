function showMessage() {
  const msg = document.getElementById("hiddenMessage");
  msg.style.display = "block";
}
const quizData = [
  {
    question: "What's my favorite thing about you?",
    answers: [
      { text: "Your eyes 😊", points: 3 },
      { text: "Your kindness ❤️", points: 2 },
      { text: "Your jokes 😂", points: 1 },
    ],
  },
  {
    question: "How do I make you feel?",
    answers: [
      { text: "Excited about the future 🍿", points: 1 },
      { text: "Like the luckiest person alive 💃", points: 3 },
      { text: "Warm and loved every day 🌊", points: 2 },
    ],
  },
  {
    question: "How do I feel when I see you?",
    answers: [
      { text: "Super happy 😄", points: 1 },
      { text: "Butterflies 🦋", points: 2 },
      { text: "Like home 🏠", points: 3 },
    ],
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.innerText = current.question;
  answersEl.innerHTML = "";

  current.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.classList.add("quiz-answer-btn");
    btn.onclick = () => selectAnswer(index);
    answersEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
  resultEl.style.display = "none";
}

function selectAnswer(index) {
  score += quizData[currentQuestion].answers[index].points;
  nextBtn.style.display = "inline-block";

  // Disable all answer buttons
  const buttons = answersEl.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.style.display = "none";
  answersEl.style.display = "none";
  nextBtn.style.display = "none";

  let message = "";
  if (score >= 7) {
    message = "You know me so well! ❤️ I love you tons!";
  } else if (score >= 4) {
    message = "We’re a great match! 💕";
  } else {
    message = "You’re learning more about me every day! 😘";
  }

  resultEl.innerText = message;
  resultEl.style.display = "block";
}

// Initialize quiz on page load
loadQuestion();

window.onload = function() {
  const password = prompt("Enter the secret password to see the surprise:");
  if (password !== "iloveyou") {
    document.body.innerHTML = "<h2>Access Denied</h2>";
  }
};

