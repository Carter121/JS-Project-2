const startQuizBtn = document.getElementById("start-btn");
const numOfQuestions = document.getElementById("question-count");
const numOfAnswers = document.getElementById("choice-count");

startQuizBtn.addEventListener("click", (e) => {
	e.preventDefault();
	console.log(numOfQuestions.value);
	console.log(numOfAnswers.value);
	window.location.href = `/quiz/?questions=${numOfQuestions.value}&answers=${numOfAnswers.value}`;
});
