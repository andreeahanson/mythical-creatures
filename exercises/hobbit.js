
class Hobbit {
  constructor (name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
  };
  celebrateBirthday() {
    this.age ++;
    if (this.age <= 32) {
      this.adult = false;
    }
    if (this.age >= 33) {
      this.adult = true;
    }
  }
};


module.exports = Hobbit;







































































































// class Hobbit {
//   constructor (name, disposition){
//     this.name = name;
//     this.disposition = "homebody";
//     this.age = 0; 
//     this.adult = false;
//     this.isShort = true;
//     this.old = false;
//     this.hasRing = false;

//     if (this.name === "Frodo") {
//       this.hasRing = true;
//     } else {
//       this.hasRing = false;
//     }
//   }
//   celebrateBirthday(){
//       this.age++
//     if (this.age >=33) {
//       this.adult=true;
//     } else {
//       this.adult=false;
//     }
//     if (this.age <=100) {
//       this.old = false;
//     } else if (this.age >=101) {
//       this.old = true;
//     }
//   }
// }
  














// module.exports = Hobbit;