// 1. Write function getComputerChoice
const possibleVariant = ["paper", "scissors", "rock"];
function getComputerChoice(variant) {
	let randomNumber = Math.random();
	console.log(randomNumber);

	let index = Math.floor(randomNumber * variant.length);
	console.log(index);

	return variant[index];
}
let result = getComputerChoice(possibleVariant);
console.log(result);

// 2. Write a function that plays a single round
/* 3. Write a new function called game() which plays a five rounds,
      keeps score and reports a winner or a looser at the end.
*/
