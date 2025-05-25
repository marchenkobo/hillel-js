// Імпортуємо всі картинки з папки img
function importAllImages(r) {
    return r.keys().map(r);
}

// Створюємо контекст для всіх файлів із розширеннями png|jpg|jpeg|gif|svg в папці ./img
const images = importAllImages(require.context('./img', false, /\.(png|jpe?g|gif|svg)$/));

import './styles.scss';
import Slider from './slider';
import { getSliderElements } from './dom';

document.addEventListener('DOMContentLoaded', () => {
    const { images: imageElements, prevButton, nextButton, sliderPagination } = getSliderElements();

    // Присвоюємо src кожному тегу img з масиву імпортованих картинок
    images.forEach((src, index) => {
        if (imageElements[index]) {
            imageElements[index].src = src;
        }
    });

    const slider = new Slider({ images: imageElements, prevButton, nextButton, sliderPagination });
});
