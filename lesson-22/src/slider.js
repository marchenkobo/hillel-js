export default class Slider {
    constructor({ images, prevButton, nextButton, sliderPagination }) {
        this.images = images;
        this.prevButton = prevButton;
        this.nextButton = nextButton;
        this.sliderPagination = sliderPagination;

        this.currentSlideIndex = 0;
        this.sliderPaginationItems = [];

        this.init();
    }

    init() {
        this.images[this.currentSlideIndex].classList.add('is-active');
        this.switchStateForSliderButtons();

        for (let i = 0; i < this.images.length; i++) {
            this.createSliderPaginationItem(i);
        }

        this.sliderPaginationItems = this.sliderPagination.querySelectorAll('.slider__pagination-item');
        this.sliderPaginationItems[this.currentSlideIndex].classList.add('is-active');

        this.prevButton.addEventListener('click', () => this.switchSliderImages('previous'));
        this.nextButton.addEventListener('click', () => this.switchSliderImages('next'));
        this.sliderPagination.addEventListener('click', (e) => this.onPaginationClick(e));
    }

    switchSliderImages(direction) {
        this.images[this.currentSlideIndex].classList.remove('is-active');

        if (direction === 'previous' && this.currentSlideIndex > 0) {
            this.currentSlideIndex--;
        } else if (direction === 'next' && this.currentSlideIndex < this.images.length - 1) {
            this.currentSlideIndex++;
        }

        this.images[this.currentSlideIndex].classList.add('is-active');
        this.switchStateForSliderButtons();
        this.setCurrentPagination();
    }

    switchStateForSliderButtons() {
        this.prevButton.classList.toggle('is-disabled', this.currentSlideIndex === 0);
        this.nextButton.classList.toggle('is-disabled', this.currentSlideIndex === this.images.length - 1);
    }

    createSliderPaginationItem(index) {
        const item = document.createElement('div');
        item.classList.add('slider__pagination-item');
        item.setAttribute('data-target-index', index);
        this.sliderPagination.append(item);
    }

    setCurrentPagination() {
        this.sliderPaginationItems.forEach(item => item.classList.remove('is-active'));
        this.sliderPaginationItems[this.currentSlideIndex].classList.add('is-active');
    }

    onPaginationClick(e) {
        const target = e.target;
        if (target.classList.contains('slider__pagination-item')) {
            const targetIndex = +target.getAttribute('data-target-index');
            if (targetIndex !== this.currentSlideIndex) {
                this.images[this.currentSlideIndex].classList.remove('is-active');
                this.currentSlideIndex = targetIndex;
                this.images[this.currentSlideIndex].classList.add('is-active');
                this.setCurrentPagination();
                this.switchStateForSliderButtons();
            }
        }
    }
}
