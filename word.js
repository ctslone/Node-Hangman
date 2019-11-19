var Letter = require("./letter")
// var letterObj = new Letter();

function Word(sportWord) {
    this.wordArray = sportWord.split("").map(eachLetter => { return new Letter(eachLetter) });
    // console.log(this.wordArray)

    this.stringz = function () {
        var underscoreWord = [];
        for (i = 0; i < this.wordArray.length; i++) {
                var wordString = this.wordArray[i].letterResult();
                underscoreWord.push(wordString);
        }
        console.log(underscoreWord.join(" ").toString())
    }
    this.secondFn = function (userLetter) {
        var hasBeenGuessed = false;
        for (i = 0; i < this.wordArray.length; i++) {
            if (this.wordArray[i].letterGuess(userLetter)) {
                hasBeenGuessed = true;
            } 
            // else {
            //     return false;
            // }    
        }
        if (hasBeenGuessed) {
            return true;
            // console.log("true")
        }
        else {
            return false;
            // console.log("false")
        };
    }
    
}
module.exports = Word;


// var test = new Word("Football")
// test.secondFn()
// Word("Football")
// Word("Bicycle")