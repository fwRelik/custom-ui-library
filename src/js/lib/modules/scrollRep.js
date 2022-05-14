// Технический файл для устранение проблем прокрутки страницы.
// Technical file for troubleshooting page scrolling issues.

// Импорт ядра для использование $ функций.
// Import core to use $ functions.
import $ from '../core';

// Внутри Программная функция.
// Inside Program function.
$.prototype.scrollRep = function () {
    if (document.body.offsetHeight > window.innerHeight) {

        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
}
