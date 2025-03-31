const numeros = [40, 34, 67, 89, 23, 10]

console.log(numeros.slice(0, 2))
console.log(numeros.slice(2))

console.clear

//Adicionando elementos dofinaldo array
numeros.push(0)
console.log(numeros)

// Adicionar elemento no inicio do array
console.clear 
numeros.unshift(-1)
console.log(numeros)

//pop: remover o elemento que está no final do array
console.clear
numeros.pop()
console.log(numeros)

// shift: remover o primeiro elemento do array
console.clear
numeros.shift()
console.log(numeros)

// Será que o elemento 20 existe no array
console.clear
console.log(numeros.includes(20))