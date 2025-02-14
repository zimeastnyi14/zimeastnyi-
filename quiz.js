const questions = [
  { question: "How many local churches are in Zone Rehoboth?", options: ["7", "8", "9", "10"], correct: 2, hint: "It is greater than 8." },
  { question: "Which church is NOT part of Zone Bethel?", options: ["Monera", "Hatfield", "Chiremba", "St Mary’s"], correct: 1, hint: "It starts with 'H'." },
  { question: "Which of these churches is in Zone Cherub?", options: ["Kuwadzana", "Juru", "Hatfield", "Mbare"], correct: 1, hint: "It is not in Harare." },
  { question: "Who is the current NYI President for Zimbabwe East District?", options: ["Tanaka Kadore", "Ima Munkuli", "Richard Muvhava", "Freeman Zimbiri"], correct: 2, hint: "The answer starts with 'R'." },
  { question: "What year was the Nazarene NYI established?", options: ["1920", "1923", "1930", "1925"], correct: 1, hint: "It is in the early 1920s." },
  { question: "How many persons do Nazarenes believe God exists in?", options: ["One", "Two", "Three", "Four"], correct: 2, hint: "It is also called the Trinity." },
  { question: "According to Nazarene faith, Jesus Christ is:", options: ["A prophet", "Savior through His life, death, and resurrection", "A teacher", "A religious reformer"], correct: 1, hint: "The answer relates to salvation." },
  { question: "Which zone has the church 'Hatfield'?", options: ["Zone Rehoboth", "Zone Bethel", "Zone Eve", "Mt Camel Zone"], correct: 0, hint: "It starts with 'R'." }
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 100;
let timerInterval;

document.addEventListener("DOMContentLoaded", function() {
  shuffleQuestions();
  loadQuestion();
  startTimer();
});

function shuffleQuestions() {
  questions.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionButtons = document.querySelectorAll(".option");
  
  let currentQuestion = questions[currentQuestionIndex];
  
  questionElement.textContent = currentQuestion.question;
  optionButtons.forEach((button, index) => {
    button.textContent = currentQuestion.options[index];
  });

  updateProgressBar();
}

function checkAnswer(selected) {
  let currentQuestion = questions[currentQuestionIndex];

  if (selected === currentQuestion.correct) {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert("Game Over! Final score: " + score);
    clearInterval(timerInterval);
  }
}

function getHint() {
  let currentQuestion = questions[currentQuestionIndex];
  alert("Hint: " + currentQuestion.hint);
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.getElementById("timer").textContent = `00:${timer < 10 ? '0' + timer : timer}`;
    } else {
      clearInterval(timerInterval);
      alert("Time's up! Final score: " + score);
    }
  }, 1000);
}

function updateProgressBar() {
  let progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById("progress").style.width = `${progress}%`;
}