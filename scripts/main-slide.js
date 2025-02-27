let index = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".area-atuacao-item");
    const slider = document.querySelector(".slider");
    const totalSlides = slides.length;

    index += direction;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    slider.style.transform = `translateX(${-index * 100}%)`;
}
