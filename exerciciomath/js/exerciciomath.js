const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo'); // para selecionar os elementos por ID, resumindo, a variavel numeroTitulo agora
// significa o ID do HTML selecionado

const raiz = document.getElementById('raiz');  // Pega pelo ID da tag
const int = document.getElementById('int');
const nan = document.getElementById('nan');
const cima = document.getElementById('cima');
const baixo = document.getElementById('baixo');
const decimal = document.getElementById('decimal');

numeroTitulo.innerHTML = numero;  // Pega a tag e faz ela ser igual a variavel que você criou

raiz.innerHTML = numero;

int.innerHTML = numero;

nan.innerHTML = numero;

cima.innerHTML = numero;

baixo.innerHTML = numero;

decimal.innerHTML = numero;

raiz.innerHTML = `<p> Raiz quadrada: ${numero ** (1 / 2)} </p>`;

int.innerHTML = `<p> ${numero} é inteiro: ${Number.isInteger(numero)} </p>`;

nan.innerHTML = `<p> É NaN: ${Number.isNaN(numero)} </p>`;

cima.innerHTML = `<p> Arredondando para cima: ${Math.ceil(numero)} </p>`;

baixo.innerHTML = `<p> Arredondando para baixo: ${Math.round(numero)} </p>`;

decimal.innerHTML = `<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`;
