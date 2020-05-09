'use strict';

const headerCartBtn = $('#btn-cart');
const close = $('.close');

headerCartBtn.click(function(event) {
  $('.modal').addClass('active');
});

close.click(function(event) {
  $('.modal').removeClass('active');
});

// new WOW().init();


// day 1

const buttonAuth = document.querySelector('.btn-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeBtn = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const btnCart = document.querySelector('#btn-cart');
const userName = document.querySelector('.user-name');
const btnOut = document.querySelector('#btn-out');
const cardsRest = document.querySelector('.cards-restaurants');
const contHero = document.querySelector('.container-hero');
const restaurants = document.querySelector('.restaurants');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const cardsMenu = document.querySelector('.cards-menu');

let login = localStorage.getItem('foodDelivery');

let result = '';

console.log(login);

function toggleModalAuth() {
  modalAuth.classList.add('active');
} 

function removeModal() {
  modalAuth.classList.remove('active');
}

function checkAuth() {
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
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
    login = prompt('Заполни логин редиска!');
  }
}

function empty() {
  if (login == '') {
    alert('Братан, ты не авторизован!');
  } 
  
}


function createRestCards() {

  const card = `
      <a class="card card-rest">
        <img src="./img/rest/card_2.jpg" alt="" class="card-item">
        <div class="card-text">
              
          <div class="card-heading">
            <h3 class="card-title">Тануки</h3>
            <span class="card-tag tag">35 мин</span>
          </div>
              
          <div class="card-info">
            <div class="rating">
              <img src="./img/rest/star.svg" alt="star" class="rating-star">4.5
            </div>
            <div class="price">От 900 р</div>
            <div class="category">Суши</div>
          </div>
        </div>
      </a>
  `;

  cardsRest.insertAdjacentHTML('afterbegin', card);

} 

function createMenuCard() {
  const card = document.createElement('div');
  card.className = 'card';

  card.insertAdjacentHTML('afterbegin', `
      <img src="./img/rest/rest_block/rest_1.jpg" alt="" class="card-item">
      <div class="card-text">
    
        <div class="card-heading">
          <h3 class="card-title card-title-rest">Ролл угорь стандарт</h3>
        </div>
    
        <div class="card-info">
          <div class="category-rest">Рис, угорь, соус унаги, кунжут, водоросли нори.</div>
        </div>
        <div class="rest-cart">
          <button class="btn btn-prime-rest">
            <span class="btn-text-rest">В корзину</span>
            <img src="./img/rest/cart-icon.svg" alt="Корзина" class="btn-icon-rest">
          </button>
          <strong class="card-price-rest">250 &#8381;</strong>
        </div>
      </div>
  `);

  cardsMenu.insertAdjacentElement('beforeend', card);
}

function openRestCard(event) {

  const target = event.target;
  const rest = target.closest('.card-rest');

  
  if (rest) {
    empty();
    contHero.classList.add('hide');
    restaurants.classList.add('hide');
    menu.classList.remove('hide');

    cardsMenu.textContent = '';
    
    createMenuCard();
    createMenuCard();
    createMenuCard();
  }
  
}



cardsRest.addEventListener('click', openRestCard);
logo.addEventListener('click', function(){
    contHero.classList.remove('hide');
    restaurants.classList.remove('hide');
    menu.classList.add('hide');
});

createRestCards();

createRestCards();

createRestCards();

checkAuth();