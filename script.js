/***********************************
      Transparent Navigation
***********************************/
var nav = document.getElementById('nav');
var dropdown = document.getElementById('dropdown');

window.onscroll = function(){
  if(window.pageYOffset > 450){
    nav.style.background = "white";
    nav.style.boxShadow = "0px 1px 10px #d3d3d3";
    dropdown.style.boxShadow = "none";
  }
  else{
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "none";
    dropdown.style.boxShadow = "none";
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



















