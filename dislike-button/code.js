document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.container');
  const btn = document.querySelector('.btn');
  const audio = document.querySelector('.audio');
  let hue = 0;

  const changeColor = () => {
    hue = hue + 10;
    if (hue >= 360) {
      hue = 0;
    }
    container.style.backgroundColor = `hsl(${hue}, 60%, 70%)`;
  };

  const playAudio = () => {
    audio.play();
  }
  
  btn.addEventListener('click', () => {
    changeColor();
    playAudio();
  });

});