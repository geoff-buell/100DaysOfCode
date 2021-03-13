document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.container');
  const btn = document.querySelector('.btn');

  const audio = document.createElement('audio');
  audio.src = 'https://actions.google.com/sounds/v1/human_voices/man_laugh_and_knee_slap.ogg';
  container.appendChild(audio);

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

  const displayEmoji = () => {
    const width = window.innerWidth;
    const randomPlacement = Math.floor(Math.random() * width);

    const img = document.createElement('img');
    img.src = 'https://bit.ly/3rONBkc';
    img.className = 'emoji';
    img.style.top = 0;
    img.style.left = `${randomPlacement}px`;

    container.appendChild(img);
    setTimeout(() => { container.removeChild(img) }, 15000);
  }
  
  btn.addEventListener('click', () => {
    changeColor();
    playAudio();
    displayEmoji();
  });

});