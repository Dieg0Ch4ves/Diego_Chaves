//Exercicios do projeto
//Exercicio 1

//const altura = Number (prompt("Fale a altura de um retangulo."))
//const largura = Number (prompt("E a largura."))
//const area = (altura,largura) => {
//    return altura * largura
//}
//console.log (area(altura,largura))

//Exercicio 2

//const anoatual = Number (prompt("Qual o ano atual ?"))
//const anodenascimento = Number (prompt("Qual o ano do seu nascimento ?"))
//const idade = (anoatual,anodenascimento) => {
//    return anoatual - anodenascimento
//}
//console.log (idade(anoatual,anodenascimento))

//Exercicio 3
 
//const peso = Number (prompt("Qual é o seu peso ?"))
//const altura = Number (prompt("Qual a sua altura ?"))
//const imc = (peso,altura) => {
//    return peso / (altura * altura)
//}
//console.log (imc(peso,altura))

//Exercicio 4

//function mensagem() {
//const nome = prompt("Qual o seu nome ?")
//const idade = prompt("Qual a sua idade ?")
//const email = prompt("Qual o seu e-mail ?")
//console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`)
//}
//mensagem()

//Exercicio 5

//function cores () {
//    const cor1 = prompt("Qual sua cor favorita ?")
//    const cor2 = prompt("Qual sua segunda cor favorita ?")
//    const cor3 = prompt("Qual sua terceira cor favorita ?")
//    console.log ([`${cor1},${cor2},${cor3}`])
//}
//cores()

//Exercicio 6

//function letramaiuscula(frase) {
//    return frase.toUpperCase()
//}
//console.log (letramaiuscula("comer sandalia com agua e sal"))

//Exercicio 7

//const custo = Number (prompt("Fale o custo do espetaculo ?"))
//const valor = Number (prompt("Qual o valor do ingresso ?"))
//const teatro = (custo,valor) => {
//    return custo / valor
//}
//console.log (teatro(custo,valor))

//Exercicio 8

//const frase = ("Eu sou um Uchiha")
//const frase1 = ("Eu sou um Senju")
//function frases(frase,frase1) {
//    frase.length
//    frase1.length
//    return frase.length === frase1.length
//}
//console.log (frases(frase,frase1))

//Exercicio 9

//const elementos = ["fogo","agua","terra"]
//function primeiro (elementos) {
//    return elementos[0]
//}
//console.log (primeiro(elementos))

//Exercicio 10 

//const elementos = ["fogo","agua","terra"]
//function ultimo (elementos) {
//    return elementos[2]
//}
//console.log (ultimo(elementos))

//Exercicio 11

function changePosition(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
};
let almas = ["Thiago","Diego","Geovana"];
almas = changePosition(almas, 0, 2);
console.log(almas);

//Exercicio 12

//const palavra1 = ("Minato")
//const palavra2 = ("Hashirama")
//function igual(palavra1,palavra2) {
//    return palavra1 === palavra2
//}
//console.log (igual(palavra1,palavra2))