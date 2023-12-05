const paragrafos = document.querySelector('.paragrafos');

// paragrafos.querySelectorAll('p');  = ele serve como um array, e neste caso ele vai retornar todas as tags 'p' que criamos


// Cria documento que contem todas outras tags
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); // Carrega os estilos do body
const backgroundcolorBody = estilosBody.backgroundColor // Seleciona o estilo que queremos que no nosso caso é o background

for (let p of ps) {
    p.style.backgroundColor = backgroundcolorBody;
    p.style.color = '#FFFFFF';
}



