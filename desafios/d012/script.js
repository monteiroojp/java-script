var botao = document.getElementById('botao')
botao.addEventListener('click' , price)

var inst = document.getElementById('instrucao')
var titulo = document.getElementById('titulo')
var comp = document.getElementById('comparacao')
var conc = document.getElementById('conclusao')
var diftext = document.getElementById('diferenca')
var varitext = document.getElementById('variacao')


function price(){
    var oldprice = Number(window.prompt('Qual o preço anterior do produto?')).toFixed(2)
    var nowprice = Number(window.prompt('Qual é o preço atual do  produto?')).toFixed(2)
    var op = String(oldprice).replace('.' , ',')
    var np = String(nowprice).replace('.' , ',')

    inst.innerHTML = ''
    titulo.innerHTML = 'Analizando os valores informados:'
    comp.innerHTML = `O produto custava R$${op} e agora custa R$${np}.`

    if(oldprice < 0 || nowprice <0){    
        window.alert('Digite apenas números positivos!')
    }
    
    else if(oldprice > nowprice){
        conc.innerHTML = 'Hoje o produto está mais barato.'
        var dif = (oldprice - nowprice).toFixed(2)  
        var difs = String(dif).replace('.' , ',')
        diftext.innerHTML = `O preço caiu R$${difs} em relação ao preço anterior.`
        var vari = ((dif*100) / oldprice).toFixed(2)
        var varis = String(vari).replace('.' , ',')
        varitext.innerHTML = `Uma variação de ${varis}% para baixo `
    }

    else{
        conc.innerHTML = 'Hoje o produto está mais caro.'
        var dif = (nowprice - oldprice).toFixed(2)
        var difs = String(dif).replace('.' , ',')
        diftext.innerHTML = `O preço subiu R$${difs} em relação ao preço anterior.`
        var vari = ((dif*100) / oldprice).toFixed(2)
        var varis = String(vari).replace('.' , ',')
        varitext.innerHTML = `Uma variação de ${varis}% para cima `
    }
}