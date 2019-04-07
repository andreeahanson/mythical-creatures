class Pirate {
  constructor (name, job) {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.heinousAct = 0;
    this.booty = 0;
    if (this.job === undefined) {
      this.job = "Scallywag";
    } else {
      this.job = job;
    }
  }
  commitHeinousAct() {
    this.heinousAct++
    if(this.heinousAct>= 3) {
      this.cursed = true;
    }
  }
  robShip() {
    this.booty = 100;
    return 'YAARRR!';
  }
}


module.exports = Pirate;