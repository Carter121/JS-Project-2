//* elements
const scoreEl = document.querySelector(".score");

//* get the scores from local storage
const scoreArr = JSON.parse(localStorage.getItem("scores"));
let score = 0;

//* count how many correct answers
for (let i = 0; i < scoreArr.length; i++) {
	if (scoreArr[i]) score++;
}
//* display the score
scoreEl.textContent = `Your Score Is: ${score}/${scoreArr.length}`;
