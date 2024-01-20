var botao = window.document.getElementById('botao')
botao.addEventListener('click', calcular)

function calcular(){
    var num = window.prompt('Digite um número inteiro qualquer!')
    n = Number(num)
    window.alert(`O antecessor do número ${n} é igual a ${n = n - 1}! \n O sucessor do número ${n = n + 1} é igual a ${n = n + 1}!`)
}