$(function(){
  $('html').on('touchend', function() {
    $( '.logo' ).animate({
      width: '0%'
    }, 3000);
    $( '.logo-rotate' ).animate({
      width: '0%'
    }, 3000);
    $('.love').animate({
      width: '60%',
      marginLeft: '10px',
      marginTop: '50px'
    }, 3000);
    $('.label').animate({
      opacity: 0
    }, 3000);
    $('.wrapper').animate({
      top:'-280px'
    }, 3000);
    $('.blink').hide();
    setTimeout(function() {
      window.location = 'ontheroad.html';
    }, 10000);
  });
});

var touch = function() {
  $( '.logo' ).animate({
    width: '0%'
  }, 3000);
  $( '.logo-rotate' ).animate({
    width: '0%'
  }, 3000);
  $('.love').animate({
    width: '60%',
    marginLeft: '10px',
    marginTop: '50px'
  }, 3000);
  $('.label').animate({
    opacity: 0
  }, 3000);
  $('.wrapper').animate({
    top:'-280px'
  }, 3000);
  $('.blink').hide();
  setTimeout(function() {
    window.location = 'ontheroad.html';
  }, 5000);
};
