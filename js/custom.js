// click event js

for(i = 1 ; i <= 5 ; i++){
  $('#box0'+i).click(function(){
    $(this).children('.cont').toggle();
  });
}
//plugin Control js
$(document).ready(function(){ // 옵셥 사용하지 않을 경우 
  
  // $('.single-item').slick(); // 옵셥 사용할 경우 
  $('.banner_box').slick({ 
        slidesToShow: 1, slidesToScroll: 1,autoplay:true,arrows:false
      });
   });

//new slide js
var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 274,
    //slideMargin= 20,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

    slides.style.width = slideWidth* slideCount +'px';

    function moveSlide(num){
      slides.style.left = -num * 275 +'px';
      currentIdx= num;
    }
    nextBtn.addEventListener('click', function(){
      if(currentIdx < slideCount - 4 ){
        moveSlide(currentIdx + 1);
        //console.log(currentIdx);
      }else{
        moveSlide(0);
      }
    });
      prevBtn.addEventListener('click', function(){
        if(currentIdx > 0){
          moveSlide(currentIdx - 1);
          //console.log(currentIdx);
        }else{
          moveSlide(slideCount - 3);
        }
    });