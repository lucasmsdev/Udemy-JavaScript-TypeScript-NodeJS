/**
 * Operadores lógicos
 *  && -> AND -> E -> Todas as expressões precisam ser verdadeiras pra retornar true
 * || -> OR -> OU
 * ! -> NOT -> NAO
 */


const expressaoAnd = true && true && true; //se uma retornar false a expressao inteira ira retornar false
const expressaoOr = true || false; //se qualquer uma retornar verdadeiro a expressao ira retornar true
console.log(!false); //expressao not, vira verdadeiro pois esta negando o false


console.log(expressaoAnd);
console.log(expressaoOr);

console.log(!false); //vira verdadeiro pois esta negando o false


const usuario = 'Lucas';
const senha = '123456';
const vaiLogar = usuario === 'Lucas' && senha === '123456';

console.log(vaiLogar); //ira ser true pois usuario e senha sera igual



