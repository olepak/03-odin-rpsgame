const possibleVariant = ["paper", "scissors", "rock"];
// Function for getting computer choice
function getComputerChoice(variant) {
	variant = possibleVariant;
	let randomNumber = Math.random();
	let index = Math.floor(randomNumber * variant.length);
	console.log("Computer choice is", variant[index]);
	return variant[index];
}

//Function for getting user choice
function getUserChoice() {
	let userInput = prompt(
		"Please enter s for scissors, or p for paper, or r for rock"
	);
	let userChoice;
	if (userInput === "s") {
		userChoice = "scissors";
		console.log("Your choice is", userChoice);
		return userChoice;
	} else if (userInput === "r") {
		userChoice = "rock";
		console.log("Your choice is", userChoice);
		return userChoice;
	} else if (userInput === "p") {
		userChoice = "paper";
		console.log("Your choice is", userChoice);
		return userChoice;
	} else {
		return false;
	}
}

// Function that plays a single round
function singleRound(playerSelection, computerSelection) {
	if (playerSelection === false) {
		alert("incorrect user input");
	} else if (playerSelection === computerSelection) {
		showEqual();
		return "equal";
	}
	// win situation
	else if (
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection == "scissors" && computerSelection == "paper")
	) {
		alert(
			showWin() + " " + showWhoBeatsWho(playerSelection, computerSelection)
		);
		return "player";
	}
	// lose situation
	else {
		alert(
			showLoose() + " " + showWhoBeatsWho(computerSelection, playerSelection)
		);
		return "computer";
	}
}

// Message functions
function showLoose() {
	let message = "You loose!";
	return message;
}

function showWin() {
	let message = "You win!";
	return message;
}

function showEqual() {
	alert("It is equal.");
}

function showWhoBeatsWho(winner, looser) {
	let message =
		winner.charAt(0).toUpperCase() +
		winner.slice(1) +
		" beats " +
		looser.charAt(0).toUpperCase() +
		looser.slice(1) +
		"!";
	return message;
}

//  Function game() which plays  five rounds, keeps score and reports a winner or a looser at the end.
function game() {
	let computerScore = 0;
	let playerScore = 0;
	for (let i = 0; i < 5; i++) {
		let round = singleRound(getUserChoice(), getComputerChoice());
		if (round === "player") {
			playerScore++;
		} else if (round === "computer") {
			computerScore++;
		}
	}
	if (computerScore < playerScore) {
		alert("Game over. You win");
	} else if (computerScore > playerScore) {
		alert("Game over. Computer wins");
	} else {
		alert("Game over. You are equal");
	}
	alert(playerScore + ":" + computerScore);
}
game();
