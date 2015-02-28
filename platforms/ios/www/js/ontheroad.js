$(function(){
  var count = 0;
  var id = setInterval(function() {
    count++;
    if (count < 159) {
      $('#count').html(parseInt($('#count').html())+1);
    } else if (count >= 200) {
      clearInterval(id);
    }
  }, 160);

  setTimeout(function() {
    window.location = 'flyfirst.html';
  }, 30000);
});
