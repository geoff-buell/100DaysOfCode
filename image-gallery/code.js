document.addEventListener('DOMContentLoaded', () => {

  const images = document.querySelectorAll('.img-timg'),
        modal = document.querySelector('.modal'),
        content = document.querySelector('.modal-content'),
        closeBtn = document.querySelector('.close'),
        prevBtn = document.querySelector('.previous'),
        nextBtn = document.querySelector('.next'),
        caption = document.querySelector('.caption');

  let imgIndex;

  const openModal = () => {
    modal.style.display = 'block';
  }

  const closeModal = () => {
    modal.style.display = 'none';
  }

  const displayImg = () => {
    if (imgIndex > images.length - 1) { imgIndex = 0 };
    if (imgIndex < 0) { imgIndex = images.length - 1 };
    content.src = images[imgIndex].src;
    content.alt = images[imgIndex].alt;
    caption.textContent = images[imgIndex].alt;
  }  

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', () => {
      imgIndex = i;
      openModal();
      displayImg();
    });
  }

  closeBtn.addEventListener('click', () => closeModal());

  prevBtn.addEventListener('click', () => {
    imgIndex--;
    displayImg();
  });

  nextBtn.addEventListener('click', () => {
    imgIndex++;
    displayImg();
  });

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') {
      imgIndex--;
      displayImg();
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight') {
      imgIndex++;
      displayImg();
    }
  });

});