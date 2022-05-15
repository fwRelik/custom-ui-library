// Импорт ядра для использование _$ функций.
// Import core to use _$ functions.
import _$ from '../core';

_$.prototype.tab = function () {
    for (let i = 0; i < this.length; i++) {
        _$(this[i]).click((e) => {
            _$(this[i])
                .addClass('tab-item--active')
                .siblings()
                .removeClass('tab-item--active')
                .closest('.tab')
                .find('.tab-content')
                .removeClass('tab-content--active')
                .eq(_$(this[i]).index())
                .addClass('tab-content--active')
        });
    }
};

// _$('[data-tabpanel] .tab-item').tab();