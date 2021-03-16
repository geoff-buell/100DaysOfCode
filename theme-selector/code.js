document.addEventListener('DOMContentLoaded', () => {

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

  const headline = 'Hello World!';
  const subheadline = 'You can update your display preferences. Cool beans!';
  const author = 'This Guy';
  const publishDate = '6:45pm Wed March 17, 2021';
  const bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut diam. Odio tempor orci dapibus ultrices in. Ut consequat semper viverra nam libero justo laoreet sit. Nibh venenatis cras sed felis. Mi tempus imperdiet nulla malesuada.';

  const body = document.body;

  body.style.margin = '0';
  body.style.padding = '0';
  body.style.fontFamily = '\'Open Sans\', sans-serif';

  const container = document.createElement('div');
  
  container.style.width = '100vw';
  container.style.height = '100vh';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  container.style.backgroundColor = colors.lightGray;

  const header = document.createElement('header');

  header.style.width = '100%';
  header.style.height = '10rem';
  header.style.display = 'flex';
  header.style.justifyContent = 'space-around';
  header.style.alignItems = 'center';
  header.style.backgroundColor = colors.warmGray;

  const logo = document.createElement('div');

  logo.textContent = 'LOGO';
  logo.style.fontSize = '1.5rem';
  logo.style.fontWeight = 'bold';
  logo.style.color = colors.almostBlack;
  logo.style.width = '5rem';
  logo.style.height = '5rem';
  logo.style.display = 'flex';
  logo.style.justifyContent = 'center';
  logo.style.alignItems = 'center';
  logo.style.borderRadius = '50%'
  logo.style.border = `0.2rem solid ${colors.almostBlack}`;
  logo.style.transform = 'rotate(-25deg)';

  const pref = document.createElement('div');

  pref.style.width = '20rem';
  pref.style.height = '5rem';
  pref.style.display = 'flex';
  pref.style.justifyContent = 'space-evenly';
  pref.style.alignItems = 'center';
  pref.style.borderRadius = '1rem';
  pref.style.border = `0.1rem solid ${colors.gray}`;

  const lightBtn = document.createElement('button');

  lightBtn.textContent = 'Light';
  lightBtn.style.width = '4rem';
  lightBtn.style.height = '2rem';

  const darkBtn = document.createElement('button');

  darkBtn.textContent = 'Dark';
  darkBtn.style.width = '4rem';
  darkBtn.style.height = '2rem';

  const redBtn = document.createElement('button');

  redBtn.textContent = 'Red';
  redBtn.style.width = '4rem';
  redBtn.style.height = '2rem';

  const main = document.createElement('main');

  main.style.width = '85%';
  main.style.height = '100%';
  main.style.padding = '0 2rem';
  main.style.boxSizing = 'border-box';
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
  header.appendChild(logo);
  header.appendChild(pref);
  pref.appendChild(lightBtn);
  pref.appendChild(darkBtn);
  pref.appendChild(redBtn);
  main.appendChild(h1);
  main.appendChild(h3);
  main.appendChild(details);
  main.appendChild(p);

});