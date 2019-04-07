class Sphinx {
  constructor(name) {
    this.name = null;
    this.riddles = [];
  }

  collectRiddle(riddle){
    this.riddles.push(riddle);
    if (this.riddles.length >3) {
      this.riddles.shift();
    }
  }

  attemptAnswer(answer) {
    if (this.riddles[0].answer===answer) {
      this.riddles.splice(0, 1);
    }

    for (var i=0; i>this.riddles.length; i++) {
      
    }
  }

}






module.exports = Sphinx;


