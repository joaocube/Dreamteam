// TODOS OS LINKS ABREM EM OUTRA ABA
let linksBlank = document.querySelectorAll(".linkBlank");
linksBlank.forEach(function (linkBlank) {
  linkBlank.setAttribute("target", "_blank");
});

// SEGUIR O CURSOR
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", function (e) {
    // Atualiza a posição do círculo para seguir o cursor
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
});

// COMPARTILHAR NO X
function share(usuario) {
  var nomeUsuario = encodeURIComponent(usuario);
  var textoTweet = "Esse é o meu DreamTeam ";
  var urlTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    textoTweet
  )}${nomeUsuario}`;
  window.open(urlTwitter, "_blank");
}

// SLIDER
const slider = document.querySelector("[data-slider]");
const track = slider.querySelector("[data-slider-track]");
const prev = slider.querySelector("[data-slider-prev]");
const next = slider.querySelector("[data-slider-next]");

if (track) {
  prev.addEventListener("click", () => {
    next.removeAttribute("disabled");
    track.scrollTo({
      left: track.scrollLeft - track.firstElementChild.offsetWidth,
      behavior: "smooth",
    });
  });

  next.addEventListener("click", () => {
    prev.removeAttribute("disabled");
    track.scrollTo({
      left: track.scrollLeft + track.firstElementChild.offsetWidth,
      behavior: "smooth",
    });
  });

  track.addEventListener("scroll", () => {
    const trackScrollWidth = track.scrollWidth;
    const trackOuterWidth = track.clientWidth;

    prev.removeAttribute("disabled");
    next.removeAttribute("disabled");

    if (track.scrollLeft <= 0) {
      prev.setAttribute("disabled", "");
    }

    if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
      next.setAttribute("disabled", "");
    }
  });
}

// ADICIONAR CARDS DO APOIO-CONT
function apoioCard() {
  fetch("js/apoio.json")
    .then((response) => response.json())
    .then((apoiadores) => {
      const contApoio = document.querySelector("#apoiadores");

      apoiadores.map((apoiador) => {
        const cardApoio = document.createElement("div");
        cardApoio.classList.add("apoio-card");

        // CRIANDO TITULO E DESCRICAO
        const arrobaNome = document.createElement("h1");
        arrobaNome.classList.add("font3-Bnm", "cor-6");
        arrobaNome.textContent = apoiador.arroba;

        const descricao = document.createElement("p");
        descricao.classList.add("font1-Pnm4", "cor-2");
        descricao.textContent = apoiador.descricao;

        cardApoio.appendChild(arrobaNome);
        cardApoio.appendChild(descricao);
        contApoio.appendChild(cardApoio);
      });
    });
}
apoioCard();

// CRIANDO FOOTER
document.addEventListener("DOMContentLoaded", function () {
  let paragrafo = document.createElement("p");
  paragrafo.classList.add("font1-Pnm2", "cor-2");
  paragrafo.textContent = "JoaoCube © Todos os direitos reservados";
  // SELECAO ONDE VAI SER ADICIONADO
  let footer = document.querySelector(".footer-conteudo");
  // ADICIONANDO PARAGRAFO
  footer.appendChild(paragrafo);
});

// MODAL INFO
// Referências aos elementos do DOM
let modal = document.getElementById("Modal");
let btnModal = document.getElementById("btnModal");
// Ação ao clicar na imagem
btnModal.onclick = function () {
  modal.style.display = "block";
};
// Função para fechar o modal
function fecharModal() {
  modal.style.display = "none";
}
