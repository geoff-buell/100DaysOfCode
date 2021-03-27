document.addEventListener('DOMContentLoaded', () => {

  const color = document.querySelector('.color');
  const hex = document.querySelector('.hex');
  const btn = document.querySelector('.btn');

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    color.style.background = `#${randomColor}`;
    hex.textContent = `#${randomColor}`;
  }

  window.addEventListener('load', () => generateColor());

  btn.addEventListener('click', () => generateColor());

});