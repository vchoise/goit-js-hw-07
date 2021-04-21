'use strict'
console.log('Task 6')

let inputString = document.querySelector('#validation-input')

const validation = () => {
  if (
    parseInt(inputString.getAttribute('data-length'), 10) ===
    inputString.value.length
  ) {
    inputString.classList.remove('invalid')
    inputString.classList.add('valid')
  } else {
    inputString.classList.remove('valid')
    inputString.classList.add('invalid')
  }
}

inputString.addEventListener('blur', validation)
