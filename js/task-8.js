'use strict'
console.log('Task 8')

const boxes = document.querySelector('div#boxes')
const control = document.querySelector('#controls')
const numberInput = control.querySelector('input')
const createBtn = control.querySelector('button[data-action="render"]')
const deleteBtn = control.querySelector('button[data-action="destroy"]')
const array = []
let width = 30
let height = 30

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const createBoxes = (amount) => {
  console.log(amount)
  for (let i = 0; i < amount; i++) {
    array[i] = document.createElement('div')
    boxes.appendChild(array[i])

    console.log(array)
    array[i].style.width = width + 'px'
    array[i].style.height = height + 'px'
    array[i].style.background =
      'rgb(' +
      getRandomInt(255) +
      ', ' +
      getRandomInt(255) +
      ', ' +
      getRandomInt(255) +
      ')'
    width += 30
    height += 30
  }
}

const destroyBoxes = () => {}

createBtn.addEventListener(
  'click',
  createBoxes(parseInt(numberInput.value, 10)),
)
deleteBtn.addEventListener('click', destroyBoxes())
