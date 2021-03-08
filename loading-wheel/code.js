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
  
  btn.addEventListener('click', () => toggleElements());

});