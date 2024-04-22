var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: ".mySwiper2 .swiper-pagination",
      clickable: true,
    },
  });
  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".mySwiper3 .swiper-pagination",
      clickable: true,
    },
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