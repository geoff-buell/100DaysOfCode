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

  let copy1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at. Velit egestas dui id ornare arcu odio. Bibendum neque egestas congue quisque egestas. Gravida arcu ac tortor dignissim convallis aenean. Risus at ultrices mi tempus imperdiet nulla malesuada. Amet consectetur adipiscing elit duis. Quam pellentesque nec nam aliquam sem et. Pulvinar pellentesque habitant morbi tristique senectus et netus. Aliquam purus sit amet luctus venenatis. Malesuada pellentesque elit eget gravida cum sociis.';

  let copy2 = 'Mattis rhoncus urna neque viverra justo nec ultrices dui. At consectetur lorem donec massa sapien faucibus et molestie ac. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Lectus magna fringilla urna porttitor. Tristique nulla aliquet enim tortor. Massa massa ultricies mi quis hendrerit dolor magna eget est. Commodo nulla facilisi nullam vehicula. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Ut porttitor leo a diam sollicitudin tempor id eu. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Curabitur gravida arcu ac tortor dignissim convallis. Scelerisque eu ultrices vitae auctor eu augue ut. Nunc mi ipsum faucibus vitae. Vivamus arcu felis bibendum ut. Ultrices vitae auctor eu augue ut lectus arcu.';

  // =============== ELEMENTS =============== //

  const body = document.body;

  const container = document.createElement('div');
  container.className = 'container';

  const header = document.createElement('header');

  const headerContent = document.createElement('div');
  headerContent.className = 'header-content';

  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.textContent = '📚';
  logo.style.color = colors.tomatoRed;
  logo.style.border = `0.2rem solid ${colors.tomatoRed}`;

  const dropdown = document.createElement('div');
  dropdown.className = 'dropdown';

  const dropBtn = document.createElement('button');
  dropBtn.className = 'drop-btn';
  dropBtn.textContent = 'Preferences';

  const dropContent = document.createElement('div');
  dropContent.className = 'drop-content';
  
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

  const p1 = document.createElement('p');
  p1.textContent = copy1;
  p1.style.lineHeight = '1.8rem';

  const p2 = document.createElement('p');
  p2.textContent = copy2;
  p2.style.lineHeight = '1.8rem';

  // =============== Functions =============== //

  function applyLight() {
    body.style.backgroundColor = colors.lightGray;
    header.style.backgroundColor = colors.lightGray;
    dropBtn.style.color = colors.darkGray;
    dropBtn.style.border = `0.1rem solid ${colors.darkGray}`;
    dropContent.style.backgroundColor = colors.lightGray;
    dropContent.style.border = `0.1rem solid ${colors.darkGray}`;
    light.style.color = colors.almostBlack;
    dark.style.color = colors.almostBlack;
    red.style.color = colors.almostBlack;
    main.style.backgroundColor = colors.white;
    h1.style.color = colors.darkGray;
    h3.style.color = colors.darkGray;
    details.style.color = colors.warmGray;
    p1.style.color = colors.darkGray;
    p2.style.color = colors.darkGray;
  }

  function applyDark() {
    body.style.backgroundColor = colors.almostBlack;
    header.style.backgroundColor = colors.almostBlack;
    dropBtn.style.color = colors.lightGray;
    dropBtn.style.border = `0.1rem solid ${colors.lightGray}`;
    dropContent.style.backgroundColor = colors.almostBlack;
    dropContent.style.border = `0.1rem solid ${colors.lightGray}`;
    light.style.color = colors.white;
    dark.style.color = colors.white;
    red.style.color = colors.white;
    main.style.backgroundColor = colors.darkGray;
    h1.style.color = colors.gray;
    h3.style.color = colors.gray;
    details.style.color = colors.warmGray;
    p1.style.color = colors.gray;
    p2.style.color = colors.gray;
  }

  function applyRed() {
    body.style.backgroundColor = colors.red;
    header.style.backgroundColor = colors.red;
    dropBtn.style.color = colors.tomatoRed;
    dropBtn.style.border = `0.1rem solid ${colors.tomatoRed}`;
    dropContent.style.backgroundColor = colors.red;
    dropContent.style.border = `0.1rem solid ${colors.tomatoRed}`;
    light.style.color = colors.tomatoRed;
    dark.style.color = colors.tomatoRed;
    red.style.color = colors.tomatoRed;
    main.style.backgroundColor = colors.darkRed;
    h1.style.color = colors.tomatoRed;
    h3.style.color = colors.tomatoRed;
    details.style.color = colors.lightRed;
    p1.style.color = colors.tomatoRed;
    p2.style.color = colors.tomatoRed;
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
    main.appendChild(p1);
    main.appendChild(p2);
  }
  
  addContent();
  applyLight();

});