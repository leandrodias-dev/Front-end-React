// Definição da função

function saudacao(nomeDoEstudante, curso = 'Front-end em React') {
  // template string || template literals

  return `Olá, ${nomeDoEstudante}! Seja bem vindo ao curso ${curso}!`
}

const mensagemDaSaudacao = saudacao('Leandro') // chamada da função saudacao

console.log(mensagemDaSaudacao)
console.clear()

function somar(numero1, numero2) {
  return numero1 + numero2
}

const resultado = somar(2, 3)
console.log(resultado / 10)

console.clear()

// Funções anonimas

const dobroDoNumero = function (numero) {
  return numero * 2
}

const dobro = dobroDoNumero(2)
console.log(dobro)

// Arrow function: função seta

const subtrair = (numero1, numero2) => {
  return numero1 - numero2
}

const multiplicar = (numero1, numero2) => numero1 * numero2

const triploDoNumero = numero => numero * 3


function funcao(array) {
  let acc = 0;

  for (let elemento of array) {
    acc += elemento;
  }

  return (acc / array.length);
}

console.log(funcao([4, 6, 4, 2]));