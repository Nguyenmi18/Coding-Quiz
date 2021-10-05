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
var startOverBtn = document.getElementById('startOver')

var questionArray = [
	{
		title: "what is independance date",
		choices: ["march 4th", " july 4th", "september 10th", "jannuary 1st"],
		answer: "july 4th"
	},
	{
		title: "what month is christmas",
		choices: ["dog", "july", "bigfoot", "december"],
		answer: "december"
	},
	{
		title: "which of the covid vaccine report and blood-clot ? ",
		choices: ["pfizer", "Moderna", "AztraZeneca", "Janssen-Janssen"],
		answer: "Janssen-Janssen"
	}
];

function start() {
	// time = 75;
	//hide startContainer
	startContainer.setAttribute("class", "hide");
	//show questionContainer
	questionContainer.removeAttribute("class");
	//start timer
	timeId = setInterval(function () {
		time--;
		timerEl.textContent = time;

		if (time <= 0) {
			gameOver();
		}

	}, 1000)

	getQuestions()

}

function getQuestions() {
	//start the questions
	var currentQuestion = questionArray[index]

	//display the question title in html
	questionTitle.textContent = currentQuestion.title;

	choicesContainer.innerHTML = ""

	//create a for loop that goes over the choice array and create button elements with the choices in the aray

	for (let i = 0; i < currentQuestion.choices.length; i++) {

		var choiceOption = document.createElement("button");

		choiceOption.setAttribute('class', 'choice');
		choiceOption.setAttribute('value', currentQuestion.choices[i])

		choiceOption.textContent = currentQuestion.choices[i];


		//add click event that captures the value and compares to the answer. 
		choiceOption.onclick = userAnswer;

		choicesContainer.append(choiceOption)


	}
}
function userAnswer() {
	//use this.value to check the value of the button against the answer in the oject. If the answer is wrong deduct time from the clock
	if (this.value !== questionArray[index].answer) {
		//subtract time
		time -= 10;
		if (time < 0) {
			time = 0
		}
	}

	timerEl.textContent = time;

	//increase the index of the question array
	index++

	if(index === questionArray.length){
		gameOver()
	}else{
		getQuestions()
	}

}

function gameOver() {
	//stops the timer
	clearInterval(timeId)

	//hide questions container
	questionContainer.setAttribute("class", "hide");
	//show endscreenContainer
	endContainer.removeAttribute("class");

	//show final score in container

	score.textContent = time;

}

function saveScoreAndInititals(){
	var userInitials = initial.value;
//if there is data saved in local storage we will get info and add to it or it will return an empty array
	var highscoreArray = JSON.parse(localStorage.getItem('highscores')) || [];
//create a new object witht the score and the inittials
	var userScore= {
		score: time,
		initials: userInitials
	}

	highscoreArray.push(userScore)
	localStorage.setItem('highscores', JSON.stringify(highscoreArray))
	showHighScore()
}

function showHighScore(){
	//hide end container
	endContainer.setAttribute("class", "hide");
	//show highscoreContainer
	var highscoreContainer = document.getElementById('highscoreContainer')
	highscoreContainer.removeAttribute("class");

	var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

	//create a loop for highscore array

	highscores.forEach(function(score){
		var li = document.createElement('li')
		li.textContent = score.initials + "-" + score.score;

		var ol = document.getElementById('scoreList')
		ol.appendChild(li)
	});
}

function startGameOver(){
	var highscoreContainer = document.getElementById('highscoreContainer')
	//hide end container
	highscoreContainer.setAttribute("class", "hide");
	//show highscoreContainer
	startContainer.removeAttribute("class");
	time = 75;
	timerEl.textContent = time;
}



beginButton.onclick = start;
submitButton.onclick = saveScoreAndInititals;
startOverBtn.onclick = startGameOver;