const fs = require('fs');
const { json } = require('stream/consumers');

// 1 Lendo um arquivo JSON

fs.readFile('eslint.json', (erro, dados) => {
  if (erro) {
    console.log(('Erro:', erro));
  } else {
    // dados: Buffer com os dados do arquivo
    const dadosObjetos = JSON.parse(String(dados));

    console.log(dadosObjetos.rules);
  }
});

// Convertendo JSON, em formato de string, para um objeto

const jsonString = '{"nome": "Leandro"}';

console.log(JSON.parse(jsonString));

console.clear();


// Convertendoum objeto do JS, em um JSON

const pessoa = {
  nome: 'Tony Stark',
  papel: 'Homem de ferro',
};

console.log(JSON.stringify(pessoa));
