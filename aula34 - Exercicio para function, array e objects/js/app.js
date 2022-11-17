function meuEscopo () {
  const form = document.querySelector('.form'); 
  const resultado = document.querySelector('.resultado'); 

  const pessoas = [];

  let contador = 1;

  function recebeEventoForm(evento) {
    evento.preventDefault(); //previni o evento de enviar o form

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    console.log(nome.value, sobrenome, peso, altura);

    pessoas.push({
      nome: nome.value,
      sobrenome: nome.value,
      peso: peso.value,
      altura: altura.value

    });

    console.log(pessoas);

   resultado.innerHTML += ` <p> ${nome.value} ${sobrenome.value}, ${peso.value}, ${altura.value} </p>`
    
  
   
  }

  form.addEventListener('submit', recebeEventoForm); 



  
}

meuEscopo();