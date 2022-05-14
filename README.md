# Custom UI Library

## Get Started

> To connect, you need to add the script file to the main script file or to the html page.
> The same goes for styles. They need to be included in the main stylesheet or html page
--- 

## Dropdown Button Example

`HTML`
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

`JavaScript Initialization`
```JavaScript
$('.dropdown-toggle').dropdown();
```

---

## Modal Example 

`Modal Target HTML`
```HTML
<a href="#" 
    id="trigger" 
    class="btn btn-primary" 
    data-toggle="modal"
    ata-target="#exampleModal">Link to</a>
```

`Modal HTML`
```HTML
<div class="modal" id="exampleModal">
    <div class="modal-dialog">
        <div class="modal-content"><button class="close" data-close>
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

`JavaScript Initialization`
```JavaScript
$('[data-toggle="modal"]').modal();
```

---

## Tabs Example

`HTML`
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

`JavaScript Initialization`
```JavaScript
$('[data-tabpanel] .tab-item').tab();
```

---

## Accordion Example

`HTML`
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

`JavaScript Initialization`
```JavaScript
$('.accordion-head').accordion();
```

---

## Carousel Example

`HTML`
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

`JavaScript Initialization`
```JavaScript
$('.carousel').carousel();
```