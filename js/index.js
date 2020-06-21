var prevScrollpos = window.pageYOffset;

//Scroll navbar function
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("#navbar").css('top', 0);
  } else {
    $("#navbar").css('top', "-200px");
  }

  if (prevScrollpos < 100){
    $("#overlay").css('opacity', 1); //Display overlay
    $("#overlay").css('z-index', 1); //Bring overlay to the front. This is used so options are able to be selected
    $('.overlaytext').css('display', 'block');
    $('.animated-icon1 span').css('background', '#fff');
    $("#navbar a").css('color', '#fff'); //Change text colour when overlay is shown

  } else {
    $("#overlay").css('opacity', 0); //Hide overlay
    $("#overlay").css('z-index', -1); //Bring overlay to the back. This is used so options are able to be selected
    $('.animated-icon1 span').css('background', '#000');
    $("#navbar a").css('color', '#000'); //Change text colour when overlay is shown
  }

  prevScrollpos = currentScrollPos;

}

//Navbar click and drop down
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
      $('.container-fluid').css('height', '100vh');
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
