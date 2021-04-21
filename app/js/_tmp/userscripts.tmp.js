"use strict";

document.addEventListener('DOMContentLoaded', function () {
  /* AOS.init(); */
  //init animation lib

  /* Hamburher menu */
  var menu = document.querySelector('.mobile-menu');
  /* Aside menu */

  var burger = document.querySelector('.burger');
  /* desktop btn aside menu  */

  var menuClose = document.querySelector('.mobile-menu__close');
  /* close btn for aside menu */

  var overlay = document.querySelector('.overlay');
  /* overlay for aside menu */

  /* lock screen scroll */

  var lockScroll = function lockScroll() {
    document.body.classList.add('lock');
  };
  /* unlock screen scroll */


  var unlockScroll = function unlockScroll() {
    document.body.classList.remove('lock');
  };
  /* Open menu */


  burger.addEventListener('click', function () {
    burger.classList.add('hide');
    menu.classList.add('open');
    overlay.classList.add('open');
    lockScroll();
  });
  /* Close aside menu */

  menuClose.addEventListener('click', function () {
    burger.classList.remove('hide');
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  });
  /* Remove overlay and unlock screen scroll */

  overlay.addEventListener('click', function () {
    burger.classList.remove('hide');
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  });
  /* End of Hamburher menu */

  /* Apartments slider */

  var ApartSlider = new Swiper('.apartment-slider', {
    // Optional parameters

    /* loop: true, */
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var BigGallery = document.querySelectorAll('.big-gallery');
  BigGallery.forEach(function (el) {
    var swiper = new Swiper(el, {
      /* init slider when parant is hidden */
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      // If we need pagination
      pagination: {
        el: '.custom-swiper-pagination',
        type: 'fraction',
        renderFraction: function renderFraction(currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
        }
      },
      // Navigation arrows
      navigation: {
        nextEl: '.big-gallery-button-next ',
        prevEl: '.big-gallery-button-prev'
      }
    });
  });
  $('#room1_1').click(function () {
    ApartSlider.slideTo(0, 1000, false);
  });
  $('#room1_1a').click(function () {
    ApartSlider.slideTo(1, 1000, false);
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
  /* Init gallery tab */

  $('.gallery-tabs__link:first').click();
  /* Commerce tabs handler */

  $('.commerce__tab-item').click(function (e) {
    e.preventDefault();
    $('.commerce__tab-item').removeClass('commerce__tab-item--active');
    $('.commerce__tab-content').removeClass('commerce__tab-content--active').removeClass('in');
    var href = $(this).attr('href');
    $(this).addClass('commerce__tab-item--active');
    $(href).addClass('commerce__tab-content--active');
    setTimeout(function () {
      $(href).addClass('in');
    }, 200);
  });
  /* Init first commerce tab */

  $('.commerce__tab-item:first').click();
  /* How to buy tabs handler */

  $('.buy-apartment__tab').click(function (e) {
    e.preventDefault();
    $('.buy-apartment__tab').removeClass('buy-apartment__tab--active');
    $('.buy-apartment__tab-content').removeClass('buy-apartment__tab-content--active');
    var href = $(this).attr('href');
    $(this).addClass('buy-apartment__tab--active');
    $(href).addClass('buy-apartment__tab-content--active');
  });
  /* Init first how to buy tab */

  $('.buy-apartment__tab:first').click();
});