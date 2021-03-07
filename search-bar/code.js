document.addEventListener('DOMContentLoaded', () => {

  const productSearch = document.getElementById('product-search');
  const clearBtn = document.querySelector('.fa-times');
  const results = document.querySelector('.fake-results');

  const productArray = [Apples, Bananas, Grapefruit, Kiwi, Avocados, Lettuce,
    Tomatoes, Cheese, Bread, Yogurt, Peas, Carrots, Broccoli, Beans, Pizza];

  // append products in list form to html
  
  clearBtn.addEventListener('click', () => {
    productSearch.value = '';
  });

  productSearch.addEventListener('change', (e) => {
    // should filter() results
  });
  
});