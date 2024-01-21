var nota01 = Number(window.prompt('Qual foi sua primeira nota?'))
var nota02 = Number(window.prompt('Qual foi sua segunda nota?'))
var res = window.document.getElementById('res')
res.innerHTML = `${nota01 + nota02}`