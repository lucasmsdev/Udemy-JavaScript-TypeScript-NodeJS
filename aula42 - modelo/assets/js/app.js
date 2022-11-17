const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Evento previnido');
    setResultado('Olá mundo');
});

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');

    const p = document.createElement('p');
    p.classList.add('');
    p.innerHTML = 'Qualquer coisa'
    resultado.appendChild(p);

}