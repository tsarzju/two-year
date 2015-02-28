$(function() {
  setTimeout(function() {
    $('div span:first-of-type').animate({
      left: '13%',
      color: 'rgba(255, 0, 0, 0.5)',
      transform: 'rotateY(360deg)'
    }, 2000);

    $('div span:last-of-type').animate({
      right: '13%',
      color: 'rgba(255, 0, 0, 0.5)',
      transform: 'rotateY(-360deg)'
    }, 2000);

    $('div i').animate({
      opacity: 1,
      transitionDelay: '.3s'
    }, 800);
  }, 1500);

  setTimeout(function() {
    window.location = "happy.html";
  },12000);
});
