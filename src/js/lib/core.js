"use strict";

// Ядро, логика по наследовании.
// Core, inheritance logic.

// Создание основной функции _$.
// Create main function _$.
const _$ = function (selector) {
    return new _$.prototype.init(selector);
};

// Функция добавления элементов для контекста.
// Function for adding elements for the context.
_$.prototype.init = function (selector) {

    // При отсутствии селектора вернет пустой объект.
    // If there is no selector, it will return an empty object.
    if (!selector) {
        return this; // {} 
    }

    // Проверка на HTML DOM элемент.
    // Check for HTML DOM element.
    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    let array = [];

    // Добавление элемента HTML DOM в объект контекста.
    // Adding an HTML DOM element to the context object.
    Object.assign(this, document.querySelectorAll(selector));

    /* Создание массива со значениями из объекта для использование например в цикле forEach.
     Планируеться создавать отдельную функцию для возврата массива.
     Create an array with values from an object for use in a forEach loop, for example.
     It is planned to create a separate function to return an array. */
    array.push(Object.values(this));

    // Присваивание параметров для контекста.
    // Assigning parameters for the context.
    this.length = document.querySelectorAll(selector).length;
    this.array = array[0];

    // Возврат контекста для дальнейшего его использование.
    // Return the context for further use.
    return this;
};

// Для наследование методов.
// For method inheritance.
_$.prototype.init.prototype = _$.prototype;

// Глобализация функции _$.
// Globalization of the function _$.
window._$ = _$;

// Экспорт функции по умолчанию.
// Export the default function.
export default _$;