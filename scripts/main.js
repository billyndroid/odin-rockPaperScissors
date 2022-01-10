//randomly select from array and return result
function computerPlay(arr) {
    const randomArrayValue = Math.floor(Math.random() * arr.length);
    const item = arr[randomArrayValue];
    return item;
}

let itemArray = ["rock", "paper", "scissors"];
let result = computerPlay(itemArray);
console.log("The computer has chosen " + result);

// prompts user for input, gets user input converts to lower case and returns result as playerSelection 
let input = prompt("Type rock, paper or scissors to start game.");
console.log(`You have selected ${input}`);
var inputLower = input.toLowerCase();
playerSelection = inputLower;

// write function that plays one round of game that takes two parameters
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
            console.log("It's a draw, refresh to try again."); 
        } if (playerSelection === "rock" && computerSelection === "paper") {
            console.log ("You Lose! Paper beats Rock."); 
        } if (playerSelection === "paper" && computerSelection === "scissors") {
            console.log ("You Lose! Scissors beats Paper.");
        } if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log ("You Win! Scissors beats Paper.");
        } if (playerSelection === "paper" && computerSelection === "rock") {
            console.log ("You Win! Rock beats Paper.");
        } if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log ("You Win! Rock beats Scissors ");
        }
}
    
/*
  
  let playerSelection =  document.getElementById("input");
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
  

/*
function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw. Refresh to play again.";
    } if (playerSelection === "rock" && computerSelection === "paper") {
        return "paper wins. Refresh to try again.";
    } if (playerSelection === "");
}*/

/*let mainArray = ["rock", "paper", "scissors"];

function computerPlay() {
    let mainArray = ["rock", "paper", "scissors"];
    const randomArrayElement = Math.floor(Math.random() * 3);
    return("the computer has selected", randomArrayElement, mainArray[randomArrayElement]);
       
}

//console.log("the computer has selected", randomArrayElement, mainArray[randomArrayElement]);*/