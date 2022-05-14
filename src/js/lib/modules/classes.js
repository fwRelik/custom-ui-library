// Импорт ядра для использование $ функций.
// Import core to use $ functions.
import $ from '../core';

// Проверка на наличие Класса.
// Check for the presence of the Class.
$.prototype.cont = function (...className) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].classList.contains(...className)) {
            return true;
        } else {
            return false;
        }
    }
}

// Добавление класса указанному элементу.
// Adding a class to the specified element.
$.prototype.addClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.add(...classNames);
    }

    return this;
};

// Удаление класса указанному элементу.
// Removing the class for the specified element.
$.prototype.removeClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.remove(...classNames);
    }

    return this;
};

// Переключение класса указанному элементу.
// Switch the class to the specified element.
$.prototype.toggleClass = function (classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.toggle(classNames);
    }

    return this;
};