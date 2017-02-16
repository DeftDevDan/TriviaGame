window.onload=first;
var time;
var timer;

function first() {
	$("#questionBox").hide();
	$("#timeBox").hide();

	//initialize objects here
}

function start() {
	time = 60;
	$("#timeBox").animate().show(1000);
	$("#startBox").animate().hide(1000);
	$("#questionBox").animate().fadeIn(1000);
	timer = setInterval(function() {
		$("#timer").html(time);
		time--;
		if (time < 0) {
			lose();
		}
	}, 1000);

	//set the question and options here
}

function lose() {
	clearInterval(timer);
	$("#alertStart").html("Boo, you suck, you're a loser! Try again?");
	$("#startButton").html("Start Over");
}

function correctAnswer() {
	clearInterval(timer);
	$("#alertStart").html("Great job! Continue When Ready");
	$("#startButton").html("Continue");
}

//Checks to see if the selected string is equal to the correct answer
function checkAnswer(choice) {
	
}

function trivia(question, option1, option2, option3, option4, correct) {
	this.question = question;
	this.option1 = option1;
	this.option2 = option2;
	this.option3 = option3;
	this.option4 = option4;
	this.correct = correct;
}