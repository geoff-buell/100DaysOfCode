document.addEventListener('DOMContentLoaded', () => {

  // Ruby divs
  const ruby = document.querySelector('.ruby-wrap');
  const upperLeft = document.querySelector('.r-upper-left');
  const upperMiddle = document.querySelector('.r-upper-middle');
  const upperRight = document.querySelector('.r-upper-right');

  // Ruby Colors
  // Colors start with red, light red, highlight red, and then shadow red.
  const rubyColors = ['#bd2222', '#de4040', '#fa6161', '#a31414'];

  const color0 = `40px solid ${rubyColors[0]}`,
        color1 = `40px solid ${rubyColors[1]}`,
        color2 = `40px solid ${rubyColors[2]}`;

  
  const alarmBox = document.querySelector('.alarm-box');

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

  // dragRuby(ruby);

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

});
