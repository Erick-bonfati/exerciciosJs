let data = new Date()
let texto = document.querySelector("#texto")
let opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
texto.innerHTML = data.toLocaleString('pt-BR', opcoes);
