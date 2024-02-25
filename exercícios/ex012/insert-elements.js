let contaienr = document.getElementById('container')

let divAfter = document.createElement('div')
divAfter.classList = 'div-after'
contaienr.appendChild(divAfter)

let divBefore = document.createElement('div')
divBefore.classList = 'div-before'

contaienr.insertBefore(divBefore, divAfter)

console.log(contaienr)