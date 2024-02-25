let x = 1

const exibir = () => {
    console.log(x)
    x++
}

var myInterval = setInterval(exibir, 1000)

if(x > 10){
    clearInterval(myInterval)
}

