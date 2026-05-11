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
    $('html, body').animate({
      scrollTop: 0
    }, '300');
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


  // ========================= Odometer Js Start ===================
  if ($('.odometer').length > 0) {
    $(window).on('scroll', function () {
      $('.odometer').each(function () {
        if ($(this).isInViewport()) {
          if (!$(this).data('odometer-started')) {
            $(this).data('odometer-started', true);
            this.innerHTML = $(this).data('odometer-final');
          }
        }
      });
    });
  }
  // isInViewport helper function
  $.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  // ========================= Odometer Js End ===================


  // ========================= Magnific Popup Js Start ===================
  $('.promo__video__play').magnificPopup({
    type: 'iframe',
  });
  // ========================= Magnific Popup Js End ===================


  // ========================= Testimonial Swiper Js Start =====================
  const swiperTestimonials = new Swiper('.slider__class', {
    loop: true,
    speed: 1000,
    spaceBeteen: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        scale: ['0.9'],
        opacity: 0,
      },
      next: {
        scale: ['0.9'],
        opacity: 0,
      },
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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

        if (inputField.attr('type') === "password") {
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
  })

  sr.reveal('.class__name', {
    delay: 60,
    interval: 100,
    origin: 'bottom',
  })
  // ========================= Scroll Reveal Js End ===================


  // ========================== Table Data Label Js Start =====================
  Array.from(document.querySelectorAll('table')).forEach(table => {
    let heading = table.querySelectorAll('thead tr th');
    Array.from(table.querySelectorAll('tbody tr')).forEach((row) => {
      let columArray = Array.from(row.querySelectorAll('td'));
      if (columArray.length <= 1) return;
      columArray.forEach((colum, i) => {
        colum.setAttribute('data-label', heading[i].innerText)
      });
    });
  });
  // ========================== Table Data Label Js End =====================


  // ========================== Label Required Js Start =====================
  $.each($('input, select, textarea'), function (i, element) {
    if (element.hasAttribute('required')) {
      $(element).closest('.form-group').find('label').first().addClass('required');
    }
  });
  // ========================== Label Required Js End =====================


  // ========================= Preloader Js Start =====================
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  })
  // ========================= Preloader Js End=====================

})(jQuery);