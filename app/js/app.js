document.addEventListener('DOMContentLoaded', () => {

    AOS.init();

    let ApartSlider = new Swiper('.apartment-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

})
