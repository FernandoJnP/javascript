var s = window.document.querySelector('#tabuada')
s.addEventListener('click', clicar)
function clicar(){
    var texnum = window.document.querySelector('#texnum')
    var seltab = window.document.querySelector('#seltab')
    var num = Number(texnum.value)
    if(num == 0){
        window.alert('[ERRO] Digite um número')
    }
    seltab.innerHTML=''
    for(var c = 1; c <= 10; c++){
        var item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        item.value = `tab${c}`
        seltab.appendChild(item)
    }
}