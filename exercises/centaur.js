class Centaur {
  constructor (name, breed) {
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.standing = true;
  this.layingDown = false;
  this.counter = 0;
}

  shoot() {
    this.counter++;    
    if (this.layingDown) {
      return "NO!"
    }
    if (this.counter< 3) {
    this.cranky = false;
    return "Twang!!!";
    } 
    else if (this.counter >= 3) {
    this.cranky = true;
    return "NO!";
    }
}

  run() {
    if (this.layingDown) {
      return "NO!";
    }
    this.counter++;
    if (this.counter >= 3) {
    this.cranky = !this.cranky;
  }
    return "Clop clop clop clop!!!"
}


  sleep() {
    this.counter = 0;
    this.cranky = false;
    if (this.layingDown) {
      return "ZZZZ";
    }
    else if (this.standing = true) {
      return "NO!";
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  
  drinkPotion() {
    this.cranky = !this.cranky;
    return "Not while I\'m laying down!";  
  }

}

module.exports = Centaur;