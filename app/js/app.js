document.addEventListener('DOMContentLoaded', () => {

  /* Hamburher menu */
  const menu = document.querySelector('.mobile-menu'); /* Aside menu */
  const burger = document.querySelector('.burger'); /* desktop btn aside menu  */
  const menuClose = document.querySelector('.mobile-menu__close'); /* close btn for aside menu */
  const overlay = document.querySelector('.overlay'); /* overlay for aside menu */

  /* lock screen scroll */
  const lockScroll = () => {
    document.body.classList.add('lock');
  }
  /* unlock screen scroll */
  const unlockScroll = () => {
    document.body.classList.remove('lock');
  }

  /* Open menu */
  burger.addEventListener('click', () => {
    burger.classList.add('hide');
    menu.classList.add('open');
    overlay.classList.add('open');
    lockScroll();
  });
  /* Close aside menu */
  menuClose.addEventListener('click', () => {
    burger.classList.remove('hide');
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  });
  /* Remove overlay and unlock screen scroll */
  overlay.addEventListener('click', () => {
    burger.classList.remove('hide');
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  });
  /* End of Hamburher menu */

  /* Fix header on scroll */
  window.addEventListener("scroll", function () {
    let headerHeight = document.querySelector(".header").offsetHeight;
    let headerOffset = document.documentElement.scrollTop;
    let headerNav = document.querySelector(".header__nav");

    if (headerHeight < headerOffset) {
      headerNav.classList.add('sticky');
    } else {
      headerNav.classList.remove('sticky');
    }    
  });

  /* Public Area on hover*/
  $('.public-area__item').on('touchstart mouseenter', function (e) {
    e.stopPropagation();
    e.preventDefault();

    var id = $(this).attr('id');

    $('.public-area__info').removeClass('public-area__info_acvite')
    $(id).addClass('public-area__info_acvite');
  });
  /* Public Area on hover leave*/
  $('.public-area__item').on('mouseleave', function (e) {
    e.stopPropagation();
    e.preventDefault();

    var id = $(this).attr('id');

    $('.public-area__info').removeClass('public-area__info_acvite')
  });

  /* ScrollTo */
  $('.nav__link').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
    
      const hash = this.hash;
    
      $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
          },300);
      }
  });

  /* Apartments slider */
  const ApartSlider = new Swiper('.apartment-slider__floor1', {
    // Optional parameters
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  /* Apartment go to slide */
  $('.entrance__room').click(function (e) {
    var filter = $(this).data('slide');
    ApartSlider.slideTo(filter, 1000, false);

  });
  
  const ApartSlider2 = new Swiper('.apartment-slider__floor2', {
    // Optional parameters
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  /* Apartment go to slide */
  $('.entrance__room').click(function (e) {
    var filter = $(this).data('slide');
    ApartSlider2.slideTo(filter, 1000, false);

  });

  /* Floor tabs  */
  /* Floor 1 */
  $('.floor-switch__tab-item--1').click(function () {
    $('.floor-switch__tab-item--2').removeClass('floor-switch__tab-item--active');
    $('.floor-map_2').removeClass('floor-map_active');
    $('.apartment-slider__floor2').removeClass('apartment-slider__active')
    $(this).addClass('floor-switch__tab-item--active');
    $('.floor-map_1').addClass('floor-map_active');
    $('.apartment-slider__floor1').addClass('apartment-slider__active')
  });
  /* Floor 2 */
  $('.floor-switch__tab-item--2').click(function () {
    $('.floor-switch__tab-item--1').removeClass('floor-switch__tab-item--active');
    $('.floor-map_1').removeClass('floor-map_active');
    $('.apartment-slider__floor1').removeClass('apartment-slider__active')
    $(this).addClass('floor-switch__tab-item--active');
    $('.floor-map_2').addClass('floor-map_active');
    $('.apartment-slider__floor2').addClass('apartment-slider__active')
  });
  
  const BigGallery = document.querySelectorAll('.big-gallery');
  BigGallery.forEach((el) => {
    let swiper = new Swiper(el, {
      /* init slider when parant is hidden */
      observer: true,
      observeParents: true,
      slidesPerView: 1,

      // If we need pagination
      pagination: {
        el: '.custom-swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
            ' из ' +
            '<span class="' + totalClass + '"></span>';
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: '.big-gallery-button-next ',
        prevEl: '.big-gallery-button-prev',
      },
    });
  });

  /* Gallery tabs handler */
  $('.gallery-tabs__link').click(function (e) {
    e.preventDefault();

    $('.gallery-tabs__link').removeClass('gallery-tabs__link--active');
    $('.gallery__tab').removeClass('gallery__tab--active');
    
    
    var href = $(this).attr('href');
    
    $(this).addClass('gallery-tabs__link--active');
    $(href).addClass('gallery__tab--active');

  });

  /* Commerce tabs handler */
  $('.commerce__tab-item').click(function (e) {
    e.preventDefault();

    $('.commerce__tab-item').removeClass('floor-switch__tab-item--active');
    $('.commerce__tab-content').removeClass('commerce__tab-content--active').removeClass('in');

    
    var href = $(this).attr('href');

    $(this).addClass('floor-switch__tab-item--active');
    $(href).addClass('commerce__tab-content--active');

	  setTimeout(function () {
        $(href).addClass('in');
    }, 200);
  });

  /* How to buy tabs handler */
  $('.buy-apartment__tab').click(function (e) {
    e.preventDefault();

    $('.buy-apartment__tab').removeClass('buy-apartment__tab--active');
    $('.buy-apartment__tab-content').removeClass('buy-apartment__tab-content--active');

    
    var href = $(this).attr('href');

    $(this).addClass('buy-apartment__tab--active');
    $(href).addClass('buy-apartment__tab-content--active');


  });

  /* Build progress filter by years*/
  $('.build-progress-nav').on( 'click', 'a', function() {
    var filter = $(this).attr('data-filter');
    
    $( '.build-progress-nav__link' ).removeClass( 'build-progress-nav__link--active' );

    $('.build-progress-slider .swiper-slide').css('display', 'none')
    $('.build-progress-slider .swiper-slide' + filter).css('display', 'block')
    /* $( '.build-progress-nav__link' ).removeClass( '.build-progress-nav__link--active' ); */
    $(this).addClass('build-progress-nav__link--active');
    
    buildProgress.updateSize();
    buildProgress.updateSlides();
    buildProgress.updateSlidesClasses();
    buildProgress.slideTo(0, 1000, false);
    
    return false;
  });

  /* Build progress filter by month*/
  $('#filter-month').on('change', function () {
    
    var sel = this.value;
    console.log(sel);
    
    $('.build-progress-slider .swiper-slide').css('display', 'none')
    $('.build-progress-slider .swiper-slide' + '.'+sel).css('display', '')

    buildProgress.updateSize();
    buildProgress.updateSlides();
    buildProgress.updateSlidesClasses();
    buildProgress.slideTo(0, 1000, false);

    return false;
  });
  
  /* Build progress slider init */
  const buildProgress = new Swiper('.build-progress-slider', {
    observer: true,
    runCallbacksOnInit: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1.5,
        spaceBetween: 30
      },
      // when window width is >= 480px
      1000: {
        slidesPerView: 2.2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 2.4,
        spaceBetween: 30
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    updateOnImagesReady: true
  });

});