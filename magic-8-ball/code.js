document.addEventListener('DOMContentLoaded', () => {

  const eightBall = document.querySelector('.eight-ball'),
        triangles = document.querySelector('.triangle-wrap'),
        shadow = document.querySelector('.core-shadow'),
        fortune = document.querySelector('.fortune');

  triangles.style.opacity = '0';

  let opacity = 0;

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

  const shake = () => {
    setTimeout(() => {
      eightBall.style.transform = 'translateY(-40px)';
      shadow.style.transform = 'scale(0.85)';
    }, 100);
    setTimeout(() => {
      eightBall.style.transform = 'translateX(-40px) translateY(-40px)';
      shadow.style.transform = 'scale(0.85) translateX(-40px)';
    }, 400);
    setTimeout(() => {
      eightBall.style.transform = 'translateX(0) translateY(-40px)';
      shadow.style.transform = 'scale(0.85) translateX(0)';
    }, 500);
    setTimeout(() => {
      eightBall.style.transform = 'translateX(40px) translateY(-40px)';
      shadow.style.transform = 'scale(0.85) translateX(40px)';
    }, 600);
    setTimeout(() => {
      eightBall.style.transform = 'translateX(0) translateY(-40px)';
      shadow.style.transform = 'scale(0.85) translateX(0)';
    }, 700);
    setTimeout(() => {
      eightBall.style.transform = 'translateY(0)';
      shadow.style.transform = 'scale(1)';
    }, 1000);
  }

  const fadeIn = () => {
    if (opacity < 1) {
      opacity += .1;
      setTimeout(() => fadeIn(), 100);
    }
    triangles.style.opacity = opacity;
  }

  const fadeOut = () => {
    if (opacity > 0) {
      opacity -= .1;
      setTimeout(() => fadeOut(), 100);
    }
    triangles.style.opacity = opacity;
  }

  const askMagicEightBall = () => {
    const random = Math.floor(Math.random() * answers.length);
    fortune.textContent = answers[random];
    shake();
    setTimeout(() => fadeIn(), 1000);
    setTimeout(() => fadeOut(), 4000);
  }

  eightBall.addEventListener('click', () => opacity > 0 ? false : askMagicEightBall() );

});