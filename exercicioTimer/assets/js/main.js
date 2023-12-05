
//Envolver tudo numa só função para fugir do escopo global

function relogioTimer() {

// Função para pegar o tempo por segundos
function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000); // multiplicamos por 1000 pois o JS recebe o valor em milissegundos, ai só transformamos em segundos

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' // Por padrão ele vai pegar o seu timezone baseado na sua hora atual, para deixar em 00 usamos 'GMT' ou 'UTC'
    }); // Isso tudo representa 01-01-1970 ás 00:00:10
}

// Função para iniciar o meu relogio
function iniciaRelogio() {
    timer = setInterval(function() { // aqui só jogamos a variavel que criamos lá fora, assim ele fica salva numa variavel tanto aqui quanto fora
        segundos++; // adiciona 1 segundo a cada segundo
        relogio.innerHTML = getTimeFromSeconds(segundos); // Aqui nós pegamos o tempo que criamos e adicionamos um segundo por segundo
    }, 1000) // A cada setInterval que vai executar de 1 em 1 segundo nós vamos somar um segundos na variavel 'segundos'
}


//Para capturar as tags no HTML
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0; //precisamos de uma varíavel para manter os segundos
let timer; // precisamos salvar o timer em algum lugar para depois manipular ele

//Adicionar um evento de click

//Iniciar
// iniciar.addEventListener('click', function(event) {
//     //relogio.innerHTML = 'clicquei no iniciar'; // isso vai ser o valor retornado no botão

//     relogio.classList.remove('pausado'); // tiramos o CSS da cor vermelha ao pausar

//     clearInterval(timer); // Independente se tiver ou não um timer rodando nós vamos dar um clear no timer, para evitar criar dois timers
//                           // na mesma página
//     iniciaRelogio();

// })


// //Pausar
// pausar.addEventListener('click', function(event) {

//     relogio.classList.add('pausado'); // adicionamos um CSS com a cor vermelha ao pausar

//     clearInterval(timer); // Pausamos o evento do relogio
// })


// //Zerar
// zerar.addEventListener('click', function(event) {
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00' // Limpamos e pausamos o evento do relogio
//     segundos = 0; // aqui passamos que nossa variavel 'segundos' que está criando o timer volte a ser zero, já que limpamos o evento
// })


// De uma maneira mais rápida podemos usar o 'e.target' que pega todos os elementos que estão sendo clicados

document.addEventListener('click', function(e) {
    const elemento = e.target; // elemento que está sendo clicado

    if(elemento.classList.contains('zerar')) { // se o elemento que eu clicar for igual a 'zerar' vou fazer isso....
        clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        segundos = 0;
        relogio.classList.remove('pausado');
    }

    if(elemento.classList.contains('iniciar')) { // se o elemento que eu clicar for igual a 'iniciar' vou fazer isso....
        relogio.classList.remove('pausado'); 
        clearInterval(timer); 
        iniciaRelogio();
    }

    if(elemento.classList.contains('pausar')) { // se o elemento que eu clicar for igual a 'pausar' vou fazer isso....
        relogio.classList.add('pausado'); 
        clearInterval(timer);
    }
});

}

relogioTimer();


 