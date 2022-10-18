const numero = Number(prompt('Digte um numero:'));
const numberTitle = document.getElementById('numero-titulo');
const text= document.getElementById('texto');

numberTitle.innerHTML = numero;
text.innerHTML = '';

text.innerHTML += `<p>Raiz quadrada ${numero ** 0.5}</p>`;
text.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero) }</p>`;
text.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)} }</p>`;
text.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)} </p>`;
text.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
