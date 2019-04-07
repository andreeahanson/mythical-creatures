class Wizard {
    constructor (obj, string) {
      this.name = obj.name;
      this.bearded = obj.bearded;
      this.isRested = true;
      this.string = string;
      this.counter = 0;
      if (this.bearded === undefined) {
        this.bearded = true}
        else {
          this.bearded = false;
        }
    }
    incantation (string) {
      return string.toUpperCase();
    }
    cast () {
      this.counter++;
      if (this.counter >= 3) {
        this.isRested = false;
        return "I SHALL NOT CAST"
      }
      return "MAGIC BULLET";
    }
}











module.exports = Wizard;