var Word = require("./word.js");
var inquirer = require("inquirer");

// List of words to choose from
var wordBank = ["lua", "perl", "scala", "clojure", "ruby", "haskell"];
var newWord = "";
var guesses = 8;

var questions = [
  {
    type: "input",
    name: "letter",
    message: "Guess a letter!",
    validate: function(value) {
      var pass = value.match(/^[(a-z)]{1}$/i); //regex
      if (pass) {
        return true;
      }

      return "Please enter a valid letter";
    }
  }
];
// Pick Random index from wordbank array
var randomIndex = Math.floor(Math.random() * wordBank.length);
randomWord = wordBank[randomIndex];

function playGame() {
  if (guesses >= 1) {
    inquirer.prompt(questions).then(answers => {
      //console.log(answers.letter);
      newWord.update(answers.letter);
      console.log(newWord.getCurrentWord());
      console.log("Guesses Remaining :" + guesses + "\n");
      if (checkWord()) {
        console.log("you won!!");
        return;
      } else {
        playGame();
      }
    });
  }
  if (guesses < 1) {
    console.log("Sorry you lost!");
    return;
  }
  guesses--;
}

function main() {
  console.log(
    "\n--------\nWelcome to the Word Guess Game. Guess the name of the programming languages!\n---------"
  );
  // Pick Random index from wordbank array
  var randomIndex = Math.floor(Math.random() * wordBank.length);
  randomWord = wordBank[randomIndex];

  newWord = new Word(randomWord);
  //console.log(randomWord);
  console.log(newWord.getCurrentWord());
}

function checkWord() {
  var retval = true;
  newWord.letters.forEach(element => {
    if (!element.letterGuessed) {
      retval = false;
    }
  });
  return retval;
}
//function endGame() {}

main();
playGame();
