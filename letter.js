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
