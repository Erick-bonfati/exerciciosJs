
// Capturar evento de submit do formulário
const form = document.querySelector('#formulario'); 
form.addEventListener('submit', function (evento) {
    
    evento.preventDefault(); //Prevenir evento padrão do navegador

    //Pegar somente o input do html
    const inputPeso = evento.target.querySelector('#peso');  
    const inputAltura = evento.target.querySelector('#altura');

    // Pegar o valor digitado pelo usuario
    const peso = Number(inputPeso.value); 
    const altura = Number(inputAltura.value);

    // Utilizar estrutura condicional para caso o que o usuario digitar algo que seja falso
    if (!peso) { 
        setResultado('Peso Inválido', false) 
        return; 
    }

    if (!altura) {
        setResultado('Altura Inválida', false) 
        return;
    }

    const imc = getImc(peso, altura); 
    const nivelImc = getNivelImc(imc); 

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

// Criar uma função para pegar o Nivel do IMC baseado no resultado informado no input

function getNivelImc(imc) {
    const nivel = ['Muito abaixo do peso', 'Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];

    if (imc >= 39.9) {
        return nivel[6];
    }

    if (imc >= 34.9) {
        return nivel[5];
    }

    if (imc >= 29.9) {
        return nivel[4];
    }

    if (imc >= 24.9) {
        return nivel[3];
    }

    if (imc >= 18.5) {
        return nivel[2];
    }

    if (imc >= 17.0) {
        return nivel[1];
    }

    if (imc < 16.9) {
        return nivel[0];
    }
}

// Criar uma função para pegar o IMC

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


// Criar uma função que sua especialidade é criar paragrafos

function criaParagrafo() {
    const p = document.createElement('p');
    return p;
}

// Criar uma função para adicionar alguma coisa dentro da nossa tag "resultado" no html

function setResultado(msg, isValid) { 
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; 

    const p = criaParagrafo();

    if (isValid) { 
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg; 

    resultado.appendChild(p); 
}