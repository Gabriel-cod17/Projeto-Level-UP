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

divAbrirMenu.addEventListener("click", () => {
  if (headerMobile.classList.contains("voltou")) {
    headerMobile.classList.remove("voltou");
    img_abrir_Menu.src = "assets/img/menu-aberto.png";
  } else {
    headerMobile.classList.add("voltou");
    img_abrir_Menu.src = "assets/img/menu-fechado.png";
  }
});

const observerCima = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("entrou");
    }
  });
});

const observeEsquerdo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("eentrou");
    }
  });
});

saiu_Cima.forEach((s) => {
  observerCima.observe(s);
});

saiu_baixo.forEach((s) => {
  observerCima.observe(s);
});

saiu_lado_esquerdo.forEach((s) => {
  observeEsquerdo.observe(s);
});

saiu_lado_direito.forEach((s) => {
  observeEsquerdo.observe(s);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header_Agencia_Marketing.classList.add("scrolled");
  } else {
    header_Agencia_Marketing.classList.remove("scrolled");
  }
});
