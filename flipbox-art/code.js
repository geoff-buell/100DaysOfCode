document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.container');

  const flipBoxArr = [
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f'
  ]

  flipBoxArr.forEach(() => {
    const flipBox = document.createElement('div');
    const flipBoxInner = document.createElement('div');
    const flipBoxFront = document.createElement('div');
    const flipBoxBack = document.createElement('div');
    flipBox.classList.add('flip-box');
    flipBoxInner.classList.add('flip-box-inner');
    flipBoxFront.classList.add('flip-box-front');
    flipBoxBack.classList.add('flip-box-back');
    flipBoxInner.appendChild(flipBoxFront);
    flipBoxInner.appendChild(flipBoxBack);
    flipBox.appendChild(flipBoxInner);
    container.appendChild(flipBox);
  });
  
});