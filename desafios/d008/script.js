var botao = document.getElementById('botao')
botao.addEventListener('click' , desconto)
var res = window.document.getElementById('res')
function desconto(){
    var produto = window.prompt('Qual é o produto que você está comprando?')
    var valor = window.prompt(`Qual é o preço do ${produto}?`)
    value = Number(valor)
    res.innerHTML = `Calculando o desconto de 10% para ${produto}:`
    var original = window.document.getElementById('original')
    original.innerHTML = `O preço original era de R$${value}.`
    var desconto = window.document.getElementById('desconto')
    desconto.innerHTML = `Você acaba de ganhar R$${value / 10} de desconto (-10%).`
    var final = window.document.getElementById('final')
    final.innerHTML = `No fim, você vai pagar R$${value - value/10} no produto ${produto}.`

    
}
