const { error } = require('console')
const fs = require('fs')
const { resolve } = require('path')

//* 1 Callbacks

// console.log('Antes da função de ler o arquivo')
// // Função assincrona (ler um arquivo leva um tempo)
// fs.readFile('aula 13/arquivo.txt', (erro, conteudoDoArquivo) => {
//   if (erro) {
//     console.log('Ocorreu um erro ao tentar ler o arquivo', erro)
//   } else {
//     console.log(String(conteudoDoArquivo))
//   }
// })

// console.log('Depois da função de ler o arquivo')

// Exemplo 2: setTimeout (função de cria um timer)

// console.log('Antes do setTimeout...')

// setTimeout(() => {
//   console.log('Isso aqui vai ser executado em após 2 segundos!')
// }, 2 * 1000)

// console.log('Depois do setTimeout')

// * Promises

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    // creating a promise
    fs.readFile('aula 13/arquivo.txt', (erro, conteudoDoArquivo) => {
      if (erro) {
        reject('Ocorreu um erro ', erro)
      } else {
        resolve(String(conteudoDoArquivo))
      }
    })
  })
}
// Foco a partir daqui...
// lerArquivoPromise()
//   .then(retornoDoResolveDaPromise => {
//     console.log('Deu certo: ', retornoDoResolveDaPromise)
//   })
//   .catch(erro => {
//     console.log('Deu ruim: ', erro)
//   })
//   .finally(() => {
//     console.log(
//       'Isso aqui vai ser executado, independente do sucesso ou fracasso da promessa, no final dela.'
//     )
//   })

//* 3 async/await

console.clear()

async function leituraDeDados() {
  console.log('Isso é execultado antes da promise ser resolvido')

  const retornoDaPromessa = await lerArquivoPromise()

  console.log(retornoDaPromessa)
  console.log('Isso é execultado ANTES da promise ser resolvido')
}

leituraDeDados()
