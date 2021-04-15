document.addEventListener('DOMContentLoaded', () => {

  const instructionsBtn = document.getElementById('instructions-btn');
  const instructions = document.getElementById('instructions');
  const closeBtn = document.getElementById('close-btn');
  const resetColorBtn = document.getElementById('reset-color-btn');
  const resetAllBtn = document.getElementById('reset-all-btn');

  const surfaceArea = document.getElementById('surface-area');

  const colors = [
    '#ff3333', '#33d6ff', '#ffff33', '#33ff33', '#ffad33', '#cc33ff'
  ]; 

  let cirID = 0;

  let i = 0;
  let lastMemory; 
  
  const circlesArr = [
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
    'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o'
  ];

  circlesArr.forEach(() => {
    const div = document.createElement('div'); 
    div.classList.add('circle');
    div.id = cirID;
    cirID++;
    surfaceArea.appendChild(div);
  });

  const addColor = (e) => {
    if (e.target.classList.value === 'circle') {
      lastMemory = e.target;
      e.target.classList.add('glow');
      e.target.style.backgroundColor = colors[i];
      i++;
      if (i === colors.length) {
        i = 0;
      }
    } else if (e.target.classList.value === 'circle glow') {
      lastMemory = e.target;
      e.target.style.backgroundColor = colors[i];
      i++;
      if (i === colors.length) {
        i = 0;
      }
    }
  }

  const removeColor = (e) => {
    e.target.classList.remove('glow');
    e.target.style.backgroundColor = 'black';
  }

  const removeLast = () => {
    if (lastMemory !== undefined) {
      lastMemory.classList.remove('glow');
      lastMemory.style.backgroundColor = 'black';
    } else {
      return;
    }
  }

  const removeAll = () => {
    const allCircles = document.querySelectorAll('.circle');
    allCircles.forEach((div) => {
      div.classList.remove('glow');
      div.style.backgroundColor = 'black';
    });
  }

  const displayInstructions = () => {
    instructions.style.display = 'block';
  }

  const hideInstructions = () => {
    instructions.style.display = 'none';
  }

  document.addEventListener('mousedown', (e) => addColor(e));
  document.addEventListener('dblclick', (e) => removeColor(e));
  resetColorBtn.addEventListener('click', () => removeLast());
  resetAllBtn.addEventListener('click', () => removeAll());
  instructionsBtn.addEventListener('click', () => displayInstructions());
  closeBtn.addEventListener('click', () => hideInstructions());

});