// 1. Write function getComputerChoice
const possibleVariant = [
	"paper",
	"scissors",
	"rock",
	"paper",
	"scissors",
	"rock",
];
function getComputerChoice(variant) {
	variant = possibleVariant;
	let randomNumber = Math.random();
	let index = Math.floor(randomNumber * variant.length);
	console.log(variant[index]);
	return variant[index];
}
function getUserChoice() {
	let userInput = prompt(
		"Please enter s for scissors, or p for paper, or r for rock"
	);
	let userChoice;
	if (userInput === "s") {
		userChoice = "scissors";
		console.log("Your choise is", userChoice);
		return userChoice;
	} else if (userInput === "r") {
		userChoice = "rock";
		console.log("Your choise is", userChoice);
		return userChoice;
	} else if (userInput === "p") {
		userChoice = "paper";
		console.log("Your choise is", userChoice);
		return userChoice;
	} else {
		return false;
	}
}
/* 2. Write a function that plays a single round
      The function should take two parameters - playerSelection
			and computerSelection.
			 then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
			 */
function singleRound(playerSelection, computerSelection) {
	if (playerSelection === false) {
		alert("incorrect user input");
	} else if (playerSelection === computerSelection) {
		showEqual();
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
	}
	// loose situation
	else if (
		(playerSelection === "paper" && computerSelection === "scissors") ||
		(playerSelection === "rock" && computerSelection === "paper") ||
		(playerSelection === "scissors" && computerSelection === "rock")
	) {
		alert(
			showLoose() + " " + showWhoBeatsWho(computerSelection, playerSelection)
		);
	} else {
		alert("game incomplete");
	}
}
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
singleRound(getUserChoice(), getComputerChoice());
singleRound(getUserChoice(), getComputerChoice());
singleRound(getUserChoice(), getComputerChoice());
singleRound(getUserChoice(), getComputerChoice());
singleRound(getUserChoice(), getComputerChoice());
/* 3. Write a new function called game() which plays a five rounds,
      keeps score and reports a winner or a looser at the end.
*/
