var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween:10,
    pagination: {
      el: ".mySwiper2 .swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      768:{
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024:{
        slidesPerView: 5,
        spaceBetween: 30,
      },
    }
  });
  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 2,
    pagination: {
      el: ".mySwiper3 .swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      768:{
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024:{
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
  });
  function funcShow() {
    $('#hamb .first').toggleClass('menu__first');
    $('#hamb .second').toggleClass('menu__second');
    $('#hamb .third').toggleClass('menu__third');
    $('header').toggleClass('menu__active');
    $('.nav__menu').toggleClass('nav__menu__active');
  }

  $('.nav__menu li').click(function() {
    $('.nav__menu li').removeClass('active');
    $(this).addClass('active');
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.nav__menu__active').removeClass('nav__menu__active');
      $('.menu__active').removeClass('menu__active');

    $('#hamb .first').removeClass('menu__first');
    $('#hamb .second').removeClass('menu__second');
    $('#hamb .third').removeClass('menu__third');
    } else {
      $('.nav__menu__active').toggleClass('nav__menu__active');
      $('.menu__active').toggleClass('menu__active');

    $('#hamb .first').toggleClass('menu__first');
    $('#hamb .second').toggleClass('menu__second');
    $('#hamb .third').toggleClass('menu__third');
    }
  });