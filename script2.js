const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

function mostrarAba(id) {
  var abas = document.getElementsByClassName("tab-content");
  for (var i = 0; i < abas.length; i++) {
    abas[i].style.display = "none";
  }

  var conteudo = document.getElementById(id);
  conteudo.style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - 1;
    }
    updateCarousel();
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  function autoAdvanceCarousel() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }

  setInterval(autoAdvanceCarousel, 7000);

  updateCarousel();
});

function esconder(el) {
  var elemento = document.getElementById(el);
  var display = elemento.style.display;

  if (display === 'none') {
    setTimeout(function() {
      elemento.style.display = 'block';
    }, 500);
  } else {
    elemento.style.display = 'none';
  }
}