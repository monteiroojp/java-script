const exibir = cbSoma =>{
    console.log(cbSoma)
}

const cbSoma = (callback,a,b) => {
    soma = a + b
    callback(soma)
} 

cbSoma(exibir,1,1)