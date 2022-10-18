function saudacao (nome) {
 console.log(`bom dia ${nome}!`); //nao retorna valor
 return `bom dia ${nome}!`;//retorna valor

} //criar funcao

saudacao('Luiz'); //chamar funcao

const variavel = saudacao();
console.log(variavel); //ira retornar undefined porem executou


function soma(x,y) {
  const resultado = x + y;

  return resultado; //ira retornar valor na variavel 'resultado'
} //funcao de soma

console.log(soma(2, 3)); // 2x3 e retorna 6

const raiz = function(n) {
  return n ** 0.5;  
 
}; //funcao anonima

const raizArrow = (n) => n ** 0.5; //arrow function

console.log(raiz(9)); //ira ver a raiz do numero colocado
console.log(raizArrow(9)); //ira ver a raiz do numero colocado

