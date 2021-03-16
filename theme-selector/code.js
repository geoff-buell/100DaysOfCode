document.addEventListener('DOMContentLoaded', () => {

  // ============== COLORS =============== //

  const colors = {
    white: '#FFFFFF',
    lightGray: '#F5F3F4',
    gray: '#D3D3D3',
    warmGray: '#B1A7A6',
    tomatoRed: '#E5383B',
    lightRed: '#BA181B',
    red: '#A4161A',
    darkRed: '#660708',
    darkGray: '#161A1D',
    almostBlack: '#0B090A'
  }

  // =============== FILLER INFO =============== //

  let headline = 'Hello World!';

  let subheadline = 'You can update your display preferences. Cool beans!';

  let author = 'This Guy';

  let publishDate = '6:45pm Wed March 17, 2021';

  let bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut diam. Odio tempor orci dapibus ultrices in. Ut consequat semper viverra nam libero justo laoreet sit. Nibh venenatis cras sed felis. Mi tempus imperdiet nulla malesuada.';

  // =============== ELEMENTS =============== //

  const body = document.body;

  const container = document.createElement('div');
  container.className = 'container';
  container.style.backgroundColor = colors.lightGray;

  const header = document.createElement('header');
  header.style.backgroundColor = colors.warmGray;

  const headerContent = document.createElement('div');
  headerContent.className = 'header-content';

  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.textContent = 'LOGO';
  logo.style.color = colors.almostBlack;
  logo.style.border = `0.2rem solid ${colors.almostBlack}`;

  const pref = document.createElement('div');
  pref.className = 'pref';
  pref.style.border = `0.1rem solid ${colors.gray}`;

  const lightBtn = document.createElement('button');
  lightBtn.textContent = 'Light';
  lightBtn.style.color = colors.white;
  lightBtn.style.border = `0.1rem solid ${colors.gray}`;
  
  const darkBtn = document.createElement('button');
  darkBtn.textContent = 'Dark';
  darkBtn.style.color = colors.white;
  darkBtn.style.border = `0.1rem solid ${colors.gray}`;

  const redBtn = document.createElement('button');
  redBtn.textContent = 'Red';
  redBtn.style.color = colors.white;
  redBtn.style.border = `0.1rem solid ${colors.gray}`;

  const main = document.createElement('main');
  main.style.backgroundColor = colors.white;

  const h1 = document.createElement('h1');
  h1.textContent = headline;
  h1.style.color = colors.darkGray;
  h1.style.marginTop = '3rem';

  const h3 = document.createElement('h3');
  h3.textContent = subheadline;
  h3.style.color = colors.darkGray;

  const details = document.createElement('p');
  details.textContent = `${publishDate} | Written by ${author}`;
  details.style.fontSize = '0.9rem';
  details.style.color = colors.warmGray;

  const p = document.createElement('p');
  p.textContent = bodyText;
  p.style.color = colors.darkGray;
  p.style.lineHeight = '1.6rem';
  
  body.appendChild(container);
  container.appendChild(header);
  container.appendChild(main);
  header.appendChild(headerContent);
  headerContent.appendChild(logo);
  headerContent.appendChild(pref);
  pref.appendChild(lightBtn);
  pref.appendChild(darkBtn);
  pref.appendChild(redBtn);
  main.appendChild(h1);
  main.appendChild(h3);
  main.appendChild(details);
  main.appendChild(p);

});