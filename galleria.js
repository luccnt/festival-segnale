const swiper = new Swiper('.swiper', {
  // Mostra una fotografia alla volta
  slidesPerView: 1,
  
  // Abilita i comandi precedente/successivo
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Abilita anche il controllo da tastiera (ottimo per l'accessibilità)
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  
  // L'autoplay è disabilitato di default
});