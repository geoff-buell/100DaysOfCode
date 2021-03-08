document.addEventListener('DOMContentLoaded', () => {

  const btn = document.querySelector('.btn');
  const loading = document.querySelector('.loading-wrapper');
  let isBtn = true;
  let isLoading = false;

  const toggleElements = () => { 
    isBtn = !isBtn;
    isLoading = !isLoading;
    isBtn ? btn.style.display = 'block' : btn.style.display = 'none';
    isLoading ? loading.style.display = 'block' : loading.style.display = 'none';
  }

  const startLoading = () => {
    const percentage = document.querySelector('.percentage');
    let count = 0;
    const timer= setInterval(() => {
      count++;
      percentage.textContent = `${count}%`;
      if (count > 100) {
        clearInterval(timer);
        toggleElements();
      }
    }, 200);
  }
  
  btn.addEventListener('click', () => {
    toggleElements();
    startLoading();
  });

});