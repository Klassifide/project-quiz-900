popup = document.querySelector(".popup");

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    didSubmitAnswer = false;
    loadQuestion();
}