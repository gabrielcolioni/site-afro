document.addEventListener('DOMContentLoaded', function() {
  // Exemplo de interação simples, como mostrar um alerta ao clicar em "Informações"
  const infoButton = document.querySelector('#informacoes');
  infoButton.addEventListener('click', function() {
    alert('Esta música é uma crítica social profunda! Escute com atenção.');
  });
});