let x = 10

const exibir = () => {
    console.log(x)
    x--

    if(x < 1){
        clearInterval(myInterval)
    }
    if(x == 0){
        console.log('Contagem Finalizada')
    }
}

var myInterval = setInterval(exibir, 1000)


