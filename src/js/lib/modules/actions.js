// Импорт ядра для использование $ функций.
// Import core to use $ functions.
import $ from '../core';

// Для получения массива из контекста.
// To get an array from the context.
$.prototype.getArray = function () {
    let array = [];

    array.push(Object.values(this));

    return array[0].slice(0, -1);
}

// Функция для редактирование HTML эелементов, если не передавать контет то вернет HTML струкруту указонного элемента через функцию $(). 
// Function for editing HTML elements, if no content is passed, it will return the HTML structure of the specified element via the $() function.
$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[0].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

// Предоставит элемент по указанному номеру порядка нахождение в document, начиная с 0.
// Gives the element at the specified order number found in document, starting at 0.
$.prototype.eq = function (i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;

    return this;
};

// Определяет порядковый номер нахождение в родительском элементе.
// Determines the ordinal location in the parent element.
$.prototype.index = function () {
    const parent = this[0].parentNode,
        childs = [...parent.children];

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex)
};

// Удаляет элемент указанный через функцию $().
// Removes the element specified via the $() function.
$.prototype.remove = function () {
    for (let i = 0; i < this.length; i++) {
        this[i].remove();
    }

    return this;
};

// Добавляет элемент в указанного родителя.
// Adds an element to the specified parent.
$.prototype.append = function (...appended) {
    for (let i = 0; i < this.length; i++) {
        this[i].append(...appended);
    }

    return this;
};

// Находит в родительском элементе по переданному селектору.
// Finds in the parent element by the passed selector.
$.prototype.find = function (selector) {
    let numberOfItems = 0,
        counter = 0;

    const copyObj = Object.assign({}, this)

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

// Находит родителя указанного элемента.
// Finds the parent of the specified element.
$.prototype.closest = function (selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].closest(selector) ? this[i].closest(selector) : 'null';
        counter++;
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
};

// Вернет все соседние элементы своего родителя.
// Return all adjacent elements of its parent.
$.prototype.siblings = function () {
    let numberOfItems = 0,
        counter = 0;

    const copyObj = Object.assign({}, this)

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};