// starting global variables should include:
// winning word
// letters guessed array
// guesses remaining
// random words array

var Word = require("./word")
var inquirer = require("inquirer");
var colors = require("colors")


var winningWord;
var currentWord = "";
// var lettersGuessed = [];
var guessesRemaining = 10;
var allWords = ["hockey", "football", "soccer", "basketball", "baseball", "wrestling", "rugby", "lacrosse", "tennis"];
// invoke a start game function right off the bat to start the game
// startgame function should pick a random word from a potential words array
newWord();
startGame();

function newWord() {
    guessesRemaining = 10;
    console.log("Try to guess the sport!")
    currentWord = allWords[Math.floor(Math.random() * allWords.length)];
    // console.log(currentWord)
    winningWord = new Word(currentWord);
    winningWord.stringz()
    // console.log(winningWord.wordArray[0]) 
}

function wordGuessed() {
    // check to see if all letters have been guessed yet, using the letter js file
    for (var i = 0; i < winningWord.wordArray.length; i++) {
        if (!winningWord.wordArray[i].guessedYet) {
            return false;
        }
    }
    return true;
}

// start game/new game function 
function startGame() {
    // if user out of guesses, pick a new word and start the game over
    if (guessesRemaining === 0) {
        console.log("You're out of guesses!".yellow + " Please try again!")
        newWord()
        startGame()
    }
    // if user hasnt guessed word yet, keep prompting the user
    else {
        if (!wordGuessed()) {
            inquirer.prompt([
                {
                    type: "input",
                    name: "user_guess",
                    message: "Guess a letter: ",
                }
            ]).then(function (userRes) {
                winningWord.guessCheck(userRes.user_guess)
                winningWord.stringz()
                // console.log(winningWord.wordArray)
                if (winningWord.guessCheck(userRes.user_guess)) {
                    console.log("You guessed right! Keep it up!".green)
                    startGame()
                }
                else {
                    guessesRemaining--
                    console.log("Incorrect!".red + " You have " + guessesRemaining + " guesses left.")
                    startGame()
                }
            })
        }
        else {
            console.log("Congrats! You win. Time for a new word.")
            newWord()
            startGame()
        }
    }
}

// TESTING CODE

// Tried to check for word completion this way but it would set all guessed to true whenever the user guessed the last letter of the word, regardless if all other letters had been guessed...problem with for loop or it sees the final letter as a end????

// var allGuessed = false;
    // for (var i = 0; i < winningWord.wordArray.length; i++) {
    //     if (winningWord.wordArray[i].guessedYet === false) {
    //         allGuessed = false;
    //     }
    //     else {
    //         allGuessed = true;
    //     }
    // }
    // if (allGuessed === false) {
    // do the inquirer
    // }

// function allLettersGuessed() {
//     // console.log(winningWord.join(''))
//     // winningWord.stringz() 
//     // console.log(currentWord)
//     // if (winningWord.join('') === currentWord) {

//     // }
//     for (var i = 0; i < winningWord.wordArray.length; i++) {
//         if (winningWord.wordArray[i].guessedYet) {

//         }
//     }
// }

