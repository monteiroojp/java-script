var botao = window.document.getElementById('botao')
botao.addEventListener('click', desafio)

function desafio(){
    var nome = window.prompt('Olá, Qual é o seu nome?')
    var idade = window.prompt(`Olá ${nome}, quantos anos você tem?`)
    window.alert(`Acabei de conhecer o ${nome}, com ${idade} anos de idade!`)

}