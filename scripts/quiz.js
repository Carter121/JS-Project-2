const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.get("questions") == null || urlParams.get("answers") == null) {
	window.location.href = "/";
}
console.log(urlParams.get("questions"));
console.log(urlParams.get("answers"));

const questions = [
	{
		title: "g(n) = n^2 + 4 + 2n\nh(n) = -3n+2\nFind (g*h)(1)",
		answer: 7,
	},
	{
		title: "f(x) = 4x - 3\ng(x) = x^3 + 2x\nFind (f-g)(4)",
		answer: -59,
	},
	{
		title: "h(x) = 3x + 3\ng(x) = -4x + 1\nFind (g+g)(10)",
		answer: -6,
	},
	{
		title: "g(a) = 3a + 2\nf(a) = 2a - 4\nFind (g/f)(3)",
		answer: "11 / 2",
	},
	{
		title: "g(x) = 2x -5\nh(x) = 4x + 5\nFind g(3)-h(3)",
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
];
