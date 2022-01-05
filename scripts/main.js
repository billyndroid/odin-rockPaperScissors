let mainArray = ["rock", "paper", "scissors"];

function computerPlay() {
    let mainArray = ["rock", "paper", "scissors"];
    const randomArrayElement = Math.floor(Math.random() * 3);
    return("the computer has selected", randomArrayElement, mainArray[randomArrayElement]);
       
}

console.log("the computer has selected", randomArrayElement, mainArray[randomArrayElement]);