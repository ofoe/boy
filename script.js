/***********************************
      Transparent Navigation
***********************************/
var nav = document.getElementById('nav');
var dropdown = document.getElementById('dropdown');
// var logoImage = document.getElementById('logoImage');
// var navlink1 = document.getElementById('navlink1');
// var navlink2 = document.getElementById('navlink2');
// var navlink3 = document.getElementById('navlink3');
// var navlink4 = document.getElementById('navlink4');
// var navlink5 = document.getElementById('navlink5');
// var navlink6 = document.getElementById('navlink6');

window.onscroll = function(){
  if(window.pageYOffset > 450){
    nav.style.background = "white";
    nav.style.boxShadow = "0px 1px 10px #d3d3d3";
    dropdown.style.boxShadow = "0px 1px 10px #d3d3d3"
    // logoImage.src = "images/logoBlack.png";
    // navlink1.style.color = "black";
    // navlink2.style.color = "black";
    // navlink3.style.color = "black";
    // navlink4.style.color = "black";
    // navlink5.style.color = "black";
    // navlink6.style.color = "black";
  }
  else{
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "none";
    dropdown.style.boxShadow = "none";
    // logoImage.src = "images/logoWhite.png";
    // navlink1.style.color = "white";
    // navlink2.style.color = "white";
    // navlink3.style.color = "white";
    // navlink4.style.color = "white";
    // navlink5.style.color = "white";
    // navlink6.style.color = "white";
  }
}




/***********************************
      Shop New Apparel Slider
***********************************/

$('.owl-carousel').owlCarousel({
  loop: true,
  // margin:10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})



/***********************************
          TESTIMONIAL
***********************************/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) { 
    slideIndex = slides.length 
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}