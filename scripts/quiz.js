const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const questionTitle = document.getElementById("title");
const questionList = document.getElementById("list");
const questionNumEl = document.getElementById("questionNum");

if (urlParams.get("questions") == null || urlParams.get("answers") == null) {
	window.location.href = "/";
}

const numOfQuestions = urlParams.get("questions");
let numOfAnswers = urlParams.get("answers");

if (numOfAnswers < 4) {
	numOfAnswers = 4;
}
if (numOfAnswers > 6) {
	numOfAnswers = 6;
}

let questionNumber = urlParams.get("question");
questionNumber = parseInt(questionNumber);

const questions = [
	{
		title: "g(n) = n^2 + 4 + 2n<br>h(n) = -3n+2<br>Find (g*h)(1)",
		answer: 7,
	},
	{
		title: "f(x) = 4x - 3<br>g(x) = x^3 + 2x<br>Find (f-g)(4)",
		answer: -59,
	},
	{
		title: "h(x) = 3x + 3<br>g(x) = -4x + 1<br>Find (h+g)(10)",
		answer: -6,
	},
	{
		title: "g(a) = 3a + 2<br>f(a) = 2a - 4<br>Find (g/f)(3)",
		answer: "11 / 2",
	},
	{
		title: "g(x) = 2x -5<br>h(x) = 4x + 5<br>Find g(3)-h(3)",
		answer: -16,
	},
	{
		title: "6*7",
		answer: 42,
	},
	{
		title: "5*5",
		answer: 25,
	},
	{
		title: "sqrt of 25",
		answer: 5,
	},
	{
		title: "Area of a circle with a radius of 6",
		answer: 113.1,
	},
	{
		title: "Area of a square with a side measuring 6",
		answer: 36,
	},
	{
		title: "Perimeter of a rectangle with the sides 8 and 13",
		answer: 42,
	},
	{
		title: "Area of a rectangle with the sides 7 and 5",
		answer: 35,
	},
	{
		title: "Area of a rectangle with the sides 39 and 39",
		answer: 1521,
	},
	{
		title: "Area of a rectangle with the sides 9 and 81",
		answer: 729,
	},
	{
		title: "Area of a rectangle with the sides 98 and 15",
		answer: 1470,
	},
	{
		title: "Area of a rectangle with the sides 59 and 40",
		answer: 2360,
	},
	{
		title: "Area of a rectangle with the sides 84 and 7",
		answer: 588,
	},
	{
		title: "Area of a rectangle with the sides 29 and 19",
		answer: 551,
	},
	{
		title: "Area of a rectangle with the sides 61 and 81",
		answer: 4941,
	},
	{
		title: "Area of a rectangle with the sides 53 and 74",
		answer: 3922,
	},
	{
		title: "Area of a rectangle with the sides 62 and 53",
		answer: 3286,
	},
	{
		title: "Area of a rectangle with the sides 58 and 41",
		answer: 2378,
	},
	{
		title: "Area of a rectangle with the sides 22 and 32",
		answer: 704,
	},
	{
		title: "Area of a rectangle with the sides 53 and 91",
		answer: 4823,
	},
	{
		title: "Area of a rectangle with the sides 37 and 98",
		answer: 3626,
	},
	{
		title: "Area of a rectangle with the sides 45 and 13",
		answer: 585,
	},
	{
		title: "Area of a rectangle with the sides 10 and 31",
		answer: 310,
	},
	{
		title: "Area of a rectangle with the sides 9 and 18",
		answer: 162,
	},
	{
		title: "Area of a rectangle with the sides 2 and 0",
		answer: 0,
	},
	{
		title: "Area of a rectangle with the sides 89 and 13",
		answer: 1157,
	},
	{
		title: "Area of a rectangle with the sides 44 and 8",
		answer: 352,
	},
	{
		title: "Area of a rectangle with the sides 93 and 54",
		answer: 5022,
	},
	{
		title: "Area of a square with a side measuring 3",
		answer: 9,
	},
	{
		title: "Area of a square with a side measuring 39",
		answer: 1521,
	},
	{
		title: "Area of a square with a side measuring 61",
		answer: 3721,
	},
	{
		title: "Area of a square with a side measuring 72",
		answer: 5184,
	},
	{
		title: "Area of a square with a side measuring 75",
		answer: 5625,
	},
	{
		title: "Area of a square with a side measuring 52",
		answer: 2704,
	},
	{
		title: "Area of a square with a side measuring 62",
		answer: 3844,
	},
	{
		title: "Area of a square with a side measuring 10",
		answer: 100,
	},
	{
		title: "Area of a square with a side measuring 25",
		answer: 625,
	},
	{
		title: "Area of a square with a side measuring 49",
		answer: 2401,
	},
	{
		title: "Area of a square with a side measuring 75",
		answer: 5625,
	},
	{
		title: "Area of a square with a side measuring 13",
		answer: 169,
	},
	{
		title: "Area of a square with a side measuring 70",
		answer: 4900,
	},
	{
		title: "Area of a square with a side measuring 69",
		answer: 4761,
	},
	{
		title: "Area of a square with a side measuring 6",
		answer: 36,
	},
	{
		title: "Area of a square with a side measuring 45",
		answer: 2025,
	},
	{
		title: "Area of a square with a side measuring 7",
		answer: 49,
	},
	{
		title: "Area of a square with a side measuring 51",
		answer: 2601,
	},
	{
		title: "Area of a square with a side measuring 65",
		answer: 4225,
	},
	{
		title: "Area of a square with a side measuring 92",
		answer: 8464,
	},
	{
		title: "Perimeter of a square with a side measuring 20",
		answer: 80,
	},
	{
		title: "Perimeter of a square with a side measuring 93",
		answer: 372,
	},
	{
		title: "Perimeter of a square with a side measuring 30",
		answer: 120,
	},
	{
		title: "Perimeter of a square with a side measuring 56",
		answer: 224,
	},
	{
		title: "Perimeter of a square with a side measuring 47",
		answer: 188,
	},
	{
		title: "Perimeter of a square with a side measuring 76",
		answer: 304,
	},
	{
		title: "Perimeter of a square with a side measuring 54",
		answer: 216,
	},
	{
		title: "Perimeter of a square with a side measuring 75",
		answer: 300,
	},
	{
		title: "Perimeter of a square with a side measuring 4",
		answer: 16,
	},
	{
		title: "Perimeter of a square with a side measuring 58",
		answer: 232,
	},
	{
		title: "Perimeter of a square with a side measuring 81",
		answer: 324,
	},
	{
		title: "Perimeter of a square with a side measuring 8",
		answer: 32,
	},
	{
		title: "Perimeter of a square with a side measuring 90",
		answer: 360,
	},
	{
		title: "Perimeter of a square with a side measuring 44",
		answer: 176,
	},
	{
		title: "Perimeter of a square with a side measuring 37",
		answer: 148,
	},
	{
		title: "Perimeter of a square with a side measuring 82",
		answer: 328,
	},
	{
		title: "Perimeter of a square with a side measuring 8",
		answer: 32,
	},
	{
		title: "Perimeter of a square with a side measuring 84",
		answer: 336,
	},
	{
		title: "Perimeter of a square with a side measuring 18",
		answer: 72,
	},
	{
		title: "Perimeter of a square with a side measuring 27",
		answer: 108,
	},
	{
		title: "Area of a circle with a radius of 54 (Round to 2 decimal places)",
		answer: "9160.88",
	},
	{
		title: "Area of a circle with a radius of 77 (Round to 2 decimal places)",
		answer: "18626.50",
	},
	{
		title: "Area of a circle with a radius of 68 (Round to 2 decimal places)",
		answer: "14526.72",
	},
	{
		title: "Area of a circle with a radius of 73 (Round to 2 decimal places)",
		answer: "16741.55",
	},
	{
		title: "Area of a circle with a radius of 43 (Round to 2 decimal places)",
		answer: "5808.80",
	},
	{
		title: "Area of a circle with a radius of 75 (Round to 2 decimal places)",
		answer: "17671.46",
	},
	{
		title: "Area of a circle with a radius of 91 (Round to 2 decimal places)",
		answer: "26015.53",
	},
	{
		title: "Area of a circle with a radius of 23 (Round to 2 decimal places)",
		answer: "1661.90",
	},
	{
		title: "Area of a circle with a radius of 12 (Round to 2 decimal places)",
		answer: "452.39",
	},
	{
		title: "Area of a circle with a radius of 76 (Round to 2 decimal places)",
		answer: "18145.84",
	},
	{
		title: "Area of a circle with a radius of 23 (Round to 2 decimal places)",
		answer: "1661.90",
	},
	{
		title: "Area of a circle with a radius of 8 (Round to 2 decimal places)",
		answer: "201.06",
	},
	{
		title: "Area of a circle with a radius of 98 (Round to 2 decimal places)",
		answer: "30171.86",
	},
	{
		title: "Area of a circle with a radius of 40 (Round to 2 decimal places)",
		answer: "5026.55",
	},
	{
		title: "Area of a circle with a radius of 80 (Round to 2 decimal places)",
		answer: "20106.19",
	},
	{
		title: "Area of a circle with a radius of 28 (Round to 2 decimal places)",
		answer: "2463.01",
	},
	{
		title: "Area of a circle with a radius of 86 (Round to 2 decimal places)",
		answer: "23235.22",
	},
	{
		title: "Area of a circle with a radius of 44 (Round to 2 decimal places)",
		answer: "6082.12",
	},
	{
		title: "Area of a circle with a radius of 18 (Round to 2 decimal places)",
		answer: "1017.88",
	},
	{
		title: "Area of a circle with a radius of 1 (Round to 2 decimal places)",
		answer: "3.14",
	},
	{
		title: "Area of a triangle with a base of 76 and a height of 66",
		answer: 2508,
	},
	{
		title: "Area of a triangle with a base of 87 and a height of 5",
		answer: 217.5,
	},
	{
		title: "Area of a triangle with a base of 7 and a height of 55",
		answer: 192.5,
	},
	{
		title: "Area of a triangle with a base of 71 and a height of 24",
		answer: 852,
	},
	{
		title: "Area of a triangle with a base of 35 and a height of 8",
		answer: 140,
	},
	{
		title: "Area of a triangle with a base of 53 and a height of 57",
		answer: 1510.5,
	},
	{
		title: "Area of a triangle with a base of 40 and a height of 25",
		answer: 500,
	},
	{
		title: "Area of a triangle with a base of 6 and a height of 19",
		answer: 57,
	},
	{
		title: "Area of a triangle with a base of 63 and a height of 52",
		answer: 1638,
	},
	{
		title: "Area of a triangle with a base of 6 and a height of 19",
		answer: 57,
	},
	{
		title: "Area of a triangle with a base of 30 and a height of 15",
		answer: 225,
	},
	{
		title: "Area of a triangle with a base of 93 and a height of 81",
		answer: 3766.5,
	},
	{
		title: "Area of a triangle with a base of 64 and a height of 42",
		answer: 1344,
	},
	{
		title: "Area of a triangle with a base of 97 and a height of 17",
		answer: 824.5,
	},
	{
		title: "Area of a triangle with a base of 60 and a height of 83",
		answer: 2490,
	},
	{
		title: "Area of a triangle with a base of 82 and a height of 7",
		answer: 287,
	},
	{
		title: "Area of a triangle with a base of 39 and a height of 80",
		answer: 1560,
	},
	{
		title: "Area of a triangle with a base of 59 and a height of 14",
		answer: 413,
	},
	{
		title: "Area of a triangle with a base of 91 and a height of 3",
		answer: 1410.5,
	},
	{
		title: "Area of a triangle with a base of 11 and a height of 61",
		answer: 335.5,
	},
];

