//create vairables for elements we will target with js.
var startContainer = document.getElementById("start");
var beginButton = document.getElementById("begin");
var questionContainer = document.getElementById("questionSection");
var questionTitle = document.getElementById("title");
var choicesContainer = document.getElementById("choices");
var endContainer = document.getElementById("end");
var score = document.getElementById("final-score");
var initial = document.getElementById("initals");
var submitButton = document.getElementById("submit");
var timerEl = document.getElementById("timer");
var time = 75;
var timeId;
var index = 0;

var questionArray = [
	{
		title: "what is independance date",
		choices: ["march 4th", " july 4th", "septerner 10th", "jannuary 1st"],
		answer: "july 4th"
	},
	{
		title: "what date is christmas",
		choices: ["man", "woman", "bigfoot", "dog"],
		answer: "man"
	},
	{
		title: "what date is christmas",
		choices: ["man", "woman", "bigfoot", "dog"],
		answer: "woman"
	}
];

function start(){
	//hide startContainer
	startContainer.setAttribute("class", "hide");
	//show questionContainer
	questionContainer.removeAttribute("class");
	//start timer
	timeId = setInterval(function(){
		time--;
		timerEl.textContent = time;

		// if(time <= 0){
		// 	gameOver();
		// }

	},1000)

	//start the questions
	var currentQuestion = questionArray[index]

	//display the question title in html
	questionTitle.textContent = currentQuestion.title;

	//create a for loop that goes over the choice array and create button elements with the choices in the aray
}

beginButton.onclick = start;
