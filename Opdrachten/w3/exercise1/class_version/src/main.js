class Cookies {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  calc() {
    return this.a * this.b;
  }
}

var test = new Cookies(4, 5);
console.log(test.calc());
console.log(test);
