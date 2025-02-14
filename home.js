let index = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    index = (index + direction + slides.length) % slides.length;
    document.querySelector('.carousel').style.transform = `translateX(-${index * 100}%)`;
}