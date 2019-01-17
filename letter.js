var Letter = function(character) {
  this.character = character;
  this.letterGuessed = false;
  this.isGuessed = function() {
    if (this.letterGuessed == true) {
      return this.character;
    } else {
      return "_";
    }
  };
  this.checkCharacter = function(char) {
    if (this.character === char) {
      this.letterGuessed = true;
    }
  };
};

module.exports = Letter;

/*console.log("Program starting");

var myLetter = new Letter("A");
log();
myLetter.checkCharacter("C");
log();
myLetter.checkCharacter("A");
log();

function log() {
  console.log(myLetter.character);
  console.log(myLetter.letterGuessed);
  console.log(myLetter.isGuessed());
  console.log("---------");
}*/
