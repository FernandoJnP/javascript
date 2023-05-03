var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var dia = agora.getDate()
var diasem = agora.getDay()
var mes = agora.getMonth()
var ano = agora.getFullYear()
switch(diasem){
    case 0:
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
}   
console.log(`DIA: ${dia} do ${mes} do ano de ${ano}`)
console.log(`Agora são ${hora} horas e ${min} minutos`)
if(hora >= 6 && hora < 12){
    console.log('Bom dia!')
}else if(hora >= 12 && hora < 18){
    console.log('Boa Tarde!')
}else if(hora >= 18){
    console.log('Boa Noite!')
}else{
    console.log('Boa Madrugada!')
}