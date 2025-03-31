// Array.prototype.every(): verificar se todos os elementos de um array seguem uma determinada
// condição retornada pela função


const numeros = [40, 34, 67, 89, 23, 16, 10]

const todosPositivos = numeros .every((elemento) => elemento > 0)

console.log(todosPositivos)

// Array.prototype.some(): verificar se algum elemento do array torna verdadeiro uma determinada condição retornada pela função
console.clear()

const numeros2 = [-1, 3, 7, -3, 5]

const retorno = numeros2.some((numero) => numero > 0)

console.log(retorno)