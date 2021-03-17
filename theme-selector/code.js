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

  // =============== EXAMPLE ARTICLE INFO =============== //

  let headline = 'Hello World!';

  let subheadline = 'You can update your display preferences.';

  let author = 'This Guy';

  let publishDate = '6:45pm Wed March 17, 2021';

  let bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut diam. Odio tempor orci dapibus ultrices in. Ut consequat semper viverra nam libero justo laoreet sit. Nibh venenatis cras sed felis. Mi tempus imperdiet nulla malesuada.';

  // =============== ELEMENTS =============== //

  const body = document.body;

  const container = document.createElement('div');
  container.className = 'container';

  const header = document.createElement('header');

  const headerContent = document.createElement('div');
  headerContent.className = 'header-content';

  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.textContent = 'LOGO';
  logo.style.color = colors.tomatoRed;
  logo.style.border = `0.2rem solid ${colors.tomatoRed}`;

  const dropdown = document.createElement('div');
  dropdown.className = 'dropdown';

  const dropBtn = document.createElement('button');
  dropBtn.className = 'drop-btn';
  dropBtn.textContent = 'Preferences';

  const dropContent = document.createElement('div');
  dropContent.className = 'drop-content';
  dropContent.style.backgroundColor = colors.lightGray;
  dropContent.style.border = `0.1rem solid ${colors.darkGray}`;
  
  const light = document.createElement('a');
  light.textContent = 'Light Mode';
  light.href = '#';
  
  const dark = document.createElement('a');
  dark.textContent = 'Dark Mode';
  dark.href = '#';

  const red = document.createElement('a');
  red.textContent = 'Red Mode';
  red.href = '#';

  const main = document.createElement('main');

  const h1 = document.createElement('h1');
  h1.textContent = headline;
  h1.style.marginTop = '3rem';

  const h3 = document.createElement('h3');
  h3.textContent = subheadline;

  const details = document.createElement('p');
  details.textContent = `${publishDate} | Written by ${author}`;
  details.style.fontSize = '0.9rem';

  const p = document.createElement('p');
  p.textContent = bodyText;
  p.style.lineHeight = '1.6rem';

  // =============== Functions =============== //

  function applyLight() {
    container.style.backgroundColor = colors.lightGray;
    header.style.backgroundColor = colors.lightGray;
    dropBtn.style.color = colors.darkGray;
    dropBtn.style.border = `0.1rem solid ${colors.darkGray}`;
    main.style.backgroundColor = colors.white;
    h1.style.color = colors.darkGray;
    h3.style.color = colors.darkGray;
    details.style.color = colors.warmGray;
    p.style.color = colors.darkGray;
  }

  function applyDark() {
    container.style.backgroundColor = colors.almostBlack;
    header.style.backgroundColor = colors.almostBlack;
    dropBtn.style.color = colors.lightGray;
    dropBtn.style.border = `0.1rem solid ${colors.lightGray}`;
    main.style.backgroundColor = colors.darkGray;
    h1.style.color = colors.gray;
    h3.style.color = colors.gray;
    details.style.color = colors.warmGray;
    p.style.color = colors.gray;
  }

  function applyRed() {
    container.style.backgroundColor = colors.darkRed;
    header.style.backgroundColor = colors.darkRed;
    dropBtn.style.color = colors.tomatoRed;
    dropBtn.style.border = `0.1rem solid ${colors.tomatoRed}`;
    main.style.backgroundColor = colors.red;
    h1.style.color = colors.darkGray;
    h3.style.color = colors.darkGray;
    details.style.color = colors.darkGray;
    p.style.color = colors.almostBlack;
  }

  function addContent() {
    body.appendChild(container);
    container.appendChild(header);
    container.appendChild(main);
    header.appendChild(headerContent);
    headerContent.appendChild(logo);
    headerContent.appendChild(dropdown);
    dropdown.appendChild(dropBtn);
    dropdown.appendChild(dropContent);
    dropContent.appendChild(light);
    dropContent.appendChild(dark);
    dropContent.appendChild(red);
    main.appendChild(h1);
    main.appendChild(h3);
    main.appendChild(details);
    main.appendChild(p);
  }
  
  addContent();
  applyDark();

});