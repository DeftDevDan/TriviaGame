window.onload=first;
var time;
var timer, cont, autoRestart;
var q = 0, correct = 0, wrong = 0;
var triviaQuestion;
var trivia0, trivia1, trivia2, trivia3, trivia4, trivia5, trivia6, trivia7, trivia8, trivia9;

function first() {
	$("#questionBox").hide();
	$("#timeBox").hide();

	trivia0 = new trivia("What were Luke's aunt and uncle's job on Tatooine?", "Scrap collectors", "Moisture farmers", "Slaves", "Pod Racers", "Moisture farmers");
	trivia1 = new trivia("In how many languages is C-3PO fluent?", "More than 14 million", "About 3 million", "More than 6 million", "25 million", "More than 6 million");
	trivia2 = new trivia("What is the Wookiee's home world?", "Tatooine", "Alderaan", "Kashyyyk", "Bespin", "Kashyyyk");
	trivia3 = new trivia("Who actually shot first?", "Greedo", "Han Solo", "Luke", "Chewbacca", "Han Solo");
	trivia4 = new trivia("Which character is partially named after George Lucas's son?", "Dexter Jettster", "Anakin Skywalker", "Yoda", "Ben", "Dexter Jettster");
	trivia5 = new trivia("In which movie does the camera pan back up after the crawl?", "Episode I: Phantom Menace", "Episode II: Attack of the Clones", "Episode III: Revenge of the Sith", "Episode IV: A New Hope", "Episode II: Attack of the Clones");
	trivia6 = new trivia("How many Dewbacks were in the original 1997 theatrical cut of the first Star Wars movie?", "Twelve", "Six", "Seven", "Two", "Two");
	trivia7 = new trivia("Which species stole the plans to the Death Star", "Ewoks", "Hutts", "Sarlaccs", "Bothans", "Bothans");
	trivia8 = new trivia("Which bounty hunter in the Empire Strikes Back is wearing an old costume from a Doctor Who episode?", "Bossk", "Boba Fett", "Jango Fett", "Cade Bane", "Bossk");
	trivia9 = new trivia("Who kissed Leia first?", "Obi-Wan", "Luke", "Han", "Yoda", "Luke");

	triviaQuestion = [trivia0, trivia1, trivia2, trivia3, trivia4, trivia5, trivia6, trivia7, trivia8, trivia9];
}

function start() {
	time = 15;
	$("body").css("color", "#2719C7");
	$("#startBox").hide();
	$("#timeBox").animate().fadeIn(1000);
	$("#questionBox").animate().fadeIn(1000);
	clearInterval(cont);
	clearInterval(autoRestart);
	timer = setInterval(function() {
		$("#timer").html(time);
		time--;
		if (time < 0) {
			lose();
		}
	}, 1000);
	$("#topLabel").html("question " + (q + 1));
	$("#q").html(triviaQuestion[q].question);
	$("#ans0").html(triviaQuestion[q].option1);
	$("#ans1").html(triviaQuestion[q].option2);
	$("#ans2").html(triviaQuestion[q].option3);
	$("#ans3").html(triviaQuestion[q].option4);
	$("#wins").html(correct);
	$("#startButton").removeClass();
	$("#startButton").addClass("btn-primary");
}

function lose() {
	clearInterval(timer);
	wrong++;
	q++;

	$("body").css("color", "#CE0C2C");
	if (q == 10) {
		clearInterval(timer);
		$("#alertStart").html("You got " + correct + "correct, and " + wrong + "wrong");
		$("#startButton").removeClass();
		$("#startButton").addClass("btn-success");
		q = 0;
		correct = 0;
		wrong = 0;
		startBoxShow();
		var restart = 10;
		autoRestart = setInterval(function() {
			$("#startButton").html("Start Over " + restart);
			restart--;
			if(restart < 0) {
				start();
			}
		}, 1000);
	} else {
		clearInterval(timer);
		$("#alertStart").html("Boo, you suck, you're a loser!");
		var contTimer = 10;
		cont = setInterval(function() {
			$("#startButton").html("Continue " + contTimer);
			contTimer--;
			if (contTimer < 0) {
				start();
			}
		}, 1000);
		$("#startButton").removeClass();
		$("#startButton").addClass("btn-success");
		startBoxShow();
	}
	$("#startButton").removeClass();
	$("#startButton").addClass("btn-danger");


	startBoxShow();
}

function correctAnswer() {
	correct++;
	q++;
	$("body").css("color", "#17AF0A");
	if (q == 10) {
		clearInterval(timer);
		$("#alertStart").html("You got " + q + "correct, and " + wrong + "wrong");
		$("#startButton").removeClass();
		$("#startButton").addClass("btn-success");
		q = 0;
		correct = 0;
		wrong = 0;
		startBoxShow();
		var restart = 10;
		autoRestart = setInterval(function() {
			$("#startButton").html("Start Over " + restart);
			restart--;
			if(restart < 0) {
				start();
			}
		}, 1000);
	} else {
		clearInterval(timer);
		$("#alertStart").html("Great job! Continue When Ready");
		var contTimer = 10;
		cont = setInterval(function() {
			$("#startButton").html("Continue " + contTimer);
			contTimer--;
			if (contTimer < 0) {
				start();
			}
		}, 1000);
		$("#startButton").removeClass();
		$("#startButton").addClass("btn-success");
		startBoxShow();
	}
}

function checkAnswer(choice) {
	if (choice == 0 && triviaQuestion[q].option1 == triviaQuestion[q].correct) {
		correctAnswer();
	} else if (choice == 1 && triviaQuestion[q].option2 == triviaQuestion[q].correct) {
		correctAnswer();
	} else if (choice ==2 && triviaQuestion[q].option3 == triviaQuestion[q].correct) {
		correctAnswer();
	} else if (choice == 3 && triviaQuestion[q].option4 == triviaQuestion[q].correct) {
		correctAnswer();
	} else {
		lose();
	}
}

function trivia(question, option1, option2, option3, option4, correct) {
	this.question = question;
	this.option1 = option1;
	this.option2 = option2;
	this.option3 = option3;
	this.option4 = option4;
	this.correct = correct;
}

function startBoxShow() {
	$("#startBox").animate().fadeIn(1000);
	$("#timeBox").animate().hide();
	$("#questionBox").animate().hide();
}