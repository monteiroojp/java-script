let nstart = window.document.getElementById('start')
let nend = window.document.getElementById('end')
let step = window.document.getElementById('step')
var but = window.document.getElementById('count')
var res = window.document.getElementById('res')
but.addEventListener('click' , contar)

function contar(){
    if(nstart.value == 0 || nend.value == 0){
        window.alert('Digite um número em cada uma das caixas!')

    }
    else{
        res.innerHTML = 'Contando:'
        let i = Number(nstart.value)
        let f = Number(nend.value)
        let s = Number(step.value)
    
        if(s <= 0){
            window.alert("Número invalido, será considerado o valor 1 no lugar")
            s = 1
        }

        if(i < f){
            for(let c = i ; c <= f ; c += s){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }if(i >= f){
            for(let c = i ; c >= f ; c -= s){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}
