var botao = window.document.getElementById('botao')
botao.addEventListener('click' , calcular)

function calcular(){
    var item = window.prompt("Que produto você comprou?")
    var price = window.prompt(`Quanto custa o ${item}?`)
    var money = window.prompt(`Qual foi o dinheiro total que você deu no ${item}?`)

    p = Number(price)
    m  = Number(money)

    resultado = m - p

    if(item == 0){
        window.alert("Clique novamente e não deixe o quadro de respostas em branco")
    }
    
    else{
    window.alert(`Você comprou um ${item} que custou ${p} reais \n Como você deu ${m} reais, o troco será de ${resultado} reais!`)
    }
}