//
const root = document.querySelector('#root');
console.log(root);
//
const form = document.createElement('form');
form.classList.add('register-form');
root.append(form);

const heading = document.createElement('h1');
heading.innerText = 'Create account';
form.append(heading);

const facebookIcon = document.createElement('img');

facebookIcon.src = './img/Vector.svg';
facebookIcon.alt = 'facebook_icon';
form.append(facebookIcon);

const twiterIcon = document.createElement('img');

twiterIcon.src = './img/twitter-fill 1.svg';
twiterIcon.alt = 'twiter_icon';
form.append(twiterIcon);

const googleIcon = document.createElement('img');

googleIcon.src = './img/google-fill 1.svg';
googleIcon.alt = 'google_icon';
form.append(googleIcon);

// обернуть "create account" и иконки в отдельный див
// для иконок тоже создать отдельный див и стилизовать его
// для "Or register using email & password" создаем отдельный "p"
// для полоски испрользуем border-bottom

//
const FNlabel = document.createElement('label');
FNlabel.setAttribute('for', 'full-name');
FNlabel.innerText = 'Full Name';
form.append(FNlabel);

const FNinput = document.createElement('input');
FNinput.type = 'text';
FNinput.placeholder = 'Enter your full name';
FNinput.id = 'full-name';
form.append(FNinput);

//CHECKBOX
const checkBoxLabel = document.createElement('label');
checkBoxLabel.setAttribute('for', 'agree');
checkBoxLabel.classList.add('container');
checkBoxLabel.innerHTML = '<a href="#">Terms and Conditions</a>';
form.append(checkBoxLabel);

const checkBoxInput = document.createElement('input');
checkBoxInput.type = 'checkbox';
checkBoxInput.id = 'agree';
checkBoxLabel.append(checkBoxInput);
//==========

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.innerText = 'Register';
form.append(submitButton);
