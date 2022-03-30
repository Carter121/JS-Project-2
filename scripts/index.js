//* elements
const startQuizBtn = document.getElementById("start-btn");
const numOfQuestions = document.getElementById("question-count");
const numOfAnswers = document.getElementById("choice-count");

//* remove questions and scores from local storage and format the url
startQuizBtn.addEventListener("click", (e) => {
	e.preventDefault();
	localStorage.removeItem("questions");
	localStorage.removeItem("scores");
	window.location.href = `/quiz/?questions=${numOfQuestions.value}&answers=${numOfAnswers.value}&question=0`;
});
