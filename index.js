var letter = require("./letter")
var Word = require("./word")
var inquirer = require("inquirer");
// pseudocode
// starting global variables should include:
// winning word
// letters guessed array
// guesses remaining
// random words array

var winningWord;
var lettersGuessed = [];
var guessesRemaining = 10;
var allWords = ["hockey", "football"];
// invoke a start game function right off the bat to start the game
// startgame function should pick a random word from a potential words array

// need function to select a random word and make run it thriugh word.js
function newWord() {
    var currentWord = allWords[Math.floor(Math.random() * allWords.length)];
    console.log(currentWord)
    winningWord = new Word(currentWord);
    winningWord.stringz()
    // console.log(winningWord)
}


// start game/new game function 
// function startGame() {

//     inquirer.prompt([
//         {
//             type: "input",
//             name: "user-guess",
//             message: "Guess a letter: ",

//         }
//     ]).then(function (userRes) {

//     })
// }

// startGame();
newWord()