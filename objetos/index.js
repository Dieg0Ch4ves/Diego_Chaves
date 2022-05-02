//Exercicio De Objetos
//Exercicio 1

//const filme = {
//    direcao: "Stephen King",
//    nome: "It' A coisa",
//    data: 2017,
//    lista: ["Bill Skarsgård", "Sophia Lillis", "Jaeden Martell", "Finn Wolfhard", "Jack Dylan Grazer", "Jeremy Ray Taylor"],
//    assisti: true
//}
//console.log (filme.nome)
//console.log (filme.direcao)
//console.log (filme.data)
//console.log (filme['lista'])
//console.log (filme['assisti'])

//Exercicio 2

//const pessoa = {
//    nome: "Jucelino Kubichek",
//    idade: "morto",
//    generomusical: "FUNK PESADÃO"
//}
//console.log (`O nome da pessoa é ${pessoa.nome} ela ta ${pessoa.idade} e gosta muito de ${pessoa.generomusical}.`)

//Exercicio 3

//const filme = {
//    direcao: "Stephen King",
//    nome: "It' A coisa",
//    data: 2017,
//    lista: ["Bill Skarsgård", "Jaeden Martell", "Finn Wolfhard"],
//    assisti: true
//}
//filme.listadepersonagens = ["Pennywise", "Bill Denbrough", "Richie Tozier"]
//console.log (`${filme.lista[0]} faz o ${filme.listadepersonagens[0]}.`)
//console.log (`${filme.lista[1]} faz o ${filme.listadepersonagens[1]}.`)
//console.log (`${filme.lista[2]} faz o ${filme.listadepersonagens[2]}.`)
//filme.lista[0] = "Xuxa"
//console.log (`O nome do filme é ${filme.nome}. Seus personagens são ${filme.listadepersonagens[0]}, ${filme.listadepersonagens[1]} e ${filme.listadepersonagens[2]}`)

//Exercicio 4

//function no (pessoa,amigo) {
//    const pessoa = {
//        nome: "Jucelino Kubichek",
//        idade: 120,
//        generomusical: "FUNK PESADÃO",
//        lista: ["pizza", "hamburgue vegano", "reboco"]
//    }
//    const amigo = {
//        ...pessoa,
//        nome: "Bolsonaro",
//        idade: 67
//    }
//    console.log (`O nome da pessoa é ${pessoa.nome} e suas comidas preferidas são ${lista[0]},${lista[1]} e Seu melhor amigo se chama ${amigo.nome} e tem ${amigo.idade} anos`)
//}
//no()

//Exercicio 1 discord

//const pessoa = {
//    nome: "Thiago", 
//    apelidos: ["Queima Rosca", "Veado", "Cesar"]
//}
//function chamar(pessoa) {
//    console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos}`)
//}
//chamar(pessoa)
//
//const pessoa1 = {
//    ...pessoa,
//    apelidos: ["Gay", "Kong", "Burro"]
//}
//chamar(pessoa1)

//Exercicio 2 discord

//const pessoa1 = {
//    nome: "Zoro",
//    idade: 26,
//    profissao: "Espadachim"
//} 
//const pessoa2 = {
//    nome: "Luffy",
//    idade: 19,
//    profissao: "Borracha"
//}
//
//function chamar(pessoa1,pessoa2) {
//    console.log ([pessoa1.nome,pessoa2.nome,pessoa1.nome.length,pessoa2.nome.length,pessoa1.idade,pessoa2.idade,pessoa1.profissao,pessoa2.profissao,pessoa1.profissao.length,pessoa2.profissao.length])
//}
//chamar(pessoa1,pessoa2)

//Exercicio 3 discord 

//let carrinho = []
//const pokan = {
//    nome: "Pokan",
//    disponibilidade: true
//}
//const laranja = {
//    nome:"Laranja Pera Rio",
//    disponibilidade: true
//}
//const abacaxi = {
//    nome:"Abacaxi",
//    disponibilidade: true
//}
//
//function receba(pokan,laranja,abacaxi) {
//    carrinho.push(pokan,laranja,abacaxi)
//}
//receba(pokan,laranja,abacaxi)
//console.log (carrinho)