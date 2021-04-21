'use strict'
console.log('Task 5')

let nameIn = document.querySelector('#name-input')
const nameOut = document.querySelector('span#name-output')

const rename = () => {
  nameIn.value !== ''
    ? (nameOut.textContent = nameIn.value)
    : (nameOut.textContent = 'незнакомец')
}

nameIn.addEventListener('input', rename)
