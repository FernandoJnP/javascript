var num = [1,5,3,4]
num[4]=2//adiciona elementos
num.push(0)//adiciona elementos
num.sort()//organiza elementos
console.log(num)
var num = [1,5,3,7,2,4]
num.sort()
//usando o metodo antigo para mostrar a posiçâo e os elementos de forma customizada
for(pos =0; pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
num.sort()
//usando o método mais sofisticado 
for(pos in num){
    console.log(`A posiçâo ${pos} tem o valor ${num[pos]}`)
}
var pos = num.indexOf(2)//localiza a posição de um elemento a escolha do usuário
console.log(pos)

