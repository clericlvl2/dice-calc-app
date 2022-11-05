class Dice {
  constructor(value) {
    this.number = value.slice(0, value.indexOf('d'));
    this.edge = value.slice(value.indexOf('d'));
  }

  roll() {

  }
}
