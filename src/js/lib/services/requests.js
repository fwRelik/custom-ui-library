// Импорт ядра для использование $ функций.
// Import core to use $ functions.
import $ from '../core';

// Отправка запросов на сервер, с возвратом определенного типа указанных данных.
// Sending requests to the server, returning a certain type of specified data.
$.prototype.get = async function (url, dataTypeAnswer = 'json') {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Cloud not fetch ${url}, status: ${res.status}`)
    }

    switch (dataTypeAnswer) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
    }
};

// Отправка данных в указанный адрес.
// Sending data to the specified address.
$.prototype.post = async function (url, data, dataTypeAnswer = 'text') {
    let res = await fetch(url, {
        method: 'POST',
        body: data
    });

    switch (dataTypeAnswer) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
    }
};