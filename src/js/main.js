// Основной файл скриптов.
// Main script file.

// Импорт библиотеки для работы.
// Import the library for work.
import './lib/lib';

_$('.accordion-head').accordion({paddings: 190});


_$('#example').carousel({
    options: {
        round: true,
        reverse: true,
        autoplay: true,
        duration: 1000
    }
});
_$('[data-tabpanel] .tab-item').tab();

// _$('#trigger').modal();

// _$(_$('#trigger')[0]).click(() => {
//     _$(_$('#trigger')[0]).createModal({
//         text: {
//             title: 'Предупреждение!',
//             body: 'Вы действительно хотите восстановить страницу из этой резервной копии? Все несохраненные данные будут безвозвратно потеряны!'
//         },
//         btns: {
//             count: 2,
//             settings: [
//                 [
//                     'Отменить',
//                     ['btn', 'btn-outline-primary', 'mr-20'],
//                     true
//                 ],
//                 [
//                     'Восстановить',
//                     ['btn', 'btn-outline-primary'],
//                     true,
//                     () => {
//                         alert('worked');
//                     }
//                 ]
//             ]
//         }
//     });
// });

_$('#trigger').click(() => _$('#trigger').createModal({
    text: {
        title: 'Предупреждение!',
        body: 'Вы действительно хотите восстановить страницу из этой резервной копии? Все несохраненные данные будут безвозвратно потеряны!'
    },
    btns: {
        count: 2,
        settings: [
            [
                'Отменить',
                ['btn', 'btn-outline-primary', 'mr-20'],
                true
            ],
            [
                'Восстановить',
                ['btn', 'btn-outline-primary'],
                true,
                () => {
                    alert('worked');
                }
            ]
        ]
    }
}));

let icon = ['primary', 'success', 'danger', 'warning', 'error'];
_$('.tab-panel').click(() => {
    _$().notification({
        message: `${icon[_$('.notification').length]}`,
        status: `${icon[_$('.notification').length]}`,
        timeout: 4000,
        cClass: ['CUI-base'],
        options: {
            _mainClass: 'notification',
            _wrapClass: 'wrap_notifications'
        }
    });
});

_$('#example2').createCarousel({
    options: {
        round: true,
        reverse: true,
        autoplay: true,
        duration: 1000
    },
    content: {
        navigationDot: true,
        switching: true,
        count: 3,
        settings: [
            [
                ['first_class', 'second_class'],
                './assets/1.jpg',
                'alt attribute',
            ],
            [
                ['first_class', 'second_class'],
                './assets/2.jpg',
                'alt attribute',
            ],
            [
                ['first_class', 'second_class'],
                './assets/3.jpg',
                'alt attribute',
            ]
        ]
    }
});