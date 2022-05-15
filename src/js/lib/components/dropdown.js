// Импорт ядра для использование _$ функций.
// Import core to use _$ functions.
import _$ from '../core';

// Реализация DropDown Меню.
// Implementation of the DropDown Menu.
_$.prototype.dropdown = function () {
    for (let i = 0; i < this.length; i++) {
        const id = _$(this[i]).getAttr('id');
        _$(this[i]).click((e) => {
            _$(`[data-toggle-id="${id}"]`).fadeToggle(300);

            _$(e.target).siblings().find('.dropdown-item').click((e) => {
                if (e.target.tagName !== 'BUTTON') {
                    _$(`[data-toggle-id="${id}"]`).fadeOut(300);
                    return;
                }
            });
        });
    }
};

// Начальная инициализация DropDown Меню.
// Initialization DropDown Menu.
// _$('.dropdown-toggle').dropdown();