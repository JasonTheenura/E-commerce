let currentTextSlide = 0;
const textSlider = document.querySelector('.text-slider');

function changeTextSlide(direction) {
    currentTextSlide += direction;
    if (currentTextSlide < 0) {
        currentTextSlide = 2; 
    } else if (currentTextSlide > 2) {
        currentTextSlide = 0;
    }
    const offset = -currentTextSlide * 100;
    textSlider.style.transform = `translateX(${offset}%)`;
}

// Initial display
changeTextSlide(0);
