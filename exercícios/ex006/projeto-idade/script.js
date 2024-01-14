var data = new Date()
var ano = data.getFullYear()
var fano = window.document.getElementById('txtano')
var res = window.document.getElementById('res')
var sex = document.getElementsByName('sex')
var img = document.getElementById('img')
function verificar(){
    if(fano.value.length == 0 || fano.value > ano){
        res.innerHTML = 'Ocorreu um erro, digite os dados novamente!'
    }
    else{
        idade = ano - Number(fano.value)
        gender = ''
        if(sex[0].checked){
            gender = 'masculino'
            if(idade > 0 && idade <= 10){
                img.src = 'imagens/boy-c.jpg'
            }
            else if(idade <= 18){
                img.src = 'imagens/boy-y.jpg'
            }
            else if(idade <= 60){
                img.src = 'imagens/boy-a.jpg'
            }
            else{
                img.src = 'imagens/boy-o.jpg'
            }
            
        }
        else{
            gender = 'feminino'
            if(idade > 0 && idade <= 10){
                img.src = 'imagens/girl-c.jpg'
            }
            else if(idade <= 18){
                img.src = 'imagens/girl-y.jpg'
            }
            else if(idade <= 60){
                img.src = 'imagens/girl-a.jpg'
            }
            else{
                img.src = 'imagens/girl-o.jpg'
            }
        }
        
        res.innerHTML = `Idade calculada: ${idade} anos do gênero ${gender}`
        res.style.textAlign = 'left'
       
    }
      
}
