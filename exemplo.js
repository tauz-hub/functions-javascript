// Função pura
function somaPura(a, b) {
  return a + b;
}
console.log(somaPura(2, 3)); // Sempre retorna 5

// Função impura
let valorGlobal = 10;
function somaImpura(a) {
  valorGlobal += a; // Modifica o estado global
  return valorGlobal;
}
console.log(somaImpura(5)); // Resultado depende de valorGlobal


//--------- Currying --------- 
// Função tradicional
function soma(a, b) {
  return a + b;
}

// Função curry
function somaCurry(a) {
  return function (b) {
      return a + b;
  };
}

const adicionarCinco = somaCurry(5);
console.log(adicionarCinco(3)); // 8

//--------- Higher-Order functions ----------------
// Função que recebe outra função como argumento
function aplicarOperacao(a, b, operacao) {
  return operacao(a, b);
}

// Funções a serem usadas como argumentos
function soma(a, b) {
  return a + b;
}

function multiplicacao(a, b) {
  return a * b;
}

console.log(aplicarOperacao(5, 4, soma)); // 9
console.log(aplicarOperacao(5, 4, multiplicacao)); // 2

// ---------  Closure --------- 

function criarContador() {
  let contador = 0;
  return function () {
      contador += 1;
      return contador;
  };
}

const contador1 = criarContador();
console.log(contador1()); // 1
console.log(contador1()); // 2

// --------- Callbacks --------- 
function obterDados(callback) {
  setTimeout(() => {
      const dados = { nome: "Taua", idade: 20 };
      callback(dados);
  }, 1000);
}

obterDados((dados) => {
  console.log("Dados recebidos:", dados);
});

// ---------  Imutabilidade --------- 
const numeros = [1, 2, 3, 4];

// Forma imutável: criando um novo array
const novoArray = [...numeros, 5];
console.log(novoArray); // [1, 2, 3, 4, 5]
console.log(numeros); // [1, 2, 3, 4] - permanece o mesmo

// --------- Deep Copy e Shallow Copy --------- 
const objetoOriginal = {
  nome: "Taua",
  endereco: {
      cidade: "São Paulo",
      rua: "Rua A"
  }
};

// Shallow Copy
const copiaRasa = { ...objetoOriginal };
copiaRasa.endereco.cidade = "Rio de Janeiro";
console.log(objetoOriginal.endereco.cidade); // "Rio de Janeiro" - referência compartilhada

// Deep Copy
const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));
copiaProfunda.endereco.cidade = "Salvador";
console.log(objetoOriginal.endereco.cidade); // "Rio de Janeiro" - permanece intacto