displayQuestion();

function displayQuestion() {
	if (localStorage.getItem("questions") != null) {
		const currentQuestion = JSON.parse(localStorage.getItem("questions"))[
			questionNumber
		];
		questionTitle.innerHTML = currentQuestion.title;
		questionNumEl.textContent = `Question #${questionNumber + 1}`;
		displayAnswers(currentQuestion);
	} else {
		getQuestions();
		displayQuestion();
	}
}

function displayAnswers(question) {
	const correctPlace = Math.floor(Math.random() * numOfAnswers);
	for (let i = 0; i < numOfAnswers; i++) {
		const answerEl = document.createElement("li");

		if (i == correctPlace) {
			answerEl.textContent = question.answer;
		} else {
			answerEl.textContent =
				questions[Math.round(Math.random() * questions.length - 1)].answer;
		}
		answerEl.classList.add("answer");
		questionList.appendChild(answerEl);

		answerEl.addEventListener("click", () => {
			checkAnswer(answerEl.textContent, question);
		});
	}
}

function getQuestions() {
	let tempQuestions = [];
	for (let i = 0; i < numOfQuestions; i++) {
		const questionIndex = Math.round(Math.random() * questions.length);
		tempQuestions.push(questions[questionIndex]);
	}
	localStorage.setItem("questions", JSON.stringify(tempQuestions));
}

function checkAnswer(input, question) {
	if (input == question.answer) {
		localStorage.setItem("");
	}
}
