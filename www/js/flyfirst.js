$(function(){
  var count = 0;
  var id = setInterval(function() {
    count++;
    $('#count').html(parseInt($('#count').html())+1);
    if (count >= 101) {
      clearInterval(id);
    }
  }, 120);

  setTimeout(function() {
    window.location = 'contact.html';
  }, 18000);
});
