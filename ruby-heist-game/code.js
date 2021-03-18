document.addEventListener('DOMContentLoaded', () => {

  // Ruby divs
  const rubyWrap = document.querySelector('.ruby-wrap');
  const upperLeft = document.querySelector('.r-upper-left');
  const upperMiddle = document.querySelector('.r-upper-middle');
  const upperRight = document.querySelector('.r-upper-right');

  // Ruby Colors
  // Colors start with red, light red, highlight red, and then shadow red.
  const rubyColors = ['#bd2222', '#de4040', '#fa6161', '#a31414'];

  const color0 = `40px solid ${rubyColors[0]}`,
        color1 = `40px solid ${rubyColors[1]}`,
        color2 = `40px solid ${rubyColors[2]}`;

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


});
