try{
    let dividendo = Number(window.prompt('Digite um número para que seja realizado uma divisão!'))
    let divisor = Number(window.prompt('Agora digite um divisor'))

    if(isNaN(dividendo) || isNaN(divisor) || dividendo < 0 || divisor < 0){
        throw new Error('Digite um número positivo para continuar com a execução ')
    }

    if(divisor == 0){
        throw new Error('Não é possível dividir um número por 0')
    }
    let result = dividendo / divisor
    console.log(result)
}

catch(error){
    console.error(error)
}

finally{
    console.log('Você chegou ao final do programa')
}