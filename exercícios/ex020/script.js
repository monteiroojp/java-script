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
const passwordLenght = 8
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
    } 
    else {
        containUpperCase = false;
        upperCaseButton.innerHTML = 'Letra maiúscula: Desligado';
    }
})

let iLowerCase = 2
lowerCaseButton.addEventListener('click', () =>{

    iLowerCase++;

    if(iLowerCase % 2 === 0){
        containLowerCase = true;
        lowerCaseButton.innerHTML = 'Letra minúscula: Ligado';
    } else {
        containLowerCase = false;
        lowerCaseButton.innerHTML = 'Letra minúscula: Desligado';
    }
})

let iSymbols = 2
symbolsButton.addEventListener('click', () =>{

    iSymbols++;

    if(iSymbols % 2 === 0){
        containSymbols = true;
        symbolsButton.innerHTML = 'Símbolos: Ligado';
    } else {
        containSymbols = false;
        symbolsButton.innerHTML = 'Símbolos: Desligado';
    }
})

let iNumber = 2
numberButton.addEventListener('click', () =>{

    iNumber++;

    if(iNumber % 2 === 0){
        containNumbers = true;
        numberButton.innerHTML = 'Números: Ligado';
    } else {
        containNumbers = false;
        numberButton.innerHTML = 'Números: Desligado';
    }
})

//Chamada da senha
generatorButton.addEventListener('click' , () =>{
    passwordResult.innerHTML = ''
    createPassword(passwordLenght, containUpperCase, containLowerCase, containSymbols, containNumbers)
})
