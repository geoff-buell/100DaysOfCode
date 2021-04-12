document.addEventListener('DOMContentLoaded', () => {

  const eightBall = document.querySelector('.eight-ball'),
        numEight = document.querySelector('.num-eight'),
        display = document.querySelector('.circle'),
        triangles = document.querySelector('.triangle-wrap'),
        fortune = document.querySelector('.fortune'),
        borderShadow = document.querySelector('.border-shadow'),
        coreShadow = document.querySelector('.core-shadow');

  triangles.style.opacity = '0';

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

  let nPosX = 1,
      nScale = 1,
      dPosX = -400,
      dScale = 0.5;

  const rotate = () => {
    numEight.style.transform = `translateX(${nPosX}px) scaleX(${nScale})`;

    nPosX++;
    nScale -= 0.00248756219; // this num is a product of trial and error
    if (nScale === 0.5) {
      numEight.style.tranform = 'scaleX(0)';
    }

    dPosX++;
    if (dPosX < -200) {
      display.style.transform = `translateX(${dPosX}px) scaleX(0)`;
    } else {
      dScale += 0.00248756219;
      display.style.transform = `translateX(${dPosX}px) scaleX(${dScale})`;
    }
    
    if (dPosX < 0) {
      setTimeout(() => rotate(), 10);
    } else {
      borderShadow.style.display = 'none';
      fortune.textContent = 'Ask a question';
      setTimeout(() => fadeIn(), 1000);
      setTimeout(() => fadeOut(), 4000);
    }
  }

  const shake = () => {
    setTimeout(() => {
      eightBall.style.transform = 'translateY(-40px)';
      coreShadow.style.transform = 'scale(0.85)';
    }, 100);
    setTimeout(() => {
      eightBall.style.transform = 'translateX(-40px) translateY(-40px)';
      coreShadow.style.transform = 'scale(0.85) translateX(-40px)';
    }, 400);
    setTimeout(() => {
      eightBall.style.transform = 'translateX(0) translateY(-40px)';
      coreShadow.style.transform = 'scale(0.85) translateX(0)';
    }, 500);
    setTimeout(() => {
      eightBall.style.transform = 'translateX(40px) translateY(-40px)';
      coreShadow.style.transform = 'scale(0.85) translateX(40px)';
    }, 600);
    setTimeout(() => {
      eightBall.style.transform = 'translateX(0) translateY(-40px)';
      coreShadow.style.transform = 'scale(0.85) translateX(0)';
    }, 700);
    setTimeout(() => {
      eightBall.style.transform = 'translateY(0)';
      coreShadow.style.transform = 'scale(1)';
    }, 1000);
  }

  let opacity = 0;

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

  borderShadow.addEventListener('click', () => rotate());

  eightBall.addEventListener('click', () => opacity > 0 ? false : askMagicEightBall() );

});