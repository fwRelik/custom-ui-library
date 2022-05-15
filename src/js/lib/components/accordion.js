// Импорт ядра для использование _$ функций.
// Import core to use _$ functions.
import _$ from '../core';

// Реализация Аккордеона.
// Accordion implementation.
_$.prototype.accordion = function ({ headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40 } = {}) {
    for (let i = 0; i < this.length; i++) {
        _$(this[i]).click(() => {
            _$(this[i]).toggleClass(headActive);
            _$(this[i].nextElementSibling).toggleClass(contentActive);

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
// _$('.accordion-head').accordion();