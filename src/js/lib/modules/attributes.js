// Импорт ядра для использование $ функций.
// Import core to use $ functions.
import $ from '../core';

// Установление атрибутов на указанный элемент.
// Set attributes on the specified element.
$.prototype.setAttr = function (atr, val) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].attributes) {
            continue;
        }
        this[i].setAttribute(atr, val);
    }

    return this;

};

// Удаление атрибутов на указанный элемент.
// Removing attributes on the specified element.
$.prototype.remAttr = function (atr) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].attributes) {
            continue;
        }
        this[i].removeAttribute(atr);
    }

    return this;
};

// Получение атрибутов в виде строки на указанный элемент.
// Get the attributes as a string on the specified element.
$.prototype.getAttr = function (val) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].attributes) {
            continue;
        }
        return this[i].getAttribute(val);
    }

    return this;
};

// Переключение значений и самих атрибутов, если передать последние значение true как аргумент то атрибут будет полностью удален,если нет то будет удалено только значение.
// Switching values and attributes themselves, if you pass the last true value as an argument, then the attribute will be completely removed, if not, only the value will be removed.
$.prototype.toggleAttr = function (atr, val = null, remove = false) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].attributes) {
            continue;
        }

        if (this[i].getAttribute(atr)) {
            if (remove) {
                this[i].removeAttribute(atr);
                return;
            }

            this[i].setAttribute(atr, '');
        } else {
            this[i].setAttribute(atr, val);
        }
    }

    return this;
};