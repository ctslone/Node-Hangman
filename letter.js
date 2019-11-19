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
    this.letterGuess = function (charachter) {
        if (this.charachter === charachter) {
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