document.addEventListener('DOMContentLoaded', () => {

  const productSearch = document.getElementById('product-search');
  const clearBtn = document.querySelector('.fa-times');
  const results = document.querySelector('.results-wrapper');
  
  let products = [
    'apples', 'bananas', 'grapefruit', 'kiwi', 'avocados', 
    'lettuce', 'tomatoes', 'cheese', 'bread', 'yogurt', 
    'peas', 'carrots', 'broccoli', 'beans', 'pizza',
    'pasta', 'rice', 'cereal', 'butter', 'milk',
    'eggs', 'onions', 'garlic', 'honey', 'soup',
    'salt', 'pepper', 'oregano', 'basil', 'paprika'
  ];

  const list = document.createElement('ul');
  list.className = 'list';

  products.forEach((product) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = product;
    a.href = '#';
    li.appendChild(a);
    li.className = 'list-item';
    list.appendChild(li);
  });
  
  results.appendChild(list);

  const displayFiltered = () => {
    const filter = productSearch.value.toLowerCase();
    const items = list.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
      const a = items[i].getElementsByTagName('a')[0];
      const txtVal = a.textContent || a.textContent;
      if (txtVal.toLowerCase().indexOf(filter) > -1) {
        items[i].style.display = '';
      } else {
        items[i].style.display = 'none';
      }
    }
  }  
  
  productSearch.addEventListener('keyup', () => {
    displayFiltered();
  });

  clearBtn.addEventListener('click', () => {
    productSearch.value = '';
    displayFiltered();
  });

});
