'use strict'
console.log('Task 4')

let counterValue = 0
const value = document.querySelector('#value')

const buttonDec = document.querySelector('button[data-action="decrement"]')
const buttonInc = document.querySelector('button[data-action="increment"]')

const increment = function () {
  counterValue++
  value.textContent = counterValue
}

const decrement = function () {
  counterValue--
  value.textContent = counterValue
}

buttonDec.addEventListener('click', decrement)
buttonInc.addEventListener('click', increment)
