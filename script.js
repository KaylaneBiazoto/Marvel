/* 
    Ao passar o mouse em cima da imagem temos que :
 - colocar a classe selecionado no personagem que passamos o mouse em cima
 - retirar a classe selecionado do personagem que está flutuando
 
 - trocar a imagem do personagem que está flutuando e trocar o nome

 */

/* const ironMan = document.getElementById("iron-man");

ironMan.addEventListener("mouseenter", () => {
  ironMan.classList.add("selected");
}); */

const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    const idSelecionado = character.attributes.id.value;

    if (idSelecionado === "ultron") return;
    else {
      // QUADRADINHO
      const personagemSelecionado = document.querySelector(".selected");
      personagemSelecionado.classList.remove("selected");

      character.classList.add("selected");

      // IMAGEM GRANDONA
      const idSelecionado = character.attributes.id.value;

      const imagemJogador = document.getElementById("character-player-1");

      imagemJogador.src = `./Assets/${idSelecionado}.png`;

      // NOME
      const nomeJogadorUm = document.getElementById("nome-personagem");

      const nomeSelecionado = character.getAttribute("data-name");
      nomeJogadorUm.innerHTML = nomeSelecionado;
    }
  });
});
