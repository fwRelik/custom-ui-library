// Импорт ядра для использование _$ функций.
// Import core to use _$ functions.
import _$ from '../core';

// Автоматически будет подставлять значение для отображение указанного элемента.
// Will automatically substitute the value to display the specified element.
_$.prototype.show = function () {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = '';
    }

    return this;
};

// Грубое скрытие указанного элемента.
// Roughly hide the specified element.
_$.prototype.hide = function () {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = 'none';
    }

    return this;
};

// Скрывает указанный элемент.
// Hides the specified element.
_$.prototype.visibleHide = function () {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.visibility = 'hidden';
        this[i].style.pointerEvents = 'none';
    }

    return this;
};

// Грубое переключение между состояниями отображение указанного элемента.
// Rough switching between display states of the specified element.
_$.prototype.toggle = function () {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }

    return this;
};