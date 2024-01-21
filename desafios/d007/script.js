var botao = window.document.getElementById('botao')
var res = window.document.getElementById('res')
var cota = window.prompt('Antes de mais nada digite a cotação atual do dolár hoje!')
botao.addEventListener('click' , conversao)
c = Number(cota)

function conversao(){
    var money = window.prompt('Digite quanto de dinheiro em R$ você tem atualmente!')
    m = Number(money)
    var conta = m / c
    var resultado = conta.toFixed(2)
    res.innerHTML = `Esse dinheiro ao converter para dólar é aproximadamente igual a $${resultado}`

}
