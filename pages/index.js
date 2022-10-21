const calcBody = document.querySelector('.calc');
const calcOutputResult = calcBody.querySelector('.calc__output-result')
const calcForm = calcBody.querySelector('.calc__form');
const calcFormInput = calcForm.querySelector('.calc__form-input');

class Calc {
  constructor() {
    this.log = [];
  }

  add() {

  }

  substitute() {

  }

  derive() {

  }

  multiply() {

  }

  addToLog(value) {
    this.log.push(value);
  }
}

class Dice {
  constructor(value) {
    this.number = value.slice(0, value.indexOf('d'));
    this.edge = value.slice(value.indexOf('d'));
  }

  roll() {

  }
}

function rollClickHandler() {
  console.log('roll');
}

function controlClickHandler(value) {
  if (value === 'del') {
    calcFormInput.value = calcFormInput.value.slice(0, -1);
  }
  if (value === 'C') {
    calcForm.reset();
  }
}

calcBody.addEventListener('click', evt => {
  const isControl = evt.target.classList.contains('cell_type_control');
  const isRoll = evt.target.classList.contains('cell_type_roll');
  if (isControl) {
    return controlClickHandler(evt.target.textContent);
  }
  if (isRoll) {
    return rollClickHandler();
  }
  calcFormInput.value += evt.target.textContent;
})
