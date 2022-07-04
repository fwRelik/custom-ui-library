# Custom UI Library

## Get Started

Ready files can be found in the dist folder.

> To connect, you need to add the script file to the main script file or to the html page.
> The same goes for styles. They need to be included in the main stylesheet or html page.

--- 

Docs Link:

- [Dropdown Button](#dropdown-button-example)
- [Modal](#modal-example)
    - [Dynamic Create Modal](#dynamic-create-modal)
- [Tabs](#tabs-example)
- [Accordion](#accordion-example)
- [Carousel](#carousel-example)
    - [Dynamic Create Carousel](#dynamic-create-carousel)
- [Notifications](#notifications-example)

---

## Dropdown Button Example

**HTML:**
```HTML
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle dropdown-toggle-down" id="dropdownMenuButton">
        Dropdown Button
    </button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
        <a href="#" class="dropdown-item">Action #1</a>
        <a href="#" class="dropdown-item">Action #2</a>
        <a href="#" class="dropdown-item">Action #3</a>
    </div>
</div>
```

**JavaScript Initialization:**
```JavaScript
_$('.dropdown-toggle').dropdown();
```

> Note: 
- Simple initialization takes nothing as an argument.

---

## Modal Example 

**Modal Target HTML:**
```HTML
<a href="#" 
    id="trigger" 
    class="btn btn-primary" 
    data-toggle="modal"
    data-target="#exampleModal">Open Modal</a>
```

**Modal HTML:**
```HTML
<div class="modal" id="exampleModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <button class="close" data-close>
                <span>&times;</span>
            </button>
            <div class="modal-header">
                <div class="modal-title">
                    Modal title #exampleModal
                </div>
            </div>
            <div class="modal-body">
                Modal Body #
            </div>
            <div class="modal-footer">
                <button class="btn btn-danger" data-close>Close</button>
                <button class="btn btn-success">Save Changes</button>
            </div>
        </div>
    </div>
</div>
```

**JavaScript Initialization:**
```JavaScript
_$('[data-toggle="modal"]').modal();
```

> Note: 
- Accepts an object with settings.
#

## Settings Modal

Option | Type | Default | Description
------ | ---- | ------- | -----------
_fadeIn | int | 300 | Appearance time in milliseconds.
_fadeOut | int | 300 | Hiding time in milliseconds.

**JavaScript Initialization Modal Example:**
```JavaScript
_$(`[data-toggle="modal"]`).modal({
    _fadeIn: 300,
    _fadeOut: 300
});
```
---

## Dynamic Create Modal
Can be used when you need to create modals dynamically.

**JavaScript Dynamically Create Modals:**
```JavaScript
_$().createModal();
```

> Note:
- Accepts an object with settings.
#

## Settings createModal

Option | Type | Default | Description
------ | ---- | ------- | -----------
text | object | { } | Object for assigning text to the modals.
title | string | null | Destination title. 
body | string | null | Destination description.
btns | object | { } | Button settings object.
count | int | null | Number of Buttons.
settings | array | null | Array to customize each button.
options | object | { } | Object for settings to the modals.
_fadeIn | int | 300 | Appearance time in milliseconds.
_fadeOut | int | 300 | Hiding time in milliseconds.
_mainClass | string | 'modal' | Main Class.

**HTML Target:**
```HTML
<a href="#" 
    id="trigger" 
    class="btn btn-primary" 
    data-toggle="modal"
    data-target="#exampleModal">Open Modal</a>
```

**JavaScript Dynamically Create Modals Example:**
```JavaScript
_$('#trigger').on('click', () => {
    _$().createModal({
        text: {
            title: 'Title',
            body: 'Body Description'
        },
        btns: {
            count: 2,
            settings: [
                [   // Button Text.
                    'Cancel', 
                    // Buttons Classes.
                    ['btn', 'btn-outline-primary', 'mr-20'], 
                    // Close after clicking.
                    true 
                ],
                [   // Button Text.
                    'Ok', 
                    // Buttons Classes.
                    ['btn', 'btn-outline-primary'], 
                    // Close after clicking.
                    true, 
                    // Callback
                    () => { 
                        alert('Worked !');
                    }
                ]
            ]
        },
        options: {
            _fadeIn: 300,
            _fadeOut: 300,
            _mainClass: 'modal'
        }
    });
});
```

---

## Tabs Example

**HTML:**
```HTML
<div class="tab mt-20 block-center">
    <div class="tab-panel" data-tabpanel="">
        <div class="tab-item tab-item--active">Content #1</div>
        <div class="tab-item">Content #2</div>
        <div class="tab-item">Content #3</div>
    </div>
    <div class="tab-content tab-content--active">
        Active Tab Content #1
    </div>
    <div class="tab-content">
        Active Tab Content #2
    </div>
    <div class="tab-content">
        Active Tab Content #3
    </div>
</div>
```

**JavaScript Initialization:**
```JavaScript
_$('[data-tabpanel] .tab-item').tab();
```

> Note: 
- Simple initialization takes nothing as an argument.

---

## Accordion Example

**HTML:**
```HTML
<div class="accordion mt-20 block-center">
    <div class="accordion-head">
        <span>Collapse First element</span>
    </div>
    <div class="accordion-content">
        <div class="accordion-inner">
            Accordion Inner #1
        </div>
    </div>
    <div class="accordion-head">
        <span>Collapse Second element</span>
    </div>
    <div class="accordion-content">
        <div class="accordion-inner">
            Accordion Inner #2
        </div>
    </div>
</div>
```

**JavaScript Initialization:**
```JavaScript
_$('.accordion-head').accordion();
```

### Settings Accordion

Option | Type | Default | Description
------ | ---- | ------- | -----------
headActive | string | .accordion-head--active | Head Active class
contentActive | string | .accordion-content--active | Content Active Class
paddings | int | 40 | Defines the padding from the bottom.

**JavaScript Accordion Example:**
```JavaScript
_$('.accordion-head').accordion({
    paddings: 40,
    headActive: 'accordion-head--active',
    contentActive: 'accordion-content--active'
    });
```

---

## Carousel Example

**HTML:**
```HTML
<div class="carousel" id="example">
    <ol class="carousel-indicators">
        <li class="active" data-slide-to="0"></li>
        <li data-slide-to="1"></li>
        <li data-slide-to="2"></li>
        <li data-slide-to="3"></li>
        <li data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-slides">
            <div class="carousel-item">
                <img src="./assets/1.jpg" alt="photo">
            </div>
            <div class="carousel-item">
                <img src="./assets/2.jpg" alt="photo">
            </div>
            <div class="carousel-item">
                <img src="./assets/3.jpg" alt="photo">
            </div>
            <div class="carousel-item">
                <img src="./assets/4.jpg" alt="photo">
            </div>
            <div class="carousel-item">
                <img src="./assets/5.jpg" alt="photo">
            </div>
        </div>
    </div>
    <a href="#" class="carousel-prev" data-slide="prev">
        <span class="carousel-prev-icon">&lt;</span>
    </a>
    <a href="#" class="carousel-next" data-slide="next">
        <span class="carousel-next-icon">&gt;</span>
    </a>
</div>
```

**JavaScript Initialization:**
```JavaScript
_$('#example').carousel();
```

> Note:
- If there is layout in html.
- Accepts an object with settings.
#

### Settings Carousel

Option | Type | Default | Description
------ | ---- | ------- | -----------
options | object | { } | Accepts an object with settings.
round | boolean | false | Constant repetition in a circle.
reverse | boolean | false | Constant repetition in a circle in the opposite direction.
autoplay | boolean | false | Automatic switching.
duration | int | 4000 | Interval switching.

**JavaScript Initialization Example:**
```JavaScript
_$('#example').carousel({
    options: {
        round: true,
        reverse: true,
        autoplay: true,
        duration: 1000
    }
});
```
---

## Dynamic Create Carousel

Can be used when you need to dynamically create.

**JavaScript Dynamically Create Carousel:**
```JavaScript
_$().createCarousel();
```

> Note:
- Accepts an object with settings.
- There must be an initial layout in order to create inside.
#

### Settings createCarousel

Option | Type | Default | Description
------ | ---- | ------- | -----------
round | boolean | false | Constant repetition in a circle.
reverse | boolean | false | Constant repetition in a circle in the opposite direction.
autoplay | boolean | false | Automatic switching.
duration | int | 4000 | Interval switching.
navigationDot | boolean | null | Navigation buttons.
switching | boolean | null | Switch buttons. In case of false, the buttons are simply hidden from the layout.
count | int | null | Determine quantity slides.
settings | array | null | Accepts an array with the settings for each slide.

**HTML:**
```HTML
<div class="carousel" id="example"></div>
```
**JavaScript Dynamically Create Carousel Example:**
```JavaScript
_$('#example').createCarousel({
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
            [   // Classes.
                ['first_class', 'second_class'], 
                // Src Attribute
                './assets/1.jpg', 
                // Alt Attribute.
                'Slider #1', 
            ],
            [   // Classes.
                ['first_class', 'second_class'], 
                // Src Attribute
                './assets/2.jpg', 
                // Alt Attribute.
                'Slider #2 ', 
            ],
            [   // Classes.
                ['first_class', 'second_class'], 
                // Src Attribute
                './assets/3.jpg', 
                // Alt Attribute.
                'Slider #3', 
            ]
        ]
    }
});
```

---

## Notifications Example

> Notifications use Font Awesome Icons, you can find [them here.](https://github.com/fwRelik/ifo)

**JavaScript Call Notifications:**
```JavaScript
_$().notification();
```

> Note:
- Accepts an object with settings.
#

### Settings Notifications

Option | Type | Default | Description
------ | ---- | ------- | -----------
message | string | null | Display messages in the notification.
status | string | '' | The added icon changes depending on the value passed, and the text styles also change. **Possible meaning:** `['primary', 'success', 'danger', 'warning', 'error']`
timeout | int | 4000 | Time for which notifications will be show.
cClass | array | null | Additional classes must be specified in the array. **Example:** `['first_class', 'second_class']`
options | object | default class | The main classes are indicated in the form `{ _mainClass: 'notification', _wrapClass: 'wrap_notifications' }`
_mainClass | string | notification | Define main notification class.
_wrapClass | string | wrap_notifications | Define main notification wrapper class.

**JavaScript Call Notifications Example:**
```JavaScript
_$().notification({
        message: `Message !`,
        status: `success`,
        timeout: 4000,
        cClass: ['first_class', 'second_class'],
        options: {
            _mainClass: 'notification',
            _wrapClass: 'wrap_notifications'
        }
    });
```