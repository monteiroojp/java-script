let num = 5
const exibir = () => {
    console.log(num)

   
}

var myTimeout = setTimeout(exibir, 2000)

if(num == 5){
    clearTimeout(myTimeout)
}




