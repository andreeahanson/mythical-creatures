class Unicorn {
  constructor (name, color) {
    this.name = name;
    this.color = color;
    if (this.color === undefined) {
      this.color = 'white';
    } else {
      this.color = color;
    }
  }
  isWhite() {
    if (this.color !== 'white') {
      return false;
    }
  }
  says(says) {
    return `**;* ${says} *;**`;
  }
}









module.exports = Unicorn;