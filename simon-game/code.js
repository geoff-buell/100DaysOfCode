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

  // Buttons
  const greenBtn = document.getElementById('green-btn'),
        redBtn = document.getElementById('red-btn'),
        blueBtn = document.getElementById('blue-btn'),
        yellowBtn = document.getElementById('yellow-btn'),
        powerBtn = document.getElementById('power-btn'),
        startBtn = document.getElementById('start'),
        strictBtn = document.getElementById('strict');

  // Count display
  const count = document.getElementById('num');

  // Strict light
  const strictLight = document.getElementById('strict-light');

  // Booleans
  let isOn = false;
  let isStrict = false;

  // Functions
  const togglePower = () => {
    isOn = !isOn;
    if (isOn) {
      powerBtn.style.float = 'right';
      count.style.opacity = 1;
    } else {
      powerBtn.style.float = 'left';
      count.style.opacity = 0.2;
    }
    if (isOn === false) {
      isStrict = false;
      strictLight.style.background = '#2e2c2c';
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

  const startGame = () => {
    if (isOn) {
      // game starts
    }
  }

  // Event Listeners
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
    startGame();
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
    if (isOn) {
      greenBtn.style.background = '#00e600';
    }
  });
  greenBtn.addEventListener('mouseup', () => {
    if (isOn) {
      greenBtn.style.background = '#00b300';
    }
  });

  redBtn.addEventListener('mousedown', () => {
    if (isOn) {
      redBtn.style.background = '#ff0000';
    }
  });
  redBtn.addEventListener('mouseup', () => {
    if (isOn) {
      redBtn.style.background = '#b30000';
    }
  });

  blueBtn.addEventListener('mousedown', () => {
    if (isOn) {
      blueBtn.style.background = '#0066ff';
    }
  });
  blueBtn.addEventListener('mouseup', () => {
    if (isOn) {
      blueBtn.style.background = '#0047b3';
    }
  });

  yellowBtn.addEventListener('mousedown', () => {
    if (isOn) {
      yellowBtn.style.background = '#ffff1a';
    }
  });
  yellowBtn.addEventListener('mouseup', () => {
    if (isOn) {
      yellowBtn.style.background = '#b3b300';
    }
  });

});