function Letter(charachter) {
    this.charachter = charachter.toString();
    this.guessedYet = false;
    this.letterResult = function () {
        if (this.guessedYet === true) {
            // console.log(this.charachter)
            return this.charachter
        }
        else {
            // console.log("_")
            return "_"
        }
    };
    this.letterGuess = function (input) {
        if (this.charachter === input) {
            this.guessedYet = true;
            return true;
            // console.log("guessed")
        }
        else {
            // console.log("nope")
            return false;
        }
    }
}
// var test = new Letter("A")
// test.letterChecker()

module.exports = Letter