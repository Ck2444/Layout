const store = [
  {
    id: 1,
    title: 'SteelSeries New Apex 9 Mini',
    image: 'https://m.media-amazon.com/images/I/71YW8+KhOwL._AC_UY218_.jpg',
    price: 91.7,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    title: 'ASUS ROG Azoth 75%',
    image: 'https://m.media-amazon.com/images/I/61E5W37UANL._AC_UY218_.jpg',
    price: 277,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    title: 'Razer Ornata V3',
    image: 'https://m.media-amazon.com/images/I/71pqfvJKW5L._AC_UY218_.jpg',
    price: 37.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 4,
    title: 'Logitech G PRO Mechanical',
    image: 'https://m.media-amazon.com/images/I/51K1mE5uVyL._AC_UY218_.jpg',
    price: 430.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 5,
    title: 'Razer BlackWidow V4',
    image: 'https://m.media-amazon.com/images/I/81yOuAUQAiL._AC_UY218_.jpg',
    price: 205,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 6,
    title: 'SteelSeries USB Apex Pro',
    image: 'https://m.media-amazon.com/images/I/811-0kItnvL._AC_UY218_.jpg',
    price: 36.8,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

function createProducts(products, elementClassName, elementAppendClassName) {
  let elementProducts = document.createElement('div');
  elementProducts.classList.add(elementClassName);

  products.forEach((item) => {
    elementProducts.append(createProductsItem(item));
  });

  document.querySelector(elementAppendClassName).append(elementProducts);
}

function createProductsItem(item) {
  let elementItem = document.createElement('div');
  elementItem.classList.add('item');

  let elementItitle = document.createElement('h2');
  elementItitle.innerText = item.title;
  elementItem.classList.add('item_title');

  let elementImg = document.createElement('img');
  elementImg.src = item.image;
  elementImg.classList.add('item__img');

  let elementDescription = document.createElement('p');
  elementDescription.innerText = item.description;
  elementDescription.classList.add('item__description');

  let elementPrice = document.createElement('h4');
  elementPrice.innerText = `${item.price} €`;
  elementPrice.classList.add('item__price');

  let elementButton = document.createElement('button');
  elementButton.onclick = () => addToCart(item);
  elementButton.innerText = 'In den Warenkorb';
  elementButton.classList.add('btn');

  elementItem.append(elementItitle, elementImg, elementDescription, elementPrice, elementButton);

  return elementItem;
}

function addToCart(item) {
  alert(item.title);
}

createProducts(store, 'products', '.container');
