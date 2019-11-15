var letter = require("./letter")

function Word (sport) {
    this.sportWords = [sport];
    this.makeWord = function () {
        // returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    }
    this.callGuess = function (letter) {
        // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    }

}