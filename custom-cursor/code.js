document.addEventListener('DOMContentLoaded', () => {

  const basketball = document.getElementById('cursor-wrap');
  const box = document.getElementById('box');
  const heading = document.getElementById('heading');

  const positivePhrases = [
    'nice!', 'good job!', 'excellent!', 'wow!', 'supurb!',
    'magnificent!', 'outstanding!', 'perfect!', 'awesome!',
    'you can click!', 'fantanstic!', 'top-notch!', 'bingo!'
  ]

  let index = 0;
  
  let mousePosX = 0,
      mousePosY = 0,
      delay = 1,
      newMousePosX = 0,
      newMousePosY = 0;

  // Track mouse pos
  document.onmousemove = (e) => {
    mousePosX = e.pageX;
    mousePosY = e.pageY;
  }
  // Follow mouse pos
  function mouseFollow() {
    requestAnimationFrame(mouseFollow);

    newMousePosX += (mousePosX - newMousePosX) / delay;
    newMousePosY += (mousePosY - newMousePosY) / delay; 

    basketball.style.top = `${newMousePosY}px`;
    basketball.style.left = `${newMousePosX}px`;
  }
  // Click animation
  function handleClick() {
    basketball.classList.add('scale');
    setTimeout(() => {
      basketball.classList.remove('scale');
    }, 500);
  }

  // Change phrases 
  function changeHeader() {
    heading.innerHTML = positivePhrases[index].toString();
    index++;
    if (index >= positivePhrases.length) {
      index = 0;
    }
  }

  mouseFollow();

  document.onmousedown = () => handleClick();

  box.addEventListener('click', () => changeHeader());

});