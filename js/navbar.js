var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("#navbar").css('top', 0);
  } else {
    $("#navbar").css('top', "-200px");
  }

  prevScrollpos = currentScrollPos;
}

$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');

    if ($("#navbarSupportedContent20").hasClass('show')){
      $('.container-fluid').css('background-image', 'inherit');
      $('body').css('overflow', 'scroll');
      $('.animated-icon1 span').css('background', '#fff');
      $('.navbar-collapse').css('height', '100vh');
    } else {
      $('.container-fluid').css('background-image', 'linear-gradient(to bottom, rgba(197,160,159,1), rgba(197,160,159,0.95))');
      $('body').css('overflow', 'hidden');
      $('.animated-icon1 span').css('background', '#000');
      $('.container-fluid').css('heigh', '100vh');
    }

    if ($("#mobile-nav").hasClass('open')){
      $('.animated-icon1 span').css('background', '#fff');
    }else {
      if($("#overlay").css("opacity") == 1){
        $('.animated-icon1 span').css('background', '#fff');
      }else{
        $('.animated-icon1 span').css('background', '#000');
      }
    }

  });
});
