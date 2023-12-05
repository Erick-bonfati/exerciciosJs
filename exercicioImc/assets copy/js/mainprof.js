// Passo a passo

// 1- para o envio do formulário, capturar o evento de submit

// É recomendado que criemos uma função para cada coisa que for adicionar na sua página





// Capturar evento de submit do formulário
const form = document.querySelector('#formulario'); // Estamos selecionando a tag com ID "formulario" do HTML

form.addEventListener('submit', function (evento) {
    //Para parar um evento, e dentro do parenteses escolhemos o tipo de evento que queremos capturar,
    // fazemos uma função e nomeamos como 'evento', ou 'event' ou 'e'
    evento.preventDefault(); //Prevenir evento padrão do navegador

    //Pegar somente o input do html
    const inputPeso = evento.target.querySelector('#peso');  //Nós informa o elemento em que está recebendo o evento, e seleciona a tag selecionada
    const inputAltura = evento.target.querySelector('#altura');

    // Pegar o valor digitado pelo usuario
    const peso = Number(inputPeso.value); // Pega o valor do input selecionado e somente se vor um numero
    const altura = Number(inputAltura.value);

    // Utilizar estrutura condicional para caso o que o usuario digitar algo que seja falso
    if (!peso) { //Se o valor(peso) não for falso
        setResultado('Peso Inválido', false) // exibe a mensagem e retorna "false" isso para adicionar a classe que vamos atribuir com CSS
        return; // Sempre que retornar assim ele para o código por aqui ele não vai avançar até que a condição esteja correta
    }

    if (!altura) {
        setResultado('Altura Inválida', false) //mesma condição que acima
        return;
    }

    const imc = getImc(peso, altura); // criamos a variavel para pegar o calculo do imc, selecionando o peso e altura para fazer o calculo
    const nivelImc = getNivelImc(imc); // aqui criamos a variavel para pegar as condições com base no nivel do imc


    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

// Criar uma função para pegar o Nivel do IMC baseado no resultado informado no input

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];

    // Uma tática de programação em JS é que se o IF for muito pequeno não precisamos usar a chaves, porém não é uma boa pratica
    if (imc >= 39.9) {
        return nivel[5];
    }

    if (imc >= 34.9) {
        return nivel[4];
    }

    if (imc >= 29.9) {
        return nivel[3];
    }

    if (imc >= 24.9) {
        return nivel[2];
    }

    if (imc >= 18.5) {
        return nivel[1];
    }

    if (imc < 18.5) {
        return nivel[0];
    }
}

// Criar uma função para pegar o IMC

function getImc(peso, altura) { //Aqui colocamos peso e altura pois ele precisa dos dois para fazer o calculo
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


// Criar uma função que sua especialidade é criar paragrafos

function criaParagrafo() {
    //Vamos criar um elemento para criar um paragrafo e depois jogar ele dentro do resultado que está vazio
    const p = document.createElement('p'); //Criando o elemento
    return p;
    //p.classList.add('resultado-paragrafo); // adicionamos uma classe para o elemento que criamos, depois podemos manipular com CSS
}


// Criar uma função para adicionar alguma coisa dentro da nossa tag "resultado" no html

function setResultado(msg, isValid) { // msg = icone para exibir texto, e isValid = para validar se está correto ou não
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // aqui vai servir para limpar o resultado que iria aparecer


    const p = criaParagrafo();

    if (isValid) { // verificar se o valor é valido ou não é joga o resultado com a cor da classe selecionada
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg; // para dizer que estamos exibindo uma mensagem

    resultado.appendChild(p); // para exibir o valor do resultado
}
