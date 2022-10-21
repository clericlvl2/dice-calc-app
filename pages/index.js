const calcBody = document.querySelector('.calc');
const calcOutputResult = calcBody.querySelector('.calc__output-result')
const calcForm = calcBody.querySelector('.calc__form');
const calcFormInput = calcForm.querySelector('.calc__form-input');

function rollClickHandler() {
  console.log('roll');
}

function controlClickHandler(value) {
  if (value === 'del') {
    calcFormInput.value = calcFormInput.value.slice(0,-1);
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
