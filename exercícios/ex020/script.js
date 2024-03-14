//Função principal

const createPassword = (passwordLenght, containUpperCase, containLowerCase, containSymbols, containNumbers) =>{
    
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const symbolsChars = '!@#$%&*!@#$%&*!@#$%&*!@#$%'
    const numbeersChars = '012345678901234567890123456'

    let allowedChars = ""
    let password = ""

    allowedChars += containLowerCase? lowerCaseChars : ""
    allowedChars += containUpperCase? upperCaseChars : ""
    allowedChars += containSymbols? symbolsChars : ""
    allowedChars += containNumbers? numbeersChars : ""

    for(i = 0; i < passwordLenght; i++){
        let randomIndex = Math.trunc(Math.random() *allowedChars.length)
        password += `${allowedChars[randomIndex]}`
    }

    if(allowedChars == ""){
        window.alert("Ative pelo menos umas das opções!")
        passwordResult.innerHTML = ""
    }
    else{
        passwordResult.innerHTML = password
    }
}

//Password Configs
let passwordLenght;
let containUpperCase = true
let containLowerCase = true
let containSymbols = true
let containNumbers = true

//Variaveis
const generatorButton = document.getElementById('generatorButton')
let passwordResult = document.getElementById('passwordResult')

let upperCaseButton = document.getElementById('upperCaseButton')
let lowerCaseButton = document.getElementById('lowerCaseButton')
let symbolsButton = document.getElementById('symbolsButton')
let numberButton = document.getElementById('numberButton')
let inputLenght = document.getElementById('inputLenght')
//Função das configurações

let iUpperCase = 2
upperCaseButton.addEventListener('click', () =>{

    iUpperCase++; 

    if(iUpperCase % 2 === 0){
        containUpperCase = true;
        upperCaseButton.innerHTML = 'Letra maiúscula: Ligado';
        upperCaseButton.style.backgroundColor = 'darkturquoise'
    } 
    else {
        containUpperCase = false;
        upperCaseButton.innerHTML = 'Letra maiúscula: Desligado';
        upperCaseButton.style.backgroundColor = 'red'
    }
})

let iLowerCase = 2
lowerCaseButton.addEventListener('click', () =>{

    iLowerCase++;

    if(iLowerCase % 2 === 0){
        containLowerCase = true;
        lowerCaseButton.innerHTML = 'Letra minúscula: Ligado';
        lowerCaseButton.style.backgroundColor = 'darkturquoise'
    } else {
        containLowerCase = false;
        lowerCaseButton.innerHTML = 'Letra minúscula: Desligado';
        lowerCaseButton.style.backgroundColor = 'red'
    }
})

let iSymbols = 2
symbolsButton.addEventListener('click', () =>{

    iSymbols++;

    if(iSymbols % 2 === 0){
        containSymbols = true;
        symbolsButton.innerHTML = 'Símbolos: Ligado';
        symbolsButton.style.backgroundColor = 'darkturquoise'
    } else {
        containSymbols = false;
        symbolsButton.innerHTML = 'Símbolos: Desligado';
        symbolsButton.style.backgroundColor = 'red'
    }
})

let iNumber = 2
numberButton.addEventListener('click', () =>{

    iNumber++;

    if(iNumber % 2 === 0){
        containNumbers = true;
        numberButton.innerHTML = 'Números: Ligado';
        numberButton.style.backgroundColor = 'darkturquoise'
    } else {
        containNumbers = false;
        numberButton.innerHTML = 'Números: Desligado';
        numberButton.style.backgroundColor = 'red'
    }
})

//Chamada da senha
generatorButton.addEventListener('click' , () =>{
    passwordResult.innerHTML = ''
    passwordLenght = inputLenght.value
    if(passwordLenght == ''){
        window.alert('Coloque no mínimo 1 caractere para senha!')
    }   
    else if(Number(passwordLenght) > 50 || Number(passwordLenght) < 1){
        window.alert('Coloque um número de caractéres entre 1 a 50!')
    } 
    else{
        passwordLenght = Number(inputLenght.value)
        createPassword(passwordLenght, containUpperCase, containLowerCase, containSymbols, containNumbers)
    }
})