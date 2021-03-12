document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.querySelector('.hamburger');
  const topBun = document.querySelector('.top-bun');
  const ingredients = document.querySelectorAll('.ingredient');
  const closeBtn = document.querySelector('.close-btn');
  const menuWrap = document.querySelector('.menu-wrap');
  let isExploded = false;

  let menuItems = ['Burgers', 'Sides', 'Drinks', 'Desserts'];

  const menu = document.createElement('ul');
  menu.className = 'menu';

  menuItems.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item;
    a.href = '#';
    li.appendChild(a);
    li.className = 'menu-item';
    menu.appendChild(li);
  });

  const handleClick = () => {
    isExploded = !isExploded;

    if (isExploded) {
      setTimeout(() => { menuWrap.appendChild(menu); }, 800);
      
      hamburger.style.justifyContent = 'space-between';
      closeBtn.style.display = 'block';

      for (let i = 0; i < ingredients.length; i++) {
        if (i % 2 === 0) {
          setTimeout(() => {
            ingredients[i].style.transform = 'translateX(-150px)';
            ingredients[i].style.transition = '0.3s ease-out';
          }, 500);
        } 
        if (i % 2 !== 0) {
          setTimeout(() => {
            ingredients[i].style.transform = 'translateX(150px)';
            ingredients[i].style.transition = '0.3s ease-out';
          }, 500);
        }
      }

    } else {
      menuWrap.removeChild(menu);
      closeBtn.style.display = 'none';

      setTimeout(() => { hamburger.style.justifyContent = 'center'; }, 800);
      
      for (let i = 0; i < ingredients.length; i++) {
        ingredients[i].style.transform = 'translateX(0px)';
      }
    }
  };

  topBun.addEventListener('click', () => handleClick());

});