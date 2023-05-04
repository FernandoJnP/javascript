function carregar(){
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var msg2 = window.document.querySelector('#msg2')
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    msg.innerHTML=`Agora são ${hora} horas e ${minutos} minutos`
    if(hora >= 0 && hora < 12){
        msg2.innerHTML='Bom Dia!'
        img.src='imagens/manha.png'
        document.body.style.background='#8192A2'
    }else if(hora >=12 && hora < 18){
        msg2.innerHTML='Boa Tarde!'
        img.src='imagens/tarde.png'
        document.body.style.background='#FEB50D'
    }else{
        msg2.innerHTML='Boa Noite!'
        img.src='imagens/noite.png'
        document.body.style.background='#26497F'
    }

}
