var botao = document.getElementById('botao')
var res = document.getElementById('res')
var tittle = document.querySelector('h2.tittle')
botao.addEventListener('click', conversao)

function conversao(){
    var medida = window.prompt("Digite uma distância em metros(m)")
    m = Number(medida)
    tittle.innerHTML = `A distância de ${m} metros, corresponde a:`

    var p1 = document.getElementById('Km')
    p1.innerHTML = `${m / 1000} quilômetros(Km)`

    var p2 = document.getElementById('Hm')
    p2.innerHTML = `${m / 100} hectômetros (Hm)`

    var p3 = document.getElementById('Dam')
    p3.innerHTML = `${m/10} decâmetros (Dam)`

    var p4 = document.getElementById('dm')
    p4.innerHTML = `${m*10} decímetros (dm)`

    var p4 = document.getElementById('cm')
    p4.innerHTML = `${m*100} centímetros (cm)`

    var p5 = document.getElementById('mm')
    p5.innerHTML = `${m*1000} milímetros (mm)`
}
    



