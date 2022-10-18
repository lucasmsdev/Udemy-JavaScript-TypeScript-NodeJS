let num1 = 9.82435;
let num2 = Math.floor(num1);
console.log(num2); //ira arrendodar o valor para 9

let num3 = Math.ceil(num1);
console.log(num1); //arrendonda para cima

let num4 = Math.round(num1);
console.log(num1); //arrendonda o valor pro mais perto possivel

console.log(Math.max(1,2,3,5,6,7,8,123,63434,1415421,124,1215)); //ira pegar o maior  numero da sequencia
console.log(Math.min(1,2,3,5,6,7,8,123,63434,1415421,124,1215)); //ira pegar o menor numero da sequencia

console.log(Math.random()); //gera numeros aleatorios com varias casas decimais (gera numeros entre 0 e 1)

const aleatorio = Math.random() * (10 -5) + 5; 
console.log(aleatorio); //ira gerar um numero aleatorio entre 10 e 5 com casas decimais

const aleatorioArrendondado = Math.round(Math.random() * (10 -5) + 5); 
console.log(aleatorioArrendondado); //ira gerar um numero aleatoradoaleatorio entre 10 e 5 sem casas decimais

console.log(num1 ** (1/2)); //raiz quadrada
console.log(num1 ** 0.5); //raiz quadrada

console.log(100 / 0); //retorna valor Infinity //avalia como true