


$(document).ready(function(){
  $("#preloader img").css("opacity" , "0")
  $("#preloader").css({
    opacity : "0" , 
    visibility : "hidden" ,
  })
  $("body").css("overflow" , "visible")


/* ******************************************************************************** */

// select to 
// fire  select
if($('.myselect').length > 0){
  $('.myselect').select2();

  
  // customize search in service select
  $(".service-select").select2({
    minimumResultsForSearch: Infinity
});
}


/* ******************************************************************************** */


// trigger file button 

$(".add-file").click(function(e){
  e.preventDefault() ;
 $(this).siblings("input[type='file'").click()
})

/* ******************************************************************************** */



// date picker 

if($(".dateInput").length > 0 ){
  $(".dateInput").flatpickr({
    enableTime: false,
    dateFormat: "Y-m-d H:i",
    disableMobile : "true"
});
}

/* ******************************************************************************** */


// nested organizational structure

$(".financial-director-nested").click(function(){
  $(".financial-branches").slideToggle(300);
  $(this).children(".plus-icon").toggleClass("la-minus");
  $(this).children(".plus-icon").toggleClass("la-plus");
})

/* ******************************************************************************** */

// organizational  nested 

$(".sector-manager-nested").click(function(){
  $(".sector-branches").slideToggle(300);
  $(this).children(".plus-icon").toggleClass("la-minus");
  $(this).children(".plus-icon").toggleClass("la-plus");
})

// select arrow rotate

if($(".select2").length > 0) {
  $(".select2").click(function(){
    $(".select2-selection__arrow").toggleClass("rotate-select-icon")
   })
}



/* ******************************************************************************** */

// main swiper

const mainSwiper = new Swiper('.mainBanner .mainSwiper', {
  loop: true,
  draggable: true,
  autoplay: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});

/* ******************************************************************************** */

// news swiper
const newsSwiper = new Swiper(' .news .swiper', {
  loop: true,
  autoplay: true,
 autoplay : {
  delay : 3500
 } ,
  pagination: {
    el: '.news-parent .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.news-parent .swiper-button-next ',
    prevEl: '.news-parent .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween : 30 ,
    },
  }
});

/* ******************************************************************************** */


// clients swiper
const clientsSwiper = new Swiper('.clients .swiper', {
  loop: true,
  autoplay : true ,
  pagination: {
    el: '.clients .swiper-pagination',
    clickable: true,
  },
 
  navigation: {
    nextEl: ' .clients .swiper-button-next',
    prevEl: '.clients .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 20
    } , 
      992: {
      slidesPerView: 5,
      spaceBetween: 15
    } , 
    1100: {
      slidesPerView: 6,
      spaceBetween: 20
    }
  }
});


/************************************************************************ */




/* ******************************************************************************** */
 

// to top button
$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, '1000');
}) 


/* ******************************************************************************** */

// open and close sideBar

$(".openNav-btn").click(function(){
  $("nav").removeClass("open-nav");
  $("body").css("overflow" , "hidden") ;
})
$(".closeNav-btn").click(function(){
  $("nav").addClass("open-nav");
  $("body").css("overflow" , "visible") ;
  $(".ul-drop").slideUp(300);
  $(".li-drop").removeClass("icon-rotate");
})

/* ******************************************************************************** */


// footer nested menu

if($(window).width() <= 768) {
  $(".footer-title").click(function(e){
    e.preventDefault() ; 
    $(this).next().slideToggle(350);
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");

  })
}

/* ******************************************************************************** */




// nav nested menu

if($(window).width() <= 768) {
  $(".li-drop").click(function (e) {
    e.preventDefault() ;
    $(this).children(".ul-drop").slideToggle(300) ;
    $(this).toggleClass("icon-rotate");
    $(".li-drop").not($(this)).children(".ul-drop ").slideUp(300);
    $(".li-drop").not($(this)).removeClass("icon-rotate");
    })
  }
  

})

/* ******************************************************************************** */



//  wow animation
new WOW().init();

