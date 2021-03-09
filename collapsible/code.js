document.addEventListener('DOMContentLoaded', () => {

  const btn = document.querySelector('.collapse-btn');
  const btnIcon = document.querySelector('.btn-icon');
  const btnText = document.querySelector('.btn-text');
  const content = document.querySelector('.content');
  let isOpen = true;

  const toggle = () => {
    isOpen = !isOpen;
    if (isOpen) {
      btnText.innerHTML = 'Collapse';
      btnIcon.innerHTML = '−';
      content.style.display = 'block';
    } else {
      btnText.innerHTML = 'Expand';
      btnIcon.innerHTML = '+';
      content.style.display = 'none';
    }
  }

  btn.addEventListener('click', () => toggle());

});