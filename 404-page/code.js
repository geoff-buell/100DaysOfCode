document.addEventListener('DOMContentLoaded', () => {

  const cheese = document.querySelector('.cheese');

  let deg = 0;

  function spin() {
    setInterval(() => {
      deg++;
      if (deg >= 360) {
        deg = 0;
      } else {
        cheese.style.transform = `rotate(${deg}deg)`;
      }
    }, 50);
  }

  spin();
});