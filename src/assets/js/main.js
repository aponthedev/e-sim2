(function ($) {
  'use strict';

  //============================ Scroll To Top Js Start ========================
  var btn = $('.scroll-top');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      '300'
    );
  });
  //============================ Scroll To Top Js End ========================

  // ========================= Header Sticky Js Start ==============
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 300) {
      $('.header__area').addClass('fixed-header');
    } else {
      $('.header__area').removeClass('fixed-header');
    }
  });
  // ========================= Header Sticky Js End===================

  //============================ Offcanvas Js Start ============================
  $(document).on('click', '.menu__open', function () {
    $('.offcanvas__area, .overlay').addClass('active');
  });

  $(document).on('click', '.menu__close, .overlay', function () {
    $('.offcanvas__area, .overlay').removeClass('active');
  });

  //============================ Offcanvas Js End ==============================

  // ========================== Add Attribute For Bg Image Js Start =====================
  $('.bg--img').css('background-image', function () {
    var bg = 'url(' + $(this).data('background-image') + ')';
    return bg;
  });
  // ========================== Add Attribute For Bg Image Js End =====================

  // ========================= Brand Swiper Js Start =====================
  if ($('.brand__slider').length) {
    const brandSwiper = new Swiper('.brand__slider', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 8000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          spaceBetween: 40,
          slidesPerView: 2,
        },
        424: {
          spaceBetween: 40,
          slidesPerView: 2,
        },
        576: {
          spaceBetween: 40,
          slidesPerView: 3,
        },
        768: {
          spaceBetween: 50,
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 60,
          slidesPerView: 4,
        },
        1499: {
          spaceBetween: 60,
          slidesPerView: 6,
        },
      },
    });
  }
  // ========================= Brand Swiper Js End =====================

  // ========================= Odometer Js Start ===================
  // isInViewport helper function
  $.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  if ($('.odometer').length > 0) {
    function startOdometer() {
      $('.odometer').each(function () {
        if ($(this).isInViewport()) {
          if (!$(this).data('odometer-started')) {
            $(this).data('odometer-started', true);
            this.innerHTML = $(this).data('odometer-final');
          }
        }
      });
    }

    $(window).on('scroll load', startOdometer);
    startOdometer();
  }
  // ========================= Odometer Js End ===================

  // ========================= Process Scroll Line Js Start ===================
  $(window).on('scroll load resize', function () {
    let timeline = $('.process__timeline');
    if (timeline.length > 0) {
      let activeLine = $('.process__line-active');

      let timelineTop = timeline.offset().top;
      let timelineHeight = timeline.outerHeight();
      let windowHeight = $(window).height();
      let scrollTop = $(window).scrollTop();

      let scrollStart = timelineTop - windowHeight / 2;
      let scrollEnd = timelineTop + timelineHeight - windowHeight / 2;

      let progress = 0;

      if (scrollTop > scrollStart) {
        progress =
          ((scrollTop - scrollStart) / (scrollEnd - scrollStart)) * 100;
      }

      if (progress < 0) progress = 0;
      if (progress > 100) progress = 100;

      activeLine.css('height', progress + '%');
    }
  });
  // ========================= Process Scroll Line Js End ===================

  // ========================= Magnific Popup Js Start ===================
  $('.promo__video__play').magnificPopup({
    type: 'iframe',
  });
  // ========================= Magnific Popup Js End ===================

  // ========================= Testimonial Swiper Js Start =====================
  const swiperTestimonials = new Swiper('.testimonial-slider', {
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.slider-next-v2',
      prevEl: '.slider-prev-v2',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },

      991: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  // ========================= Testimonial Swiper Js End =====================

  // ========================= Select2 Js Start =====================
  if ($('.select2').length) {
    $('.select2').select2();
  }
  // ========================= Select2 Js End =====================

  // ========================= Show Hide Password Js Start ===================
  if ($('.password-show-hide').length) {
    $('.password-show-hide').each(function () {
      $(this).on('click', function () {
        let inputField = $(this).closest('.password__field').find('input');
        let openEye = $(this).find('.open-eye-icon');
        let closeEye = $(this).find('.close-eye-icon');

        if (inputField.attr('type') === 'password') {
          inputField.attr('type', 'text');
          openEye.show();
          closeEye.hide();
        } else {
          inputField.attr('type', 'password');
          openEye.hide();
          closeEye.show();
        }
      });
    });
  }
  // ========================= Show Hide Password Js End ===================

  // ========================= Scroll Reveal Js Start ===================
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 100,
    reset: true,
  });

  sr.reveal('.class__name', {
    delay: 60,
    interval: 100,
    origin: 'bottom',
  });
  // ========================= Scroll Reveal Js End ===================

  // ========================== Table Data Label Js Start =====================
  Array.from(document.querySelectorAll('table')).forEach((table) => {
    let heading = table.querySelectorAll('thead tr th');
    Array.from(table.querySelectorAll('tbody tr')).forEach((row) => {
      let columArray = Array.from(row.querySelectorAll('td'));
      if (columArray.length <= 1) return;
      columArray.forEach((colum, i) => {
        colum.setAttribute('data-label', heading[i].innerText);
      });
    });
  });
  // ========================== Table Data Label Js End =====================

  // ========================== Label Required Js Start =====================
  $.each($('input, select, textarea'), function (i, element) {
    if (element.hasAttribute('required')) {
      $(element)
        .closest('.form-group')
        .find('label')
        .first()
        .addClass('required');
    }
  });
  // ========================== Label Required Js End =====================

  // ========================= Preloader Js Start =====================
  $(window).on('load', function () {
    $('.preloader').fadeOut();
  });
  // ========================= Preloader Js End=====================
})(jQuery);
