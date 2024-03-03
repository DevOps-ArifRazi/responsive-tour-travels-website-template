var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      loop: true,
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });