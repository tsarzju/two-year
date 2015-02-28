$(function(){
  setTimeout(function() {
    $('#sh').html('I miss you.');
    $('.map-point:eq(0)').trigger('focus');
  }, 500);

  setTimeout(function() {
    $('#sg').html('I miss you, too.');
    $('.map-point:eq(1)').trigger('focus');
  }, 2500);

  setTimeout(function() {
    $('#sh').html('Bao Bao.');
    $('.map-point:eq(0)').trigger('focus');
  }, 4500);

  setTimeout(function() {
    $('#sg').html('Nie Nie.');
    $('.map-point:eq(1)').trigger('focus');
  }, 6500);

  setTimeout(function() {
    $('#sh').html('I will come to you soon.');
    $('.map-point:eq(0)').trigger('focus');
  }, 8500);

  setTimeout(function() {
    $('#sg').html('I love you.');
    $('.map-point:eq(1)').trigger('focus');
  }, 10500);

  setTimeout(function() {
    $('#sh').html('I love you, too.');
    $('.map-point:eq(0)').trigger('focus');
  }, 12500);

  setTimeout(function() {
    $('#sg').html('♥');
    $('.map-point:eq(1)').trigger('focus');
  }, 14500);

  setTimeout(function() {
    $('#sh').html('♥');
    $('.map-point:eq(0)').trigger('focus');
  }, 16500);

  setTimeout(function() {
    window.location = 'flytoyou.html';
  }, 20000);
});
