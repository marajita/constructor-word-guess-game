var Letter = require("./letter.js");
var Word = function(currentWord) {
  // creating a function for the constructor Word and passing the parameter current word
  this.currentWord = currentWord; //properties
  this.letters = []; // properties to capture the letters
  this.createLtArray = function() {
    // method
    //console.log("jojo");
    var wordArr = this.currentWord.split(""); // this will store the current word to the variable wordArr after spliting
    for (var i = 0; i < wordArr.length; i++) {
      //iterate through wordArr
      var newLetter = new Letter(currentWord[i]); // assigning object called newLetter for Letter and passing the first index of current word as a parameter
      this.letters.push(newLetter); //push() method to add newLetters to the end of an array this.letters
    }
  };
  this.createLtArray(); // calling createLtArray function
  this.getCurrentWord = function() {
    // method
    var l = ""; // new variable to pass the string
    this.letters.forEach(element => {
      //for each letter object in the Array
      l = l + element.isGuessed(); //call isGuessed method to get the current character ('A'/ _) and append it to a new strting var
    });
    return l.split("").join(" "); //returning the new string var.
  };
  this.update = function(char) {
    // new method, function taking char(whatever user types) as the parameter
    this.letters.forEach(element => {
      // this will take the first index of this.letter
      element.checkCharacter(char); // this will check whether the char matches the object or not
    });
  };
};

module.exports = Word;

/*var myWord = new Word("saru");
//console.log(myWord.letters);
console.log(myWord.getCurrentWord());
console.log(myWord.update("a"));
console.log(myWord.getCurrentWord());
console.log(myWord.update("u"));
console.log(myWord.getCurrentWord());*/
