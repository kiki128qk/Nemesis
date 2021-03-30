// click event js

for(i = 1 ; i <= 5 ; i++){
  $('#box0'+i).click(function(){
    $(this).children('.cont').toggle();
  });
}
//
var slides = document.querySelectorAll('.slides'),
    slide = document.querySelectorAll('slides li'),
    currentIdx=0,
    slideCount=slide.length,
    prevBtn=