//Variáveis
let timeContainer = document.getElementById('timeContainer')

//Funções
const updateClock = () =>{
    let times = []

    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    times.push(hour, minute, seconds)

    let timesFormated = times.map((element) =>{
        return element.toString().padStart(2, "0")
    })
    
    timeContainer.innerHTML = `<p>${timesFormated[0]}:${timesFormated[1]}:${timesFormated[2]}</p>`
}

//Eventos e chamadas
updateClock()
setInterval(updateClock, 1000)