// REQUIREMENTS
// ------------------ //
// 0) Game must turn on. Power switch floats right. Count lights up.
// 1) If pressed, strict btn must indicate on and allow no faults from player.
// 2) Once pressed, start btn begins game.
// ------------------ //
// 3) Game should have a different sound associated with each btn-main.
// 4) Game should present random series of btn presses.
// 5) Game should increment by one btn press every time player is correct.
// 6) Game should keep track of series and be able to recognize player input to match.
// 7) Game should indicate when player is wrong. Strict mode starts over after this.
// 8) Game should show count. Pace should increase every increment of 5.
// 9) Game should indicate win if player reaches 20.

// Think I need to add values to the color btns
// Values will get stored into arrays
// One for player and one for 'computer'

document.addEventListener('DOMContentLoaded', () => {

  // Audio 
  const sound1 = document.getElementById('sound-1'),
        sound2 = document.getElementById('sound-2'),
        sound3 = document.getElementById('sound-3'),
        sound4 = document.getElementById('sound-4');

  // * Buttons *
  const greenBtn = document.getElementById('green-btn'),
        redBtn = document.getElementById('red-btn'),
        blueBtn = document.getElementById('blue-btn'),
        yellowBtn = document.getElementById('yellow-btn'),
        powerBtn = document.getElementById('power-btn'),
        startBtn = document.getElementById('start'),
        strictBtn = document.getElementById('strict');   

  // * Count display *
  const countDisplay = document.getElementById('num');
  let count = 1;

  // * Strict light *
  const strictLight = document.getElementById('strict-light');

  // * Booleans *
  let isOn = false;
  let isStrict = false;
  let isStarted = false;

  // * Sequences *
  let simonSeq = [];
  let playerSeq = [];

  // Assigning numbers to represent buttons      
  [greenBtn.value, redBtn.value, blueBtn.value, yellowBtn.value] = [1,2,3,4]; 

  // * Functions *
  const greenBtnOn = () => greenBtn.style.background = '#00e600',
        greenBtnOff = () => greenBtn.style.background = '#00b300',
        redBtnOn = () => redBtn.style.background = '#ff0000',
        redBtnOff = () => redBtn.style.background = '#b30000',
        blueBtnOn = () => blueBtn.style.background = '#0066ff',
        blueBtnOff = () => blueBtn.style.background = '#0047b3',
        yellowBtnOn = () => yellowBtn.style.background = '#ffff1a',
        yellowBtnOff = () => yellowBtn.style.background = '#b3b300';

  const addSimonSeq = () => {
    const getRandom = () => Math.ceil(Math.random() * 4);
    let i = 0;
    while (i < 20) {
      simonSeq.push(getRandom());
      i++;
    }
    console.log(simonSeq);
  }

  const playSimonSeq = () => {
    let counter = 0;
    const interval = setInterval(() => {
      if (simonSeq[counter] === 1) {
        greenBtnOn();
        setTimeout(() => {
          greenBtnOff();
        }, 500);
      } else if (simonSeq[counter] === 2) {
        redBtnOn();
        setTimeout(() => {
          redBtnOff();
        }, 500);
      } else if (simonSeq[counter] === 3) {
        blueBtnOn();
        setTimeout(() => {
          blueBtnOff();
        }, 500);
      } else if (simonSeq[counter] === 4) {
        yellowBtnOn();
        setTimeout(() => {
          yellowBtnOff();
        }, 500);
      }
      simonSeq[counter++];
      if (counter === count) {
        clearInterval(interval);
      }
    }, 1000);
  }

  const togglePower = () => {
    isOn = !isOn;
    if (isOn) {
      powerBtn.style.float = 'right';
      countDisplay.style.opacity = 1;
    } else {
      powerBtn.style.float = 'left';
      countDisplay.style.opacity = 0.2;
    }
    if (isOn === false) {
      [isStrict, isStarted] = [false, false];
      strictLight.style.background = '#2e2c2c';
      countDisplay.textContent = '––';
      count = 1;
      simonSeq = [];
      // clear interval
    }
  }

  const toggleStrict = () => {
    if (isOn) {
      isStrict = !isStrict;
      if (isStrict) {
        strictLight.style.background = '#ff1a1a';
      } else {
        strictLight.style.background = '#2e2c2c';
      }
    } 
  }

  const formatCount = (count) => {
    if (count < 10) {
      return `0${count}`;
    } else {
      return count;
    }
  }

  const startGame = () => {
    if (isOn) {
      isStarted = true;
      countDisplay.textContent = formatCount(count);
      addSimonSeq();
      playSimonSeq();
      pause();
      checkPlayerSeq();
    }
  }

  // * Event Listeners *
  powerBtn.addEventListener('click', () => togglePower());
  
  startBtn.addEventListener('mousedown', () => {
    startBtn.style.boxShadow = `
      inset 0 3px 3px rgba(0,0,0,0.3), 
      inset 0 -3px 3px rgba(255,255,255,0.3)
    `;
  });
  startBtn.addEventListener('mouseup', () => {
    startBtn.style.boxShadow = `
      inset 0 -3px 3px rgba(0,0,0,0.3), 
      inset 0 3px 3px rgba(255,255,255,0.3)
    `;
    isStarted ? false : startGame();
  });

  strictBtn.addEventListener('mousedown', () => {
    strictBtn.style.boxShadow = `
      inset 0 3px 3px rgba(0,0,0,0.3), 
      inset 0 -3px 3px rgba(255,255,255,0.3)
    `;
  });
  strictBtn.addEventListener('mouseup', () => {
    strictBtn.style.boxShadow = `
      inset 0 -3px 3px rgba(0,0,0,0.3), 
      inset 0 3px 3px rgba(255,255,255,0.3)
    `;
    toggleStrict();
  });

  greenBtn.addEventListener('mousedown', () => {
    isOn ? greenBtnOn() : false;
    isStarted ? playerSeq.push(1) : false;
  });
  greenBtn.addEventListener('mouseup', () => {
    isOn ? greenBtnOff() : false;
  });

  redBtn.addEventListener('mousedown', () => {
    isOn ? redBtnOn() : false;
    isStarted ? playerSeq.push(2) : false;
  });
  redBtn.addEventListener('mouseup', () => {
    isOn ? redBtnOff() : false;
  });

  blueBtn.addEventListener('mousedown', () => {
    isOn ? blueBtnOn() : false;
    isStarted ? playerSeq.push(3) : false;
  });
  blueBtn.addEventListener('mouseup', () => {
    isOn ? blueBtnOff() : false;
  });

  yellowBtn.addEventListener('mousedown', () => {
    isOn ? yellowBtnOn() : false;
    isStarted ? playerSeq.push(4) : false;
  });
  yellowBtn.addEventListener('mouseup', () => {
    isOn ? yellowBtnOff() : false;
  });

});