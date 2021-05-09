document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.container');
  const content = document.createElement('p');

  container.appendChild(content);

  const text = 'Hello, my name is Geoffrey Buell.';
  let i = 0;

  const typeContent = () => {
    if (i < text.length) {
      content.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeContent, 150);
    }
  }
  
  typeContent();

});