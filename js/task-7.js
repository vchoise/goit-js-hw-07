'use strict'
console.log('Task 7')

const sizeControl = document.querySelector('input#font-size-control')
const text = document.querySelector('span#text')
sizeControl.setAttribute('min', '0')
sizeControl.setAttribute('max', '100')
sizeControl.setAttribute('step', '2')

const sizeChange = () => {
  text.style.fontSize = sizeControl.value + 'px'
}

sizeControl.addEventListener('input', sizeChange)
