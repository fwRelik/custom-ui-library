// Импорт ядра для использование $ функций.
// Import core to use $ functions.
import $ from '../core';

// Создание обработчика событий.
// Create an event handler.
$.prototype.on = function (eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        if (!this[i].addEventListener) {
            continue;
        }
        this[i].addEventListener(eventName, callback)
    }

    return this;
}

// Удаление обработчика событий.
// Removing the event handler.
$.prototype.off = function (eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        if (!this[i].addEventListener) {
            continue;
        }
        this[i].removeEventListener(eventName, callback)
    }

    return this;
}

// Готовый обработчик событий клика.
// Ready click event handler.
$.prototype.click = function (handler) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].addEventListener) {
            continue;
        }
        if (handler) {
            this[i].addEventListener('click', handler)
        } else {
            this[i].click();
        }
    }

    return this;
}