// Импорт ядра для использование $ функций.
// Import core to use $ functions.
import $ from '../core';

// Реализация DropDown Меню.
// Implementation of the DropDown Menu.
$.prototype.dropdown = function () {
    for (let i = 0; i < this.length; i++) {
        const id = $(this[i]).getAttr('id');
        $(this[i]).click((e) => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);

            $(e.target).siblings().find('.dropdown-item').click((e) => {
                if (e.target.tagName !== 'BUTTON') {
                    $(`[data-toggle-id="${id}"]`).fadeOut(300);
                    return;
                }
            });
        });
    }
};

// Начальная инициализация DropDown Меню.
// Initialization DropDown Menu.
// $('.dropdown-toggle').dropdown();