lucide.createIcons();
AOS.init( {
  once: true, // whether animation should happen only once - while scrolling down
}
);


const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});