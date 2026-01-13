const header_Agencia_Marketing = document.getElementById(
  "header_Agencia_Marketing"
);

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header_Agencia_Marketing.classList.add("scrolled");
  } else {
    header_Agencia_Marketing.classList.remove("scrolled");
  }
});
