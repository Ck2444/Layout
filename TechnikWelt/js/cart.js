let cart = [];

function createCartItem(item) {
  let elementItem = document.createElement('div');
  elementItem;
  elementItem.classList.add('item');

  let elementItitle = document.createElement('h2');
  elementItitle.innerText = item.title;
  elementItem.classList.add('item__title');

  let elementImg = document.createElement('img');
  elementImg.src = item.image;
  elementImg.classList.add('item__img');

  let elementPrice = document.createElement('h4');
  elementPrice.innerText = `${item.price} €`;
  elementPrice.classList.add('item__price');

  let elementButton = document.createElement('button');
  elementButton.onclick = () => removeItem(item);
  elementButton.innerText = 'REMOVE ITEM';
  elementButton.classList.add('btn', 'btn-red');

  elementItem.append(elementItitle, elementImg, elementPrice, elementButton);

  return elementItem;
}

// function createCartItem(item) {
//   let elementItem = document.createElement('div');
//   elementItem.classList.add('item');

//   let elementImg = document.createElement('img');
//   elementImg.src = item.image;
//   elementImg.classList.add('item__img');

//   let elementDivItem = document.createElement('div');

//   let elementIitle = document.createElement('h2');
//   elementIitle.innerText = item.title;
//   elementIitle.classList.add('item__title');

//   let elememtPrice = document.createElement('h4');
//   elememtPrice.innerText = '$ ' + item.price;
//   elememtPrice.classList.add('item__price');

//   let elementButton = document.createElement('button');
//   elementButton.onclick = () => removeItem(item);
//   elementButton.innerText = 'REMOVE ITEM';
//   elementButton.classList.add('btn', 'btn-red');

//   elementItem.append(elementImg, elementDivItem, elementButton);
//   elementDivItem.append(elementIitle, elememtPrice);

//   return elementItem;
// }

function removeItem(item) {
  cart = cart.filter((product) => product.cardId !== item.cardId);

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function updateCart(cartItems = cart) {
  if (document.querySelector('.products')) {
    document.querySelector('.products').remove();
  }

  let elementCart = document.createElement('div');
  elementCart.classList.add('products');

  cartItems.forEach((item) => elementCart.append(createCartItem(item)));

  document.querySelector('.page-cart .container').append(elementCart);
}

function render() {
  cart = JSON.parse(localStorage.getItem('cart'));

  updateCart();
}

render();
