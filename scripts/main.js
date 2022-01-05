//randomly select from array and return result
function computerPlay(arr) {
    const randomArrayValue = Math.floor(Math.random() * arr.length);
    const item = arr[randomArrayValue];
    return item;
}

let itemArray = ["rock", "paper", "scissors"];

const result = computerPlay(itemArray);
console.log(result);

// plays one round of game
function playGame(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a draw. Refresh to play again.";
    } if (playerSelection == "rock" && computerSelection == "paper") {
        return "paper wins. Refresh to try again.";
    } if (playerSelection == "")
}

/*let mainArray = ["rock", "paper", "scissors"];

function computerPlay() {
    let mainArray = ["rock", "paper", "scissors"];
    const randomArrayElement = Math.floor(Math.random() * 3);
    return("the computer has selected", randomArrayElement, mainArray[randomArrayElement]);
       
}

//console.log("the computer has selected", randomArrayElement, mainArray[randomArrayElement]);*/