window.onload=first;
var time;
var timer;
var wins = 0;
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
	timer = setInterval(function() {
		$("#timer").html(time);
		time--;
		if (time < 0) {
			lose();
		}
	}, 1000);
	$("#topLabel").html("question " + (wins + 1));
	$("#q").html(triviaQuestion[wins].question);
	$("#ans0").html(triviaQuestion[wins].option1);
	$("#ans1").html(triviaQuestion[wins].option2);
	$("#ans2").html(triviaQuestion[wins].option3);
	$("#ans3").html(triviaQuestion[wins].option4);
	$("#wins").html(wins);
	$("#startButton").removeClass();
	$("#startButton").addClass("btn-primary");
}

function lose() {
	clearInterval(timer);
	wins = 0;
	$("#alertStart").html("Boo, you suck, you're a loser! Try again?");
	$("body").css("color", "#CE0C2C");
	$("#startButton").html("Start Over");
	$("#startButton").removeClass();
	$("#startButton").addClass("btn-danger");

	startBoxShow();
}

function correctAnswer() {
	wins += 1;
	$("body").css("color", "#17AF0A");
	if (wins == 10) {
		clearInterval(timer);
		$("#alertStart").html("You beat the game. No more questions left.");
		$("#startButton").html("Restart");
		$("#startButton").removeClass();
		$("#startButton").addClass("btn-success");
		wins = 0;
		startBoxShow();
	} else {
		clearInterval(timer);
		$("#alertStart").html("Great job! Continue When Ready");
		$("#startButton").html("Continue");
		$("#startButton").removeClass();
		$("#startButton").addClass("btn-success");
		startBoxShow();
	}
}

function checkAnswer(choice) {
	if (choice == 0 && triviaQuestion[wins].option1 == triviaQuestion[wins].correct) {
		correctAnswer();
	} else if (choice == 1 && triviaQuestion[wins].option2 == triviaQuestion[wins].correct) {
		correctAnswer();
	} else if (choice ==2 && triviaQuestion[wins].option3 == triviaQuestion[wins].correct) {
		correctAnswer();
	} else if (choice == 3 && triviaQuestion[wins].option4 == triviaQuestion[wins].correct) {
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