let min = 1
let max = 10
let random = Math.trunc(Math.random() * (max - min) + min)
console.log(random)
let guess;
let running = true
console.log(random)
let attempts = 0

while(running){
    let guess = window.prompt(`Digite um número entre ${min} e ${max}`)
    guess = Number(guess)
    running = false

    if(isNaN(guess)){
        window.alert("Digite um número!!!")
        running = true
    }

    else if(guess < min || guess > max || guess == min || guess == max){
        window.alert(`Digite um número entre ${min} e ${max}!`)
        running = true
    }
    
    else if(guess == ""){
        window.alert("Não deixe a caixinha em branco!")
        running = true
    }

    else if(guess != random){
        window.alert("Você errou, clique em OK para tentar novamente")
        attempts ++
        running = true
    }

    else if(guess == random){
        window.alert(`Parabéns, você acertou, o número correto era ${guess}, você conseguiu chegar ao resultado com ${attempts} tentativas`)
        running = false
    }
}

