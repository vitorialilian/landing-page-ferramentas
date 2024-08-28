const botaoAlterarTema = document.getElementById("botao-alterar-modo");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {

        imagemBotaoTrocaDeTema.setAttribute("src", "imagens/moon.png");

    } else {

        imagemBotaoTrocaDeTema.setAttribute("src", "imagens/sun.png");
    };
});