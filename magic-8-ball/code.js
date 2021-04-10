document.addEventListener('DOMContentLoaded', () => {

  const eightBall = document.querySelector('.eight-ball'),
        triangles = document.querySelector('.triangle-wrap'),
        fortune = document.querySelector('.fortune');

  // triangles.style.display = 'none';

  const answers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Do not count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
  ]; 

  const askMagicEightBall = () => {
    const random = Math.floor(Math.random() * answers.length);
    fortune.textContent = answers[random];
    triangles.style.display = 'block';
  }

  eightBall.addEventListener('click', () => askMagicEightBall());

});