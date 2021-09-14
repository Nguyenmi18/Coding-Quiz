//create vairables for elements we will target with js.
var startContainer = document.getElementById("start");
var beginButton = document.getElementById("begin");
var questionContainer = documment.getElementById("questionSection");
var questionTitle = document.getElementById("title");
var choicesContainer = document.getElementById("choices");
var endContainer = document.getElementById("end");
var score = document.getElementById("final-score");
var initial = document.getElementById("initals");
var submitButton = document.getElementById("submit");

var questionArray = [
	{
		title: "what is independance date",
		choices: ["march 4th", " july 4th", "septerner 10th", "jannuary 1st"],
		answer: "july 4th"
	},
	{
		title: "what date is christmas",
		choices: ["", "woman", "bigfoot", "dog"],
		answer: "man"
	},
	{
		title: "what date is christmas",
		choices: ["", "woman", "bigfoot", "dog"],
		answer: "man"
	}
];
