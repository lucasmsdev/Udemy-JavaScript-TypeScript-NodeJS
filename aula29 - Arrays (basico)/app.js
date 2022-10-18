const alunos = ['Lucas', 'Samuel', 'Lucas Gil', 'Maria Julia'];

console.log(alunos); //imprimi todos os alunos na tela
console.log(alunos[0]); //imprimi a primeira posicao, no caso 'Lucas'

alunos[1] = 'Mariana'; //troca o nome da segunda posicao, no caso 'Samuel' para mariana
console.log(alunos); //ja iria imprimir o nome trocado do comando acima

alunos[4] = 'Marina'; //tambem é possivel adicionar um item no array dessa forma

console.log(alunos.length); //possivel ver o tamanho do array, em indices

alunos[alunos.length] = 'Joao';
alunos[alunos.length] = 'Ronaldo'; //adiocina elementos

alunos.push('Otávio'); //tambem adiciona e é mais facil

alunos.unshift('Ronaldo'); //adiciona o item no índice 0 assim mudando todos os itens de posicao

alunos.pop(); //remove o ultimo item do array

alunos.shift(); //remove o primeiro item do array

const removido = alunos.php(); //adiciona o item tirado do array na constante 'removido'

delete alunos[1]; //remove o indice 1 porem o mantem ele vazio assim tendo 0= lucas 1= vazio 2=samuel etc


console.log(alunos[50]); //acessando o indice 50 que no caso nao existe: undefined pois nao existe

console.log(alunos.slice(0, 3)); //separa os itens do array

console.log(alunos instanceof Array); //ira conferir se é array, true=array
