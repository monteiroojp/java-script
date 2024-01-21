var botao = window.document.getElementById('botao')
botao.addEventListener('click', resultado)

var inst = document.getElementById('instruction')
var tittle = document.getElementById('titulo')
var notas = document.getElementById('notas')
var res = document.getElementById('resultado')


function resultado(){
    var nome = window.prompt('Qual é o nome do aluno?')
    var nota01 = Number(window.prompt(`Primeira nota de ${nome}:`))
    var nota02 = Number(window.prompt(`Segunda nota de ${nome}`))
    var media = Number((nota01 + nota02)/2).toFixed(2)
    var resultado = String(media).replace('.' , ',')
    if(media < 0 ){
        window.alert('Digite apenas números positivos!')
    }
    else if(media > 10){
        window.alert('Digite apenas números entre 0 e 10!')
    }
    
    else if(media >= 0 && media < 3){
        inst.innerHTML = ''
        tittle.innerHTML = `Analizando  a situação de ${nome}`
        notas.innerHTML = `Com as notas ${nota01} e ${nota02}, a <strong>media é igual a ${resultado}</strong>`
        res.innerHTML = `Com média abaixo de 3,0, o aluno está <strong id="strong01"> REPROVADO </strong>`
        var strong01 = document.getElementById('strong01')
        strong01.style.background = 'Red'
    }
    else if(media >= 3 && media < 6){
        inst.innerHTML = ''
        tittle.innerHTML = `Analizando  a situação de ${nome}`
        notas.innerHTML = `Com as notas ${nota01} e ${nota02}, a <strong>media é igual a ${resultado}</strong>`
        res.innerHTML = `Com média entre 3,0 e 6,0 , o aluno está em <strong id="strong02"> RECUPERAÇÃO </strong>`
        var strong02 = document.getElementById('strong02')
        strong02.style.background = 'Yellow'
    }

    else{
        inst.innerHTML = ''
        tittle.innerHTML = `Analizando  a situação de ${nome}`
        notas.innerHTML = `Com as notas ${nota01} e ${nota02}, a <strong>media é igual a ${resultado}</strong>`
        res.innerHTML = `Com média acima de 6,0 , o aluno está <strong id="strong03"> APROVADO </strong>`
        var strong03 = document.getElementById('strong03')
        strong03.style.background = 'Green'
    }
    
}