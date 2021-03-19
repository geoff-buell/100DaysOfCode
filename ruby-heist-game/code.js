document.addEventListener('DOMContentLoaded', () => {

  // ==== ELEMENTS ==== //

  const container = document.querySelector('.container');

  // Lasers
  const vLasers = document.querySelectorAll('.v-laser'),
        hLasers = document.querySelectorAll('.h-laser');
  
  // Ruby divs
  const ruby = document.querySelector('.ruby-wrap'),
        upperLeft = document.querySelector('.r-upper-left'),
        upperMiddle = document.querySelector('.r-upper-middle'),
        upperRight = document.querySelector('.r-upper-right');

  // Ruby Colors
  // Colors start with red, light red, highlight red, and then shadow red.
  const rubyColors = ['#bd2222', '#de4040', '#fa6161', '#a31414'];

  const color0 = `40px solid ${rubyColors[0]}`,
        color1 = `40px solid ${rubyColors[1]}`,
        color2 = `40px solid ${rubyColors[2]}`;

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

  // dragRuby(ruby); //change to absolute pos

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
    // First display all lasers 
    vLasers.forEach(laser => laser.style.display = 'block');
    hLasers.forEach(laser => laser.style.display = 'block');

    // Then display one random vertical and one random horizontal laser at a time
    setInterval(() => {
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
      }, 400);

      setTimeout(() => {
        for (j = 0; j < hLasers.length; j++) {
          if (j === randomJ) {
            hLasers[j].style.display = 'block';
          } else {
            hLasers[j].style.display = 'none';
          }
        }
      }, 200);
      
    }, 800);
  }

  // ==== EVENT LISTENERS ==== //

  ruby.addEventListener('mousedown', () => {
    container.style.background = 'linear-gradient(30deg, #ff0000, #ffccff)';
    displayLasers();
  });

});
