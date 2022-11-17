/**
 * && -> false && true = false
 * || -> false && true = true
 */

/**
 * FALSY(valores que avaliam em falso)
 * 0
 * '' ""  - (STRING VAZIA)
 * null/undefined 
 * NaN
 * 
 * QUALQUER COISA DIFERENTE DISSO AVALIA EM TRUE NO JAVASCRIPT
  */


console.log('Lucas' && 0 && 'Mariana'); //retorna 0, valor da expressao false que foi encontrada
console.log('Lucas' && true && 'Mariana'); //retorna a ultima expressao, no caso 'mariana'

function falaOi () {
  return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi('ronaldo')); //vai avaliar como false pois 'vaiExecutar' e igual a false


