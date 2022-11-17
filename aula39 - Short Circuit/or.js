/**
 * && -> false && true = false
 * || -> false && true = true
 */


console.log(0 || false || null || 'Lucas' || true); //ira exibir 'Lucas' pois precisa de apenas uma validacao TRUE para ser TRUE.

const corUsuario = null; //se aqui fosse 'red' por exemplo a corPadrao na condicao seria setada como vermelho
const corPadrao = corUsuario || 'preto';   //ira fazer um condicional para caso o corUsuario seja atribuido a cor selecionada vai ser da cor do usuario, se nao sera preto

console.log(corPadrao);