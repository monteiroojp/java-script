// Variáveis iniciais

let diceInput = document.getElementById('diceInput')
const rollButton = document.getElementById('rollButton')
let diceNumber = document.querySelector('.diceNumber')
let diceImg = document.querySelector('.diceImg')

//Funções

const rollDices = () =>{
    let numberOfRolls = diceInput.value
    let numbers = []

    for(i = 0; i < numberOfRolls; i++){
        let number = Math.trunc(Math.random() * 6 + 1)
        numbers.push(number)
        diceImg.innerHTML += `<img src="imagens/${number}.svg"> `
    }

    diceNumber.textContent = `Dados: ${numbers.join(", ")}`
    diceInput.value = ''
    diceInput.focus()
}

//Eventos

rollButton.addEventListener('click' , () =>{
    if(diceInput.value == ""){
        window.alert("Preencha a caixa!")
    }
    else if(diceInput.value > 6 || diceInput.value < 1){
        window.alert("Insira um número no intervalo de 1 a 6!")
    }
    else{
        diceNumber.textContent = ''
        diceImg.innerHTML = ''
        rollDices()
    }
})