document.addEventListener('DOMContentLoaded', () => {

  const spinner = document.getElementById('spinner');
  const customize = document.getElementById('customize');
  const formWrap = document.getElementById('form-wrap');
  const closeBtn = document.getElementById('close-btn');
  const formBtn = document.getElementById('form-btn');

  const choice1 = document.getElementById('choice-1'),
        choice2 = document.getElementById('choice-2'),
        choice3 = document.getElementById('choice-3'),
        choice4 = document.getElementById('choice-4'),
        choice5 = document.getElementById('choice-5'),
        choice6 = document.getElementById('choice-6'),
        choice7 = document.getElementById('choice-7'),
        choice8 = document.getElementById('choice-8');

  const custom1 = document.getElementById('custom-choice-1'),
        custom2 = document.getElementById('custom-choice-2'),
        custom3 = document.getElementById('custom-choice-3'),
        custom4 = document.getElementById('custom-choice-4'),
        custom5 = document.getElementById('custom-choice-5'),
        custom6 = document.getElementById('custom-choice-6'),
        custom7 = document.getElementById('custom-choice-7'),
        custom8 = document.getElementById('custom-choice-8');

  const options = [
    'Tacos', 'Burgers', 'Steak', 'Ramen',
    'Salad', 'Pizza', 'Sushi', 'BBQ'
  ];

  const addOptions = () => {
    choice1.textContent = options[0];
    choice2.textContent = options[1];
    choice3.textContent = options[2];
    choice4.textContent = options[3];
    choice5.textContent = options[4];
    choice6.textContent = options[5];
    choice7.textContent = options[6];
    choice8.textContent = options[7];
  }
  
  addOptions();

  const changeOptions = () => {
    custom1.value === '' ? 
      choice1.textContent = options[0] :
      choice1.textContent = custom1.value;
    custom2.value === '' ?
      choice2.textContent = options[1] :  
      choice2.textContent = custom2.value;
    custom3.value === '' ?
      choice3.textContent = options[2] :
      choice3.textContent = custom3.value;
    custom4.value === '' ?
      choice4.textContent = options[3] :
      choice4.textContent = custom4.value;
    custom5.value === '' ?
      choice5.textContent = options[4] :
      choice5.textContent = custom5.value;
    custom6.value === '' ?
      choice6.textContent = options[5] :  
      choice6.textContent = custom6.value;
    custom7.value === '' ?
      choice7.textContent = options[6] :
      choice7.textContent = custom7.value;
    custom8.value === '' ?
      choice8.textContent = options[7] :
      choice8.textContent = custom8.value;
  }

  let deg = 0;
  let speed = 1;
  let interval;

  const changeSpeed = () => {
    speed += 0.01;
  }

  const spin = () => {
    clearInterval(interval);
    spinner.style.transform = `rotate(${deg}deg)`;
    deg++;
    changeSpeed();
    interval = setInterval(spin, speed);
  }

  spinner.addEventListener('click', () => {
    const randomTime = Math.ceil(Math.random() * 10000);
    speed = 1;
    requestAnimationFrame(spin);
    setTimeout(() => {
      clearInterval(interval);
    }, randomTime);
  });

  customize.addEventListener('click', () => {
    formWrap.style.display = 'block';
    customize.style.filter = 'blur(5px)';
  });

  closeBtn.addEventListener('click', () => {
    formWrap.style.display = 'none';
    customize.style.filter = 'blur(0)';
  });

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    changeOptions();
    formWrap.style.display = 'none';
    customize.style.filter = 'blur(0)';
  });

});