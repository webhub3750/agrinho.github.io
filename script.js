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
