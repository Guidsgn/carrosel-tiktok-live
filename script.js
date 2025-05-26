window.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.track');
    const gifts = track.innerHTML; // pega o conteúdo original
    track.innerHTML += gifts; // duplica os presentes
  });  