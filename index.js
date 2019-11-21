var letter = require("./letter")
var Word = require("./word")
var inquirer = require("inquirer");
var colors = require("colors")
// pseudocode
// starting global variables should include:
// winning word
// letters guessed array
// guesses remaining
// random words array

var winningWord;
var currentWord = "";
var lettersGuessed = [];
var guessesRemaining = 10;
var allWords = ["hockey", "football", "soccer", "basketball", "baseball", "wrestling", "rugby", "lacrosse", "tennis"];
// invoke a start game function right off the bat to start the game
// startgame function should pick a random word from a potential words array

// need function to select a random word and make run it thriugh word.js
newWord();
startGame();

function newWord() {
    guessesRemaining = 10;
    console.log("Try to guess the sport!")

    currentWord = allWords[Math.floor(Math.random() * allWords.length)];
    console.log(currentWord)

    winningWord = new Word(currentWord);
    winningWord.stringz()
    // console.log(winningWord.wordArray[0]) 
}

function wordGuessed() {
    for (var i = 0; i < winningWord.wordArray.length; i++) {
        if (!winningWord.wordArray[i].guessedYet) {
            return false;
        }
    }
    return true;
}

// start game/new game function 
function startGame() {

    if (guessesRemaining === 0) {
        console.log("You're out of guesses!".yellow + " Please try again!")
        newWord()
        startGame()
    }

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
            // allGuessed = true;
            newWord()
            startGame()
        }
    }

    


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

    // }

    
}



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

// allLettersGuessed()
