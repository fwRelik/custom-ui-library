// Импорт ядра для использование $ функций.
// Import core to use $ functions.
import $ from '../core';

// Реализация Аккордеона.
// Accordion implementation.
$.prototype.accordion = function (headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).toggleClass(headActive);
            $(this[i].nextElementSibling).toggleClass(contentActive);

            if (this[i].classList.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
            } else {
                this[i].nextElementSibling.style.maxHeight = "0px";
            }
        });
    }
};

// Начальная инициализация Аккордеона.
// Initialization of the Accordion.
// $('.accordion-head').accordion();