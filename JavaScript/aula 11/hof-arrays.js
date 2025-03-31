// * Funões de alta ordemde arrays

// Array.forEach

const numeros = [40, 34, 67, 89, 23, 10]

numeros.forEach((elemento, index, arrayCompleto) => {
  console.log(index, elemento, arrayCompleto)
})

console.clear()


// 2. Array.prototype.find(): útil para encontrar um elemento dentro do array

const encontrado = numeros.find(numero => {
  return numero < 20 && numero > 10
})

console.log(encontrado)

const pessoas = [
  { nome: 'Pessoa 1', idade: 26, altura: 1.77 },
  { nome: 'Pessoa 2', idade: 25, altura: 1.56 },
  { nome: 'Pessoa 3', idade: 46, altura: 1.82 }
]

const pessoaEncontrada = pessoas.find(pessoa => pessoa.idade > 40)

console.log(pessoaEncontrada)

// 3 Array.protype.findIndex(): muito parecido com o find(), porém ele retorna o indice do elemento encontrado

const indiceDaPessoaEncontrada = pessoas.findIndex(
  pessoa => pessoa.idade > 50 && pessoa.altura < 1.7
)

console.clear()
console.log(indiceDaPessoaEncontrada)
