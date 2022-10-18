/**
 * Primitivos (imutaveis, n se pode mudar eles) - string, number, boolean, undefined, null (bigint, symbol) - Valor
 * valores copiados
 */

/**
 * Referência (mútavel) - Arrays, Object, function
 *valores passados por referência
 */

let a = [1,2,3,4];

let b = [...a]; //valor de a copiado para b, vira independente de a, se torna m novo array, spread

let c = b; //segue o que acontecer com b
