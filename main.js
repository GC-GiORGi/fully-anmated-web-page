// slide-show-----------------------------------------------------
let slideIndex = 1, 
    bgs = ['#C6B5B5', '#CFCEAC', '#F9CACA'],
    slides = document.getElementsByClassName("mySlides"),
    dots = document.getElementsByClassName("dot");

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  // change background--------------------------------------------
  document.body.style.backgroundColor = bgs[slideIndex-1];
}


// page content changer---------------------------------------------------------
$(function(){

  $('.tab-panels .tabs li').on('click', function() {
      $('.tab-panels .tabs li.actives').removeClass('actives');
      $(this).addClass('actives');

       var panelToShow = $(this).attr('rel');

       $('.tab-panels .panel.actives').toggle(500, showNextPanel);

       function showNextPanel() {
         $(this).removeClass('actives');

         $('#'+panelToShow).toggle(500, function(){
           $(this).addClass('actives');
         });
       }
});

});

