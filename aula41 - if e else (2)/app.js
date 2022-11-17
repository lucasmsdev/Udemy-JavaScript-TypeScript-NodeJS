/**
 * Apartir do momento que o if achar a primeira condicao TRUE o resto do if ira ser quebrado
 */


const numero = 10;

if(numero >= 0 && numero <=5){
    console.log('Este numero esta entre 0 e 5');
}else if(numero >= 6 && numero <=8){
    console.log('Este numero esta entre 6 e 8');
}else if(numero >= 9 && numero <=11){
    console.log('Este numero esta entre 9 e 11');
} else {
    console.log('O numero nao esta entre 0 e 11');
}