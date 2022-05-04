//Exercicios de Condicionais
//Exercicio 1

//function comparacao() {
//    const num1 = Number (prompt("Digite um número."))
//    const num2 = Number (prompt("Digite outro."))
//    return num1 === num2
//}
//console.log (comparacao())

//Exercicio 2

//const a = Number (prompt("Digita um número."))
//const b = Number (prompt ("Digita outro."))
//const comparacao = a === b
//if (comparacao) {
//    console.log ("São iguais")
//} else {
//    console.log  ("São diferentes")
//}

//Execicio 3
//
//const a = Number (prompt("Digita um número."))
//const b = Number (prompt ("Digita outro."))
//const comparacao = a >= b
//if (comparacao) {
//    console.log ("O primeiro número é maior ou igual ao outro")
//} else {
//    console.log  ("O segundo é maior que o primeiro")
//}

//Exercicio 4

//const pokemon = prompt("Escolha seu Pokemon inicial: Bulbasauro, Charmander, Squirtle")
//switch (pokemon) {
//    case 'Bulbasauro':
//        console.log ("Você escolheu o Bulbasauro.")
//        break
//    case 'Charmander':
//        console.log ("Você escolheu o Charmander.")
//        break
//    case 'Squirtle':
//        console.log ("Você escolheu o Squirtle.")
//        break
//    default:
//        console.log ("Não encontramos essa opção.")
//        break
//}

//Exercicio 5

//let pessoa = {
//    ensinomedio: prompt("Terminou o ensino médio ?"),
//    idade: Number (prompt("Quantos anos você tem ?")),
//    cursando: prompt("Está cursando outra faculdade ?")
//}
//const a = pessoa.ensinomedio === 'sim'
//const b = pessoa.idade > 18
//const c = pessoa.cursando === 'não'
//if (a && b && c) {
//    console.log ("Você pode entrar na faculdade.")
//} else {
//    console.log ("Você não pode entrar na faculdade.")
//}

//Exercicio 1 discord

//let idade = Number (prompt("Qual sua idade ?"))
//if (idade >= 18) {
//    console.log ("Você pode dirigir")
//} else{
//    console.log ("Você não pode dirigir")
//}

//Exercicio 2 discord

//const turno = prompt("Qual turno escolar você estuda : digite M para matutino, V para vespertino e N para nortuno")
//if (turno === 'M') {
//    console.log ("Bom dia !")
//} else if (turno === 'V') {
//    console.log ("Boa tarde !")
//} else if (turno === 'N')  {
//    console.log ("Boa noite !")
//}

//Exercicio 3 discord

//const turno = prompt("Qual turno escolar você estuda : digite M para matutino, V para vespertino e N para nortuno")
//switch (turno) {
//    case 'M':
//        console.log ("Bom dia !")
//        break
//    case 'V':
//        console.log ("Boa tarde !")
//        break
//    case 'N':
//        console.log ("Boa noite !")
//        break
//    default:
//        console.log ("ERRo")
//}

//Exercicio 4 discord 

const generofilme = prompt("Qual genêro do filme que iremos assistir ?")
const valor = Number (prompt("Qual valor do ingresso ?"))
let ir = generofilme === 'fantasia'
let iringresso = valor < 15
if (ir && iringresso) {
    console.log ("Bom filme !")
} else {
    console.log ("Escolha outro filme:")
}