//Variáveis
const buttonsDiv = document.querySelector('div.buttons')
const divTime = document.querySelector('div.time')
let timeInterval;
let hour = 0
let minute = 0
let second = 0
let milisecond = 0

//Funções
function StopWatch(button){

const timer = () =>{
     milisecond++
     
    if(milisecond == 100){
        second++
        milisecond = 0
    }
    else if(second == 60){
        minute++
        second = 0
    }
    else if(minute == 60){
        hour++
        minute = 0
    }
     
     divTime.innerHTML = `<p>${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}:${milisecond.toString().padStart(2, '0')}</p>`

}

const stopTimer = () =>{
    clearInterval(timeInterval)
}


if(button == 'start'){
    clearInterval(timeInterval)
    timeInterval = setInterval(timer, 10)
}

else if(button == 'stop'){
   stopTimer()
}
else{
    clearInterval(timeInterval)
    divTime.innerHTML = `<p>00:00:00:00</p>`
    hour = 0
    minute = 0
    second = 0
    milisecond = 0
}
}

//Eventos e chamadas
buttonsDiv.addEventListener('click', (evento)  =>{
    let choosedButton = evento.target.id
    StopWatch(choosedButton)
})