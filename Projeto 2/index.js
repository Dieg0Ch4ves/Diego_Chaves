// console.log (alert("Boas vindas ao jogo de Blackjack!"))

// // const baralho = [
// //     {texto:"A de Copas",valor: 11},
// //     {texto:"A de Paus",valor:11},
// //     {texto:"A de Ouros",valor:11},
// //     {texto:"A de Espadas",valor:11},
// //     {texto:"2 de Copas",valor:2},
// //     {texto:"2 de Paus",valor:2},
// //     {texto:"2 de Ouros",valor:2},
// //     {texto:"2 de Espadas",valor:2},
// //     {texto:"3 de Copas",valor:3},
// //     {texto:"3 de Paus",valor:3},
// //     {texto:"3 de Ouros",valor:3},
// //     {texto:"3 de Espadas",valor:3},
// //     {texto:"4 de Copas",valor:4},
// //     {texto:"4 de Paus",valor:4},
// //     {texto:"4 de Ouros",valor:4},
// //     {texto:"4 de Espadas",valor:4},
// //     {texto:"5 de Copas",valor:5},
// //     {texto:"5 de Paus",valor:5},
// //     {texto:"5 de Ouros",valor:5},
// //     {texto:"5 de Espadas",valor:5},
// //     {texto:"6 de Copas",valor:6},
// //     {texto:"6 de Paus",valor:6},
// //     {texto:"6 de Ouros",valor:6},
// //     {texto:"6 de Espadas",valor:6},
// //     {texto:"7 de Copas",valor:7},
// //     {texto:"7 de Paus",valor:7},
// //     {texto:"7 de Ouros",valor:7},
// //     {texto:"7 de Espadas",valor:7},
// //     {texto:"8 de Copas",valor:8},
// //     {texto:"8 de Paus",valor:8},
// //     {texto:"8 de Ouros",valor:8},
// //     {texto:"8 de Espadas",valor:8},
// //     {texto:"9 de Copas",valor:9},
// //     {texto:"9 de Paus",valor:9},
// //     {texto:"9 de Ouros",valor:9},
// //     {texto:"9 de Espadas",valor:9},
// //     {texto:"10 de Copas", valor:10},
// //     {texto:"10 de Paus",valor:10},
// //     {texto:"10 de Ouros",valor:10},
// //     {texto:"10 de Espadas",valor:10},
// //     {texto:"J de Copas",valor:10},
// //     {texto:"J de Paus",valor:10},
// //     {texto:"J de Ouros",valor:10},
// //     {texto:"J de Espadas",valor:10},
// //     {texto:"Q de Copas",valor:10},
// //     {texto:"Q de Paus",valor:10},
// //     {texto:"Q de Ouros",valor:10},
// //     {texto:"Q de Espadas",valor:10},
// //     {texto:"K de Copas",valor:10},
// //     {texto:"K de Paus",valor:10},
// //     {texto:"K de Ouros",valor:10},
// //     {texto:"K de Espadas",valor:10},
// // ]

// function comprarCartas() {
//     const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
//     const naipes = [" ♦️", " ♥️", " ♣️", " ♠️"]
//     const valorcarta = cartas[Math.floor(Math.random() * 13)]
//     const valornaipe = naipes[Math.floor(Math.random() * 4)]
//     let a 
//     if(valorcarta === "A") {
//         a = 11
//     }else if(valorcarta === "J"|| valorcarta === "Q"|| valorcarta === "K"){
//         a = 10    
//     }else{
//        a = Number(valorcarta)
// }
//     const carta = {
//         valor: valorcarta + valornaipe,
//         valoremnumber: a
//     }
//     return carta
// }
// let jogo = confirm("Quer iniciar uma nova rodada ?")

