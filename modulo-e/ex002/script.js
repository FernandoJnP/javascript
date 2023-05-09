var s = window.document.querySelector('#validar')
s.addEventListener('click', clicar)
function clicar(){
    var texinicio = window.document.querySelector('#texn1')
    var texfinal = window.document.querySelector('#texn2')
    var texpasso = window.document.querySelector('#texn3')
    var res = window.document.querySelector('#res')
    if(i == 0 || f == 0 || p == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        res.innerHTML='Contando... <br>'
        var i = Number(texinicio.value)
        var f = Number(texfinal.value)
        var p = Number(texpasso.value)
        if(p <= f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c}`
            }
        }else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c}`
            }
        }
    }


}