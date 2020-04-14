const headerCartBtn = $('#btn-cart');
const close = $('.close');

headerCartBtn.click(function(event) {
  $('.modal').addClass('active');
  console.log('мне не кажется');
});

close.click(function(event) {
  $('.modal').removeClass('active');
});

new.WOW.init();
