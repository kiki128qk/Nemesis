// click event js

for (i = 1; i <= 5; i++) {
  $("#box0" + i).click(function () {
    $(this).children(".cont").toggle();
  });
}
//plugin Control js
$(document).ready(function () {

  $(".banner_box").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  });
  // $(".").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   arrows: false,
  // });

});

//new slide js
var slides = document.querySelector(".slides"),
  slide = document.querySelectorAll(".slides li"),
  currentIdx = 0,
  slideCount = slide.length,
  slideWidth = 274,
  //slideMargin= 20,
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next");

slides.style.width = slideWidth * slideCount + "px";

function moveSlide(num) {
  slides.style.left = -num * 275 + "px";
  currentIdx = num;
}
nextBtn.addEventListener("click", function () {
  if (currentIdx < slideCount - 4) {
    moveSlide(currentIdx + 1);
    //console.log(currentIdx);
  } else {
    moveSlide(0);
  }
});
prevBtn.addEventListener("click", function () {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
    //console.log(currentIdx);
  } else {
    moveSlide(slideCount - 3);
  }
});

// tab_box tab js

var targetLink = document.querySelectorAll(".tab_tit a"),
  tabContent = document.querySelectorAll(
    ".tab_box .tab_contents .tab_group .tab_cont"
  );
console.log(tabContent);

for (var i = 0; i < targetLink.length; i++) {
  targetLink[i].addEventListener("click", function (e) {
    e.preventDefault();
    var orgTarget = e.target.getAttribute("href");
    console.log(orgTarget);

    var tabTarget = orgTarget.replace("#", "");
    for (var x = 0; x < tabContent.length; x++) {
      tabContent[x].style.display = "none";
    }
    document.getElementById(tabTarget).style.display = "block";
    for(var j=0; j< targetLink.length; j++){
      targetLink[j].classList.remove('active');
      e.target.classList.add('active');
    }
  });
}
document.getElementById('tabCont01').style.display = "block";