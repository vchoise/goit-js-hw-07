'use strict'
console.log('Task 2')

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]

const elements = []

for (let i = 0; i < ingredients.length; i++) {
  elements[i] = document.createElement('li')
  elements[i].textContent = ingredients[i]
}

elements.forEach((el) => ingredient.appendChild(el))
