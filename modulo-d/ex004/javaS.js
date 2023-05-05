var c = window.document.querySelector('#verificar')
c.addEventListener('click', clicar)
function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('#texano')
    var res = window.document.querySelector('#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Confira os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked ){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/criançam.png')
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/jovemm.png')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/adultom.png')
            }else{
                img.setAttribute('src', 'imagens/idosom.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/criançaf.png')
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/jovemf.png')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/adultof.png')
            }else{
                img.setAttribute('src', 'imagens/idosof.png')
            }
        }
        res.innerHTML=`Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)
        
    }
}