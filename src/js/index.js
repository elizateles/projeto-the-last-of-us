/*
OBEJETIVO- QUANDO CLICAR NO BOTÃO TEMOS QUE MOSTRAR A IMAGEM DE FUNDO CORRESPONDENTE

*/

//PASSO 1- DAR UM JEITO DE PEGAR ELEMENTO HTML DOS BOTOES

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//PASSO 2- IDENTIFICAR O CLIQUE DO USUARIO NO BOTÃO 
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // PASSO 3 - DESMARCAR O BOTAO SELECIONADO ANTERIOR 
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //PASSO 4 - MARCAR O BOTAO CLICANDO COMO SE ESTIVESSE SELECIONADA
        botao.classList.add('selecionado');

        //PASSO 5 - ESCONDER A IMAGEM ATIVA DE FUNDO
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //PASSO 6- FAZER APARECER A IMAGEM  CORRESPONDENTE AO BOTAO CLICADO
        imagens[indice].classList.add('ativa');


    })
})


