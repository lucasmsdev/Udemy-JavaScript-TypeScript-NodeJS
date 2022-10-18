const array = [1,2,3];
array.push(4); //adiciona a casa 4
array[0] = 'luiz'; // troca o 1 por luiz

const pessoa01 = {
  nome: 'Lucas',
  sobrenome: 'Machado',
  idade: 17
 
}; //criacao de um objeto

console.log(pessoa01.nome); //esta acessando o nome da pessoa 01


function criaPessoa (nome,sobrenome, idade) {
  return { nome, sobrenome, idade};
} //crirei uma function passando um objeto dentro da funcao

const pessoa1= criaPessoa('Lucas', 'Machado', 17); //aqui eu criei uma pessoa


const pessoa10 = {
  nome: 'Lucas',
  sobrenome: 'Machado',
  idade: 17,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} esta falando oi...`); //this se refere ao objeto pessoa10
  }, // criou uma funcao dentro do objeto que faz com que a pessoa10 fale

  falaIdade() {
    console.log(`a minha idade atual é ${this.idade}`); //fala a idade

  },

  incrementaIdade() {
    this.idade++;    
  } //incrementa +1 na idade, ou seja de 17 ira pra 18

}; //criou um objeto com o nome pessoa10

pessoa10.fala(); //faz a pessoa falar

