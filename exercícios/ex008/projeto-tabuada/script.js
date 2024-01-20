let number = window.document.getElementById('number')
var but = window.document.getElementById('but')
var placeholder = window.document.getElementById('placeholder')
var tab = window.document.getElementById('tab')
but.addEventListener('click' , calcular)

function calcular(){
    if(number.value == 0){
        window.alert('Digite um número que não seja 0!')
    }
    else{
        let n = Number(number.value)
        var m = 1
        tab.innerHTML = ''
        while(m <=10){
            let item = document.createElement('option')
            var resultado = n * m
            item.text = `${n} X ${m} = ${resultado}`
            tab.appendChild(item)
            m++     
        }
    }
   
}
