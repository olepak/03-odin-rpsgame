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
	let randomNumber = Math.random();
	let index = Math.floor(randomNumber * variant.length);
	console.log(variant[index]);
	return variant[index];
}
/* 2. Write a function that plays a single round
      The function should take two parameters - playerSelection
			and computerSelection.
			 then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
			 */
function singleRound(playerSelection, computerSelection) {
	alert(playerSelection);
	alert(computerSelection);
	alert(
		showWhoBeatsWho(playerSelection, computerSelection) + " " + showLoose()
	);
}
function showLoose() {
	let message = "You loose";
	return message;
}

function showWin() {
	alert("You won");
}
function showEqual() {
	alert("It is equal");
}
function showWhoBeatsWho(winner, looser) {
	let message = winner + " beats " + looser;
	return message;
}
singleRound(
	prompt("Please enter scissors, paper or rock"),
	getComputerChoice(possibleVariant)
);
/* 3. Write a new function called game() which plays a five rounds,
      keeps score and reports a winner or a looser at the end.
*/
