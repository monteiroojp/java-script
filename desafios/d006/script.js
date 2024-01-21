var botao = window.document.getElementById('botao')
botao.addEventListener('click' , conversao)

function conversao(){
    var temp = window.prompt('Digite uma temperatura em °C para prosseguir!')
    t = Number(temp)

    var tittle = window.document.getElementById('res')
    tittle.innerHTML = `A temperatura de ${t} °C, coresponde a:`
    
    var kelvin = document.getElementById('k')
    kelvin.innerHTML = `${t + 273} °K (Kelvin)`
    var faren = document.getElementById('f')
    faren.innerHTML = `${(160 +9*t) /5} °F (Fahrenheit)`
}