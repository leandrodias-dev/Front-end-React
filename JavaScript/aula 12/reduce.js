// REDUCE

const numeros = [1, 2, 3, 4, 5]

const soma = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
  //console.log(acumulador)
  return elemento / arrayCompleto.length + acumulador
}, 0)

console.log(soma)
console.clear()

const somaDosPares = numeros.reduce((acumulador, numero) => {
  // Se o número for par
  if (numero % 2 === 0) {
    return numero + acumulador
  } else {
    return acumulador
  }
}, 0)
console.log(somaDosPares)

console.clear()

const carrinho = [
  { produto: 'Feijão', preco: 7.98, quantidade: 3 },
  { produto: 'Arroz', preco: 4.98, quantidade: 5 },
  { produto: 'Leite 1L', preco: 6.99, quantidade: 2 }
]

const totalAPagar = carrinho.reduce((acumulador, item) => {
  return item.preco * item.quantidade + acumulador
}, 0)

console.log(totalAPagar)
