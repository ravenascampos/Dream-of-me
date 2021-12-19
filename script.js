//abre e fecha menu (icones)
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .button-menu");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

//esconder menu quando clicar em algum item
const links = document.querySelectorAll("nav .title-menu");
for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

// Testimonials carousel slider swiper
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

//ScrollReveal
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
#home .image, #home .title-initial, #home .text, 
#about .subtitle, #about .image, #about .text, 
#toParticipate .subtitle, #toParticipate .detail, #toParticipate .image, #toParticipate .text,
#toHelp .subtitle, #toHelp image, #toHelp .text,
#testimonials .subtitle, #testimonials swiper-wrapper,
#final .title-final, #final .image, 
#footer .image, #footer .text
`,
  { interval: 100 }
);

//voltar para o top
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

//efeito máquina de escrever
function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
const titleInitial = document.querySelector(".title-initial");
typeWrite(titleInitial);
