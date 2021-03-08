document.addEventListener('DOMContentLoaded', () => {

  let products = [
    'Apples', 'Bananas', 'Grapefruit', 'Kiwi', 'Avocados', 
    'Lettuce', 'Tomatoes', 'Cheese', 'Bread', 'Yogurt', 
    'Peas', 'Carrots', 'Broccoli', 'Beans', 'Pizza'
  ];

  const productSearch = document.getElementById('product-search');
  productSearch.addEventListener('keyup', (e) => {
    // filter
  });

  const clearBtn = document.querySelector('.fa-times');
  clearBtn.addEventListener('click', () => {
    productSearch.value = '';
  });

  const displayProducts = () => {
    const list = document.createElement('ul');

    products.forEach((product) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = product;
      a.href = '#';
      li.appendChild(a);
      li.className = 'list-item';
      list.appendChild(li);
    });

    const results = document.querySelector('.results-wrapper');
    results.appendChild(list);
  }

  displayProducts();

  // const filterProducts = () => {
  //   const filteredProducts = products.filter(product => product.length > 6);
  //   console.log(filteredProducts);
  // }

  // filterProducts();
  
});