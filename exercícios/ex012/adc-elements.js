let paragrafo = document.createElement('p')
const texto = document.createTextNode('Olá, aprendendo a inserir elementos')

paragrafo.appendChild(texto)

var body = document.getElementsByTagName('body') [0] 

body.appendChild(paragrafo)



var div = document.createElement('div')
div.appendChild(document.createTextNode('Olá'))

body.appendChild(div)