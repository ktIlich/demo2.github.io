$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#Up').fadeIn();
    } else {
      $('#Up').fadeOut();
    }
  });
  $('#Up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  });
});

/*$(function (){
  var $like=100;
  $('#like').click(function (){
    $like++;
    $('#icon-like').removeClass('fa-heart-o').addClass('fa-heart').css('color', 'red');
    $('#value').value
  })
})*/

