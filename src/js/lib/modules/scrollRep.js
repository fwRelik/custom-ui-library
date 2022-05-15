// Технический файл для устранение проблем прокрутки страницы.
// Technical file for troubleshooting page scrolling issues.

// Импорт ядра для использование _$ функций.
// Import core to use _$ functions.
import _$ from '../core';

// Внутри Программная функция.
// Inside Program function.
_$.prototype.scrollRep = function () {
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
