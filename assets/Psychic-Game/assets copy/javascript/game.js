// Letter computer can choice from 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Defining my score bored 
var wins = 0;
var losses = 0;
var	guessLeft = 9;
var guessesSoFar = [];
var userGuess = null;
document.querySelector('#guessesLeft').innerHTML = guessLeft;

// Computer makes random guess 
var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
console.log(computerGuess);

function start (){
	guessLeft = 9;
	guessesSoFar = [];
	computerGuess = computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
	console.log(computerGuess);
	document.querySelector('#guessSoFar').innerHTML = guessesSoFar;
	document.querySelector('#guessesLeft').innerHTML = guessLeft;
}

//when user presses a alphapet key, it records it to UserGuess
document.onkeyup = function(event){
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess)

	if (guessesSoFar.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesLeft--;
		
	
		document.querySelector('#guessSoFar').innerHTML = guessesSoFar;
	}

    // wins recored
	if (userGuess === computerGuess) {
		wins++;
		document.querySelector('#wins').innerHTML = wins;
	}
    // Guess left to guess
	else if (userGuess !== computerGuess && guessLeft > 0){
	guessLeft--;
		if (guessLeft == 0) {
	
		}
		document.querySelector('#guessesLeft').innerHTML = guessLeft;
		
	}
    // Losses recored
	if (userGuess !== computerGuess && guessLeft === 0) {
		losses++;
		document.querySelector('#losses').innerHTML = losses;
		console.log(losses)
        // alret Game Over after one lost game 
		if (losses === 2) {
			alert("Game Over!")
		}
	}
}