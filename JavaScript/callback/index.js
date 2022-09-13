//Exercicio callback
//Exercicio 1

//const verificarimpar = (numero,imprimi) => {
//    if(numero % 2 == 1) {
//        const resultado = numero + 0
//        imprimi(resultado)
//    }
//}
//function imprimir() {
//    console.log ('Sim, o resultado é ímpar')
//}
//verificarimpar(18, imprimir)

//Exercicio 2

//const lista = [2,4,6,8,10]
//const y = [0,1,2,3,4]
//const listaemstrings = lista.map((valores,index) => {
//  return valores = `O elemento ${index} é ${valores}`
//})
//console.log (listaemstrings)

//Exercicio 3

// const num = [2,4,5,8,10,12]
// const maior = num.filter((a) => {
//   return a = a >= 10
// })
//  console.log (maior)

//  const pares = num.filter((b) => {
//    return b = b % 2 === 0
//  })
 
//  console.log (pares)

//Exercicio 4 

//const produtos = [
//  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//  { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
// ]
// const limpeza = produtos.filter((product) => {
//   return product.categoria === "Limpeza"
// })
// 
// console.log (limpeza)

//Exercicio De Interpretação discord
//Exercicio 1 

//R: Ele irar imprimir no console os itens, o indicíce e o Array.

//Exercicio 2

//R: Será impresso apenas os nomes dos itens do Array.

//Exercicio 3 

//R : Será impresso apenas os nomes que não tem "chijo" no nome.

//Exercicio de Escrita do Codigo discord
//Exercicio 1 discord

// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]

// const nomeDosdog = pets.map((nomes) => {
//   return nomes.nome
// })

// console.log (nomeDosdog)

// const dogsalsicha = pets.filter((osdog) => {
//    return osdog.raca === "Salsicha"
// })

// console.log (dogsalsicha)

// const dogpoodle = pets.filter((poddles) => {
//   return poddles.raca === "Poodle"
// })

// const mensagem = dogpoodle.map((msng) => {
//   return msng = `Você ganhou um cupom de desconto de 10% para tosar o/a ${msng.nome}!`
// })

// console.log (mensagem)

//Exercicio 2 discord

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nome = produtos.map((osnomes) => {
  return osnomes.nome
})

console.log (nome)

const desconto = produtos.map((produtos) => {
  return {nome: produtos.nome, preco:Number((produtos.preco * (1 - 0.05)).toFixed(2))}
})
console.log (desconto)

const bebida = produtos.filter((mdchefe) => {
  return mdchefe.categoria === "Bebidas"
})
console.log (bebida)

const ype = produtos.filter((produto) => {
  return produto.nome.includes("Ypê")
})
console.log (ype)

const frase = produtos.map((mensagem) => {
  return `Compre ${mensagem.nome} por ${mensagem.preco}`
})
console.log (frase)

const fraseype = frase.filter((fraseprodutoype) => {
  return fraseprodutoype.includes("Ypê")
})
console.log (fraseype)
