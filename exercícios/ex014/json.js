const objeto = {
    nome: "JP",
    idade: 18,
    trabalhando: false,
}

console.log(objeto)


const objetoJSON = JSON.stringify(objeto)

console.log(objetoJSON)

const objetoJS = JSON.parse(objetoJSON)
console.log(objeto)