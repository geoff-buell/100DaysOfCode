document.addEventListener('DOMContentLoaded', () => {

  const capsLight = document.getElementById('caps-light');
  const text = document.getElementById('text');
  const keys = document.querySelectorAll('.key');
  
  keys.forEach((key) => key.addEventListener('click', () => {
    text.value = text.value + key.id;
  }));

});