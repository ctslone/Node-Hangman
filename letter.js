function Letter(letter) {
    this.letter = letter.toString();
    this.guessedYet = false;
    this.letterResult = function () {
        if (this.guessedYet === true) {
            // console.log(this.letter)
            return this.letter
        }
        else {
            // console.log("_")
            return "_"
        }
    };
    this.letterGuess = function (letter) {
        if (this.letter === letter) {
            this.guessedYet = true;
            // console.log("guessed")
        }
        // else {
        //     console.log("nope")
        // }
    }
}
// var test = new Letter("A")
// test.letterChecker()

module.exports = Letter