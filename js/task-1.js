'use strict'
console.log('Task 1')

const categories = document.querySelector('ul#categories')
const list = categories.querySelectorAll('li.item')
console.log(`В списке ${list.length} категории`)

list.forEach((el) => {
  console.log(`Категория: ${el.querySelector('h2').textContent}`)
  console.log(`Количество элементов: ${el.querySelectorAll('li').length}`)
})
