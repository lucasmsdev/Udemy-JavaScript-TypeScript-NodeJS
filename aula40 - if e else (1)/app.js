/**
 * Entre 0 - 11 bom dia!
 * Entre 12 -17 boa tarde!
 * Entre 18 -23 boa noite!
 */

/**
 * IF pode ser utilizado sozinho
 * Sempre que utilizo else ou else if preciso de um bloco IF antes 
 * Posso ter varios else if's na na checagem
 * E só posso ter um else na checagem
 * Podemos usar condicoes sem else if
 */


const hora = 231;

if (hora >= 0 && hora <=11){
    console.log('Bom dia!');
}else if (hora >=12 && hora <=17) {
    console.log('Boa tarde!');
}else if (hora >=18  && hora <=23){
    console.log('Boa noite!');
}else {
    console.log('Ola! Sua hora esta indefinida!')
}

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair hoje!')
} else {
    console.log('Não vou sair hoje!');
}