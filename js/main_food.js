const headerCartBtn = $('#btn-cart');
const close = $('.close');

headerCartBtn.click(function(event) {
  $('.modal').addClass('active');
});

close.click(function(event) {
  $('.modal').removeClass('active');
});

new WOW().init();


// day 1

const buttonAuth = document.querySelector('.btn-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeBtn = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const btnCart = document.querySelector('#btn-cart');
const userName = document.querySelector('.user-name');
const btnOut = document.querySelector('#btn-out');


let login = localStorage.getItem('foodDelivery');

let result = '';

console.log(login);

function toggleModalAuth() {
  modalAuth.classList.add('active');
} 

function removeModal() {
  modalAuth.classList.remove('active');
}



function authorized() {
  console.log('Авторизован');

  function logOut() {
    login = '';
    localStorage.removeItem('foodDelivery');
    buttonAuth.style.display = '';
    userName.style.display = '';
    btnOut.style.display = '';
    btnOut.removeEventListener('click', logOut);
    checkAuth();
  }

  userName.textContent = login;

  // btnCart.style.display = 'block';
  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  btnOut.style.display = 'block';

  btnOut.addEventListener('click', logOut);
}

function notAuthorized() {
  console.log('Не авторизован');

  function logIn(event) {
    event.preventDefault();
    login = loginInput.value;

    emptyAlert();

    localStorage.setItem('foodDelivery', login);

    

    removeModal();
    buttonAuth.removeEventListener('click', toggleModalAuth);
    closeBtn.removeEventListener('click', removeModal);
    logInForm.removeEventListener('submit', logIn);
    logInForm.reset();
    checkAuth();
  }

  buttonAuth.addEventListener('click', toggleModalAuth);
  closeBtn.addEventListener('click', removeModal);
  logInForm.addEventListener('submit', logIn);
}

function emptyAlert() {
  if (login == '') {
    login = prompt('Заполни поля редиска!', ['Введите логин']);
  }
}



function checkAuth() {
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
}

checkAuth();




