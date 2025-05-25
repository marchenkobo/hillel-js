export function getSliderElements() {
    return {
        images: document.querySelectorAll('.slider__image'),
        prevButton: document.getElementById('prevButton'),
        nextButton: document.getElementById('nextButton'),
        sliderPagination: document.getElementById('sliderPagination')
    };
}
