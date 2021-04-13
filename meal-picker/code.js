document.addEventListener('DOMContentLoaded', () => {

  const spinner = document.getElementById('spinner');

  const choice1 = document.getElementById('choice-1'),
        choice2 = document.getElementById('choice-2'),
        choice3 = document.getElementById('choice-3'),
        choice4 = document.getElementById('choice-4'),
        choice5 = document.getElementById('choice-5'),
        choice6 = document.getElementById('choice-6'),
        choice7 = document.getElementById('choice-7'),
        choice8 = document.getElementById('choice-8');

  const options = [
    'Tacos', 'Burgers', 'Steak', 'Chicken',
    'Salad', 'Pizza', 'Sushi', 'BBQ'
  ]

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

  const spin = () => {
    
    const randomTime = Math.ceil(Math.random() * 10000);
    let deg = 0, speed = 1;

    const int = setInterval(() => {
      spinner.style.transform = `rotate(${deg}deg)`;
      deg++
    }, speed);

    setTimeout(() => {
      clearInterval(int);
    }, randomTime);

  }

  spinner.addEventListener('click', () => spin());

});