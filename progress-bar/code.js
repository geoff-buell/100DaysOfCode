document.addEventListener('DOMContentLoaded', () => {

  const btn = document.querySelector('.btn');
  const loadingScreen = document.querySelector('.loading-wrapper');
  let isBtn = true;
  let isLoading = false;
  let i = 0;
  
  const toggleScreens = () => {
    isBtn = !isBtn;
    isLoading = !isLoading;
    isBtn ? btn.style.display = 'block' : btn.style.display = 'none';
    isLoading ? loadingScreen.style.display = 'block' : loadingScreen.style.display = 'none';
  }
  
  const animate = () => {
    if (i === 0) {
      i = 1;
      const loadingFill = document.querySelector('.loading-fill');
      let width = 1;
      const interval = setInterval(fill, 50);
      function fill() {
        if (width >= 100) {
          clearInterval(interval);
          i = 0;
          toggleScreens();
        } else {
          width++;
          loadingFill.style.width = width + '%';
        }
      }
    }
  }

  btn.addEventListener('click', () => {
    toggleScreens();
    animate();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      toggleScreens();
      animate();
    }
  });

});