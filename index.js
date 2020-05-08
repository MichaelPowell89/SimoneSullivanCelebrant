var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }

  if (prevScrollpos < "30"){
    document.getElementById("overlay").style.opacity = "1";
    document.getElementById('navbar').style.color = "white";

  } else {
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById('navbar').style.color = "black";
  }

  prevScrollpos = currentScrollPos;

}
