var Letter = require("./letter")
// var letterObj = new Letter();

function Word(sportWord) {
    this.wordArray = sportWord.split("").map(eachLetter => { return new Letter(eachLetter) });

    this.stringz = function () {
        var underscoreWord = [];
        for (i = 0; i < this.wordArray.length; i++) {
                var wordString = this.wordArray[i].letterResult();
                underscoreWord.push(wordString);
        }
        console.log(underscoreWord.join(" ").toString())
    }
    
}
    // this.makeWord = function () {
    //     // returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    // }
    // this.callGuess = function (letter) {
    //     // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    // }
    // console.log(this.wordArray)


var test = new Word("Bicycle")
test.stringz()
// Word("Bicycle")