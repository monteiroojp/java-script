


function load(){
    var data =  new Date()
    var hora = data.getHours()
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var foto = window.document.getElementById('img')
    
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora < 12 && hora > 0){
        foto.src = 'imagens/manha.jpg'
    }
    else if(hora >= 12 && hora < 18){
        foto.src = 'imagens/tarde.jpg'
        window.document.body.style.background = '#F06F50'
    }
    else{
        foto.src = 'imagens/noite.jpg'
        window.document.body.style.background = '#3635EF'
    }
    
} 