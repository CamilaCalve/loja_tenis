
document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelector('.slides');
  var imagens = document.querySelectorAll('.slides img');
  var btnAnterior = document.querySelector('.anterior');
  var btnProximo = document.querySelector('.proximo');

  var indice = 0;
  var intervalo;

  function mostrarSlide() {
    slides.style.transform = 'translateX(' + (-indice * 100) + '%)';
    atualizarBolinhas();
  }

  btnProximo.addEventListener('click', function() {
    indice = (indice + 1) % imagens.length;
    mostrarSlide();
    resetarIntervalo();
  });

  btnAnterior.addEventListener('click', function() {
    indice = (indice - 1 + imagens.length) % imagens.length;
    mostrarSlide();
    resetarIntervalo();
  });

  // cria as bolinhas
  var bolinhasContainer = document.createElement('div');
  bolinhasContainer.className = 'bolinhas';
  var carrossel = document.querySelector('.carrossel');
  carrossel.appendChild(bolinhasContainer);

  for (var i = 0; i < imagens.length; i++) {
    (function(i) {
      var span = document.createElement('span');
      span.addEventListener('click', function() {
        indice = i;
        mostrarSlide();
        resetarIntervalo();
      });
      bolinhasContainer.appendChild(span);
    })(i);
  }

  function atualizarBolinhas() {
    var spans = document.querySelectorAll('.bolinhas span');
    for (var i = 0; i < spans.length; i++) {
      if (i === indice) spans[i].classList.add('ativa');
      else spans[i].classList.remove('ativa');
    }
  }

  function iniciarAutoPlay() {
    intervalo = setInterval(function() {
      indice = (indice + 1) % imagens.length;
      mostrarSlide();
    }, 4000);
  }

  function resetarIntervalo() {
    clearInterval(intervalo);
    iniciarAutoPlay();
  }

  mostrarSlide();
  iniciarAutoPlay();
});


