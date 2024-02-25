function exibir(num){
    console.log(num)
}

function soma(a , b, callback){
    let op = a + b

    callback(op)
}

function mult(a , b, callback){
    let op = a * b
    callback(op)
}

soma(1 , 2 , exibir)

mult(2,4,exibir)