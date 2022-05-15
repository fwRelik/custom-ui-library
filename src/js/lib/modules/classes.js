// Импорт ядра для использование _$ функций.
// Import core to use _$ functions.
import _$ from '../core';

// Проверка на наличие Класса.
// Check for the presence of the Class.
_$.prototype.cont = function (...className) {
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
_$.prototype.addClass = function (...classNames) {
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
_$.prototype.removeClass = function (...classNames) {
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
_$.prototype.toggleClass = function (classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.toggle(classNames);
    }

    return this;
};