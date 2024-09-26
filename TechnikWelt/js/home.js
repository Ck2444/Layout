// let store = [
//     {
//       id: 1,
//       title: 'SteelSeries New Apex 9 Mini',
//       image: 'https://m.media-amazon.com/images/I/71YW8+KhOwL._AC_UY218_.jpg',
//       price: 91.7,
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//       id: 2,
//       title: 'ASUS ROG Azoth 75%',
//       image: 'https://m.media-amazon.com/images/I/61E5W37UANL._AC_UY218_.jpg',
//       price: 277,
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//       id: 3,
//       title: 'Razer Ornata V3',
//       image: 'https://m.media-amazon.com/images/I/71pqfvJKW5L._AC_UY218_.jpg',
//       price: 37.99,
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//       id: 4,
//       title: 'Logitech G PRO Mechanical',
//       image: 'https://m.media-amazon.com/images/I/51K1mE5uVyL._AC_UY218_.jpg',
//       price: 430.99,
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//       id: 5,
//       title: 'Razer BlackWidow V4',
//       image: 'https://m.media-amazon.com/images/I/81yOuAUQAiL._AC_UY218_.jpg',
//       price: 205,
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//       id: 6,
//       title: 'SteelSeries USB Apex Pro',
//       image: 'https://m.media-amazon.com/images/I/811-0kItnvL._AC_UY218_.jpg',
//       price: 36.8,
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     },
//   ]
let store = [];
let filteredStore = [];

//let text = JSON.prarse(localStorage.getItem("sortBy"))
//let text = getLocalStorage("sortBy")

//localStorage.setItem("key", JSON.strigify({name:"John"}))
////setLocalStorage("key", ["hello"])
const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const setLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

function createProducts(products, elementClassName, elementAppendClassName) {
  if (document.querySelector('.products')) {
    document.querySelector('.products').remove();
  }

  let elementProducts = document.createElement('div');
  elementProducts.classList.add(elementClassName);

  products.forEach((item) => {
    elementProducts.append(createProductsItem(item));
  });

  document.querySelector(elementAppendClassName).append(elementProducts);
}

function cutTextByLength(text, length) {
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

function createProductsItem(item) {
  let elementItem = document.createElement('div');
  elementItem;
  elementItem.classList.add('item');

  let elementItitle = document.createElement('h2');
  elementItitle.innerText = cutTextByLength(item.title, 20);
  elementItem.classList.add('item__title');

  let elementImg = document.createElement('img');
  elementImg.src = item.image;
  elementImg.classList.add('item__img');

  let elementDescription = document.createElement('p');
  elementDescription.innerText = cutTextByLength(item.description, 40);
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
  let cart = getLocalStorage('cart');

  if (cart) {
    cart.push({ ...item, cardId: Date.now() });

    setLocalStorage('cart', cart);
  } else {
    setLocalStorage('cart', [{ ...item, cardId: Date.now() }]);
  }
  //   cart.push({ ...item, cardId: Math.random() });
  //   console.log(cart);
  // updateCart();
}

createProducts(store, 'products', '.page-home .container');

function handlerChangeInput(e) {
  filteredStore = store.filter(
    (item) => item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1,
  );
  createProducts(filteredStore, 'products', '.page-home .container');
}

const filterBySort = (e = null) => {
  let sortStore = [];
  let data = filteredStore.length > 0 ? [...filteredStore] : [...store];
  let getSelectetedOption = getLocalStorage('sortBy');
  let selected = (e?.target?.value ?? getSelectetedOption) || '0';

  // if else
  // if (selected === '1') {
  //   sortStore = data.sort((a, b) => b.price - a.price);
  // } else if (selected === '2') {
  //   sortStore = data.sort((a, b) => a.price - b.price);
  // } else {
  //   sortStore = data;
  // }

  // switch case
  switch (selected) {
    case '1':
      sortStore = data.sort((a, b) => b.price - a.price);
      break;
    case '2':
      sortStore = data.sort((a, b) => a.price - b.price);
      break;
    case '3':
      sortStore = data.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case '4':
      sortStore = data.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      sortStore = data;
      break;
  }

  setLocalStorage('sortBy', selected);
  createProducts(sortStore, 'products', '.page-home .container');
};

function render() {
  let filter = document.querySelector('.product-filter');
  let searchForm = document.querySelector('.search-form__input');
  searchForm.onkeyup = handlerChangeInput;
  filter.addEventListener('change', filterBySort);

  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
      store = data;

      createProducts(store, 'products', '.page-home .container');
      filterBySort();
    })
    .finally(() => {
      let getSelectetedOption = getLocalStorage('sortBy');
      filterBySort();
      filter.value = String(getSelectetedOption);
    });
}

render();
