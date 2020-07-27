//nome, idade, cor favorita
//console.log(3)
let nome = prompt('Participante 1, digite seu nome')
let idade = prompt('Participante 1, digite sua idade')
let cor = prompt('Participante 1, digite sua cor favorita')

let nome2 = prompt('Participante 2, digite seu nome')
let idade2 = prompt ('Participante 2, digite sua idade')
let cor2 = prompt ('Participante 2, digite sua cor favorita')

//console.log(`Olá, ${nome}`)
//console.log(idade)
//console.log(cor)
console.log(`Foram recebidos os dados de: ${nome} e ${nome2}`)
if (idade > idade2 ) { //Participante 1 é mais velha
    alert (`${nome} é mais velho(a) que ${nome2}`)
} else if (idade < idade2 ) { //Participante 2 é mais velha
    alert (`${nome2} é mais velho(a) que ${nome}`)
} else {
     if ( idade == idade2 ) {
    alert (`${nome} e ${nome2} tem a mesma idade`)
}
}

// cor
if (idade > idade2 ) { //Participante 1 é mais velha
    alert (`${nome} é mais velho(a) que ${nome2}`)
} else if (idade < idade2 ) { //Participante 2 é mais velha
    alert (`${nome2} é mais velho(a) que ${nome}`)
} else {
     if ( idade == idade2 ) {
    alert (`${nome} e ${nome2} tem a mesma idade`)
}
}

if (cor == cor2)
{
    alert (`${nome} e ${nome2} gostam da mesma cor`)
}
else 
{
    alert (`${nome} e ${nome2} não Gostam da mesma cor`)
}
