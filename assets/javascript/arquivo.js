const header_Agencia_Marketing = document.getElementById(
  "header_Agencia_Marketing",
);
const saiu_Cima = document.querySelectorAll(".saiu-cima");
const saiu_lado_esquerdo = document.querySelectorAll(".saiu-lado-esquerdo");
const saiu_lado_direito = document.querySelectorAll(".saiu-lado-direito");
const saiu_baixo = document.querySelectorAll(".saiu-baixo");
const divAbrirMenu = document.getElementById("div_abrir_Menu");
const headerMobile = document.querySelector(".header_Mobile");
const link = document.querySelectorAll(".link");
const img_abrir_Menu = document.getElementById("img_abrir_Menu");
const video = document.getElementById("video");

// Função para fazer com que o video faça o autoplay quando clicar na tela

const startVideo = () => {
  video.muted = true;
  video.play().catch(() => {});
  document.removeEventListener("touchstart", startVideo);
};

document.addEventListener("touchstart", startVideo);

// Função para que cada link do menu mobile ao ser clicado ele fecha o menu e troque a imagem do menu mobile
link.forEach((l) => {
  l.addEventListener("click", () => {
    if (headerMobile.classList.contains("voltou")) {
      headerMobile.classList.remove("voltou");
      img_abrir_Menu.src = "assets/img/menu-aberto.png";
    } else {
      headerMobile.classList.add("voltou");
      img_abrir_Menu.src = "assets/img/menu-fechado.png";
    }
  });
});

// Evento para quando clicar no menu mobile ele adiciona uma classe com efeito responsivo e troque as imagens do menu

divAbrirMenu.addEventListener("click", () => {
  if (headerMobile.classList.contains("voltou")) {
    headerMobile.classList.remove("voltou");
    img_abrir_Menu.src = "assets/img/menu-aberto.png";
  } else {
    headerMobile.classList.add("voltou");
    img_abrir_Menu.src = "assets/img/menu-fechado.png";
  }
});

// função para que o quando a página entra, os efeitos css da div saindo de cima funcione

const observerCima = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("entrou");
    }
  });
});

// função para que o quando a página entra, os efeitos css da div saindo de esquerda funcione

const observeEsquerdo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("eentrou");
    }
  });
});

// Para todas as divs que tiverem a classe saiu de cima ele faz efeito para cada uma

saiu_Cima.forEach((s) => {
  observerCima.observe(s);
});

// Para todas as divs que tiverem a classe saiu de baixo ele faz efeito para cada uma

saiu_baixo.forEach((s) => {
  observerCima.observe(s);
});

// Para todas as divs que tiverem a classe saiu lado esquerdo ele faz efeito para cada uma
saiu_lado_esquerdo.forEach((s) => {
  observeEsquerdo.observe(s);
});

// Para todas as divs que tiverem a classe saiu lado direito ele faz efeito para cada uma
saiu_lado_direito.forEach((s) => {
  observeEsquerdo.observe(s);
});

// função de rolagem da página, se rolar  mais de 50px ele adiciona a classe scrolled, se não ele remove a classe scrolled

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header_Agencia_Marketing.classList.add("scrolled");
  } else {
    header_Agencia_Marketing.classList.remove("scrolled");
  }
});
