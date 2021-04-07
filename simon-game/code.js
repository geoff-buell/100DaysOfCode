// REQUIREMENTS
// ------------------ //
// 0) Game must turn on. Power switch floats right. Count lights up.
// 1) If pressed, strict btn must indicate on and allow no faults from player.
// 2) Once pressed, start btn begins game.
// ------------------ //
// 3) Game should have a different sound associated with each main btn.
// 4) Game should present random series of btn presses.
// 5) Game should increment by one btn press every time player is correct.
// 6) Game should keep track of series and be able to recognize player input to match.
// 7) Game should indicate when player is wrong. Strict mode starts over after this.
// 8) Game should show count. Pace should increase every increment of 5.
// 9) Game should indicate win if player reaches 20.

document.addEventListener('DOMContentLoaded', () => {

  // * Audio * 
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  audioCtx.suspend();
  
  const frequencies = [110, 164, 220, 329, 261];

  const oscillators = frequencies.map((frequency) => {
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    oscillator.start(0.0);
    return oscillator;
  });

  const gainNodes = oscillators.map((oscillator) => {
    const gain = audioCtx.createGain();
    oscillator.connect(gain);
    gain.connect(audioCtx.destination);
    gain.gain.value = 0;
    return gain;
  });

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
  let isPlayerCorrect = false;

  // * Sequences *
  let simonSeq = [];
  let playerSeq = [];

  // Assigning numbers to represent buttons      
  [greenBtn.value, redBtn.value, blueBtn.value, yellowBtn.value] = [1,2,3,4]; 

  // * Functions *
  const playAudio = (num) => {
    gainNodes[num].gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.01);
  }

  const stopAudio = (num) => {
    gainNodes[num].gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.01);
  }

  const greenBtnOn = () => {
    greenBtn.style.background = '#00e600';
    playAudio(1);
  }
  const greenBtnOff = () => {
    greenBtn.style.background = '#00b300';
    stopAudio(1);
  }
  const redBtnOn = () => {
    redBtn.style.background = '#ff0000';
    playAudio(2);
  }
  const redBtnOff = () => {
    redBtn.style.background = '#b30000';
    stopAudio(2);
  }
  const blueBtnOn = () => {
    blueBtn.style.background = '#0066ff';
    playAudio(3);
  }
  const blueBtnOff = () => {
    blueBtn.style.background = '#0047b3';
    stopAudio(3);
  }
  const yellowBtnOn = () => {
    yellowBtn.style.background = '#ffff1a';
    playAudio(4);
  }
  const yellowBtnOff = () => {
    yellowBtn.style.background = '#b3b300';
    stopAudio(4);
  };

  const togglePower = () => {
    isOn = !isOn;
    if (isOn) {
      powerBtn.style.float = 'right';
      countDisplay.style.opacity = 1;
      audioCtx.resume();
    } 
    if (isOn === false) {
      powerBtn.style.float = 'left';
      countDisplay.style.opacity = 0.2;
      strictLight.style.background = '#2e2c2c';
      countDisplay.textContent = '––';
      [isStrict, isStarted] = [false, false];
      count = 1;
      simonSeq = [];
      playerSeq = [];
      audioCtx.suspend();
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

  const addToSimonSeq = () => {
    simonSeq.push(Math.ceil(Math.random() * 4));
    console.log(simonSeq);
  }

  const playSimonSeq = () => {
    let seqTimingA = 1200;
    let seqTimingB = 600;
    // These change as player levels up
    if (count > 5 &&  count <= 10) {
      seqTimingA = 1000;
      seqTimingB = 500;
    } else if (count > 10 && count <= 15) {
      seqTimingA = 800;
      seqTimingB = 400;
    } else if (count > 15 && count <= 20) {
      seqTimingA = 600;
      seqTimingB = 300;
    } 
    let index = 0;
    const interval = setInterval(() => {
      // conditions
      if (simonSeq[index] === 1) {
        greenBtnOn();
        setTimeout(() => {
          greenBtnOff();
        }, seqTimingB);
      } else if (simonSeq[index] === 2) {
        redBtnOn();
        setTimeout(() => {
          redBtnOff();
        }, seqTimingB);
      } else if (simonSeq[index] === 3) {
        blueBtnOn();
        setTimeout(() => {
          blueBtnOff();
        }, seqTimingB);
      } else if (simonSeq[index] === 4) {
        yellowBtnOn();
        setTimeout(() => {
          yellowBtnOff();
        }, seqTimingB);
      }
      // display simonSeq index based off of conditions above,
      // then increase index / happens every second
      simonSeq[index++];
      if (index === count) {
        clearInterval(interval);
      }
    }, seqTimingA);
  }

  const checkPlayerSeq = () => {
    if(isOn) {
      const a = playerSeq.toString(),
            b = simonSeq.toString();
      if (a !== b) {
        isPlayerCorrect = false;
        console.log('incorrect');
        countDisplay.textContent = '! !';
        playerSeq = [];
        if (isStrict === false) {
          setTimeout(() => {
            playGame();
          }, 2000);
        } else if (isStrict) {
          isStarted = false;
          simonSeq = [];
          count = 1;
        }
      } 
      if (a === b) {
        isPlayerCorrect = true;
        console.log('correct');
        count++;
        if (count >= 21) {
          alert('YOU WIN!!!!!!!')
          isStarted = false;
          simonSeq = [];
          playerSeq = [];
          count = 1;
        } else {
          playerSeq = [];
          addToSimonSeq();
          playGame();
        }
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

  const playGame = () => {
    const time = count * 2000 + 3000; // increase time slowly
    countDisplay.textContent = formatCount(count);
    playSimonSeq();
    setTimeout(() => {
      checkPlayerSeq();
    }, time);
  }

  const startGame = () => {
    if (isOn) {
      isStarted = true;
      addToSimonSeq();
      playGame();
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
    console.log(playerSeq);
  });
  greenBtn.addEventListener('mouseup', () => {
    isOn ? greenBtnOff() : false;
  });

  redBtn.addEventListener('mousedown', () => {
    isOn ? redBtnOn() : false;
    isStarted ? playerSeq.push(2) : false;
    console.log(playerSeq);
  });
  redBtn.addEventListener('mouseup', () => {
    isOn ? redBtnOff() : false;
  });

  blueBtn.addEventListener('mousedown', () => {
    isOn ? blueBtnOn() : false;
    isStarted ? playerSeq.push(3) : false;
    console.log(playerSeq);
  });
  blueBtn.addEventListener('mouseup', () => {
    isOn ? blueBtnOff() : false;
  });

  yellowBtn.addEventListener('mousedown', () => {
    isOn ? yellowBtnOn() : false;
    isStarted ? playerSeq.push(4) : false;
    console.log(playerSeq);
  });
  yellowBtn.addEventListener('mouseup', () => {
    isOn ? yellowBtnOff() : false;
  });

});