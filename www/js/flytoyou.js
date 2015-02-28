$(function(){
  var count = 0;
  var id = setInterval(function() {
    if (count >= 3809) {
      setTimeout(function() {
        window.location = 'meet.html';
      }, 1000);
    } else {
      count++;
      $('#count').html(parseInt($('#count').html())-1000);
    }
  }, 1);
});
