var Letter = require("./letter.js");
var Word = function(currentWord) {
  this.currentWord = currentWord;
  this.letters = [];
  this.createLtArray = function() {
    // method
    var wordArr = this.currentWord.split("");
    for (var i = 0; i < wordArr.length; i++) {
      //iterate through wordArr
      var newLetter = new Letter(currentWord[i]); // assigning object called newLetter for Letter and passing the first index of current word as a parameter
      this.letters.push(newLetter); //push() method to add newLetters to the end of an array this.letters
    }
  };
  this.createLtArray();
  this.getCurrentWord = function() {
    var l = "";
    this.letters.forEach(element => {
      //for each letter object in the Array
      l = l + element.isGuessed(); //call isGuessed method to get the current character ('A'/ _) and append it to a new strting var
    });
    return l.split("").join(" "); //returning the new string var.
  };
  this.update = function(char) {
    this.letters.forEach(element => {
      // this will take the first index of this.letter
      element.checkCharacter(char); // this will check whether the char matches the object or not
    });
  };
};

module.exports = Word;