// if(jogo) {
//     let user1 = comprarCartas()
//     let user2 = comprarCartas()
//     let computer1 = comprarCartas()
//     let computer2 = comprarCartas()
//     let user = user1.valoremnumber + user2.valoremnumber
//     let computer = computer1.valoremnumber + computer2.valoremnumber
//     console.log (`Valor de Usuario - ${user1.valor} + ${user2.valor} = ${user}`)
//     console.log (`Valor do Computador ${computer1.valor} + ${computer2.valor} = ${computer}`)
//     if(user > computer) {
//         console.log ("O Usuario Venceu !")
//     }else if(computer > user) {
//         console.log ("O Computador Venceu !")
//     }else{
//         console.log ("EMPATE !!")
//     }
// }else {
//     console.log ("O jogo acabou")
// }

console.log("Boas vindas ao jogo de Blackjack!")


let jogo = confirm("Quer iniciar uma nova rodada?") 

function comprarCarta() {

const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const naipes = [" ♦️", " ♥️", " ♣️", " ♠️"]
const numero = cartas[Math.floor(Math.random() * 13)]
const naipe = naipes[Math.floor(Math.random() * 4)]

let valor

if (numero === "A") {
  valor = 11
} else if (numero === "J" || numero === "Q" || numero === "K") {
  valor = 10
} else{
      
  valor = Number(numero)
}

const carta = {
  texto: numero + naipe,
  valor: valor
}
  
  return carta
}
  

let jogador = []
let computador = []

if(confirm("Bem-vinde ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")) {

let cartasOk = false
  while (!cartasOk) {

  jogador.push(comprarCarta())
  jogador.push(comprarCarta()) 
  computador.push(comprarCarta())  
  computador.push(comprarCarta())

if ((jogador[0].valor === 11 && jogador[1].valor === 11) ||

 (computador[0].valor === 11 && computador[1].valor === 11)) {
 jogador = []
 computador = []
} else {

  cartasOk = true
 }
}

let comprando = true

  while(comprando) {

let textos = ""
let pontos = 0

for (let carta of jogador) {
  textos += carta.texto + " "
  pontos += carta.valor
  }

if (pontos > 21){
  
  comprando = false

} else {

  let confirmCompra = confirm(

    `Suas cartas são ${textos}. A carta revelada do computador é ${computador[0].texto}.` +
    "\n"+ 
    "Deseja comprar mais uma carta?"

    )
     
if (confirmCompra){

  jogador.push(comprarCarta())

} else {

  comprando = false

    }
  }
}
  
  
let pontosComputador = 0
let pontosJogador = 0
let textosComputador = ""
let textosJogador = ""

for (let carta of computador) {

  pontosComputador += carta.valor
  textosComputador += carta.texto + " "
}

for (let carta of jogador) {

  pontosJogador += carta.valor
  textosJogador += carta.texto + " "
}

if (pontosJogador <= 21){

  while (pontosComputador < pontosJogador && pontosComputador <= 21) {

    computador.push(comprarCarta())
    pontosComputador = 0
    textosComputador = ""

for (let carta of computador) {

  pontosComputador += carta.valor
  textosComputador += carta.texto + " "

    }
  }
}
 
let resultado = ""
  

if (pontosJogador > pontosComputador && pontosJogador <= 21){

  resultado = "O usuário ganhou!"

} else if (pontosComputador > pontosJogador && pontosComputador <= 21){

  resultado = "O computador ganhou!"

} else if (pontosComputador > 21 && pontosJogador <= 21){

  resultado = "O usuário ganhou!"

} else if (pontosJogador > 21 && pontosComputador <= 21){

  resultado = "O computador ganhou!"

} else {

  resultado = "Empate!"

}

alert(

  `Usuario - Cartas: ${textosJogador} - Pontuação: ${pontosJogador}` + 
  "\n" + 
  `Computador - Cartas: ${textosComputador} - Pontuação: ${pontosComputador}` + 
  "\n" + 
  resultado
)
   

} else {

  alert("O jogo acabou.")

}
