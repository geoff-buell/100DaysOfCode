document.addEventListener('DOMContentLoaded', () => {

  // ==== ELEMENTS ==== //

  const container = document.querySelector('.container');
  const stealThis = document.querySelector('.steal-this');

  // Game Over box
  const messageBox = document.querySelector('.message-box'),
        messageTitle = document.querySelector('.message-title'),
        message = document.querySelector('.message'),
        closeBtn = document.querySelector('.close-btn');

  // Lasers
  const vLasers = document.querySelectorAll('.v-laser'),
        hLasers = document.querySelectorAll('.h-laser');

  // Laser positions
  const vLasersOffset = vLasers.forEach(laser => laser.offsetLeft);
  const hLasersOffset = hLasers.forEach(laser => laser.offsetTop);

  // Ruby divs
  const ruby = document.querySelector('.ruby-wrap'),
        upperLeft = document.querySelector('.r-upper-left'),
        upperMiddle = document.querySelector('.r-upper-middle'),
        upperRight = document.querySelector('.r-upper-right');

  // Ruby position      
  const rubyOffsetLeft = ruby.offsetLeft,
        rubyOffsetRight = ruby.offsetLeft + 150,
        rubyOffsetTop = ruby.offsetTop,
        rubyOffsetBottom = ruby.offsetTop + 150;
  
  // Ruby Colors
  // Colors start with red, light red, highlight red, and then shadow red.
  const rubyColors = ['#bd2222', '#de4040', '#fa6161', '#a31414'];

  const color0 = `40px solid ${rubyColors[0]}`,
        color1 = `40px solid ${rubyColors[1]}`,
        color2 = `40px solid ${rubyColors[2]}`;

  let isGameOver = false;
  let flashLasers;

  // ==== FUNCTIONS ==== //

  // Ruby Rotation Fns
  function changeColors() {
    upperLeft.style.borderBottom = color0;
    upperMiddle.style.borderTop = color1;
    upperRight.style.borderBottom = color2;
    setTimeout(() => {
      upperLeft.style.borderBottom = color2;
      upperMiddle.style.borderTop = color1;
      upperRight.style.borderBottom = color0;
      }, 500);
  }

  function rotateRuby() {
    setInterval(() => {
      changeColors();
    }, 1000);
  }
  
  rotateRuby();

  // Ruby grab and drag
  function dragRuby(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.querySelector('.glass')) {
      document.querySelector('.glass').onmousedown = dragMouseDown();
    } else {
      elmnt.onmousedown = dragMouseDown();
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  function displayLasers() {
      container.style.background = 'linear-gradient(30deg, #ff0000, #ffccff)';
      stealThis.style.visibility = 'hidden';
      // First display all lasers 
      vLasers.forEach(laser => laser.style.visibility = 'visible');
      hLasers.forEach(laser => laser.style.visibility = 'visible');
  
      // Then display one random vertical and one random horizontal laser at a time
      flashLasers = setInterval(() => {
        let randomI = Math.floor(Math.random() * 6);
        let randomJ = Math.floor(Math.random() * 6);
  
        setTimeout(() => {
          for (i = 0; i < vLasers.length; i++) {
            if (i === randomI) {
              vLasers[i].style.display = 'block';
            } else {
              vLasers[i].style.display = 'none';
            }
          }
        }, 100);
  
        setTimeout(() => {
          for (j = 0; j < hLasers.length; j++) {
            if (j === randomJ) {
              hLasers[j].style.display = 'block';
            } else {
              hLasers[j].style.display = 'none';
            }
          }
        }, 200);
        
      }, 200);
    
  }

  function gameOver(id) {
    isGameOver = true;
    if (isGameOver) {
      messageBox.style.display = 'block';
      messageTitle.textContent = 'Game Over:'
    } 
    if (id === 'drop') {
      ruby.style.display = 'none';
      message.textContent = 'You dropped the ruby.'
    } else if (id === 'laser') {
      message.textContent = 'You ran into a security laser.'
    }
  }

  function win() {
    isGameOver = true;
    if (isGameOver) {
      messageBox.style.display = 'block';
      messageTitle.textContent = 'You Win!';
      message.textContent = 'Congratulations, you are a thief.'
    }
  }

  function reset() {
    isGameOver = false;
    vLasers.forEach(laser => laser.style.visibility = 'hidden');
    hLasers.forEach(laser => laser.style.visibility = 'hidden');
    messageBox.style.display = 'none';
    container.style.background = '#8f9bbc';
    // reset the ruby in the center
    ruby.style.display = 'block';
    ruby.style.top = '50%';
    ruby.style.left = '50%';
    ruby.style.transform = 'translate(-50%, -50%)';
    stealThis.style.visibility = 'visible';
  }

  function checkForGameOVer() {
    // Check for tripped lasers
    if (rubyOffsetLeft === vLasersOffset && 
      vLasersOffset.style.display === 'block') {
        gameOver('laser');
    } else if (rubyOffsetRight === vLasersOffset && 
      vLasersOffset.style.display === 'block') {
        gameOver('laser');
    } else if (rubyOffsetTop === hLasersOffset && 
      hLasersOffset.style.display === 'block') {
        gameOver('laser');
    } else if (rubyOffsetBottom === hLasersOffset && 
      hLasersOffset.style.display === 'block') {
        gameOver('laser');
    }
  }

  // ==== EVENT LISTENERS ==== //
  ruby.addEventListener('mousedown', () => {
    displayLasers();
    dragRuby(ruby);
    checkForGameOVer();
  });

  ruby.addEventListener('mouseup', () => gameOver('drop'));

  closeBtn.addEventListener('click', () => {
    clearInterval(flashLasers);
    reset();
  });

});
