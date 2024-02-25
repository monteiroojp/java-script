let tittleToBeReplaced = document.querySelector('h1')

let body = tittleToBeReplaced.parentNode

let newTittle = document.createElement('h3')
newTittle.classList = 'novo-titulo'
newTittle.appendChild(document.createTextNode('Novo-título'))

body.replaceChild(newTittle, tittleToBeReplaced)

console.log(body)