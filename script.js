// Появление строки ввода при нажатии на search
let body = document.querySelector('body')

let navMenu = document.querySelector('.nav-menu');
let navInput = document.querySelector('.nav-input');
let navBtn = document.querySelector('.btn');
let navBtnText = document.querySelector('.btn-text');

navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navBtnText.classList.toggle('hidden');
    navInput.classList.toggle('hidden');
    navBtn.classList.toggle('start');
})
// Bag
let btnBag = document.querySelector('.bag');
let tableBag = document.querySelector('.bag-table');

btnBag.addEventListener('click', () => {
    tableBag.classList.toggle('hidden')
})

// логика слайдера

let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let slides = document.querySelector('.slides');

let slidePosition = 0;

arrowRight.addEventListener('click', () => {
    slidePosition += 348;

    if (slidePosition > 348*4) {
        slidePosition -= 348;
    }
    slides.style.right = `${slidePosition}px`;
})

arrowLeft.addEventListener('click', () => {
    slidePosition -= 348;

    if (slides.style.right == `0px` || slides.style.right == ``) {
        slidePosition += 348;
        navBtn.style.filter =  'brightness(1)';
    }  
    slides.style.right = `${slidePosition}px`;
})

// логика появления фильтра и сортировки
let btnFilter = document.querySelector('.filter');
let btnSort = document.querySelector('.sorted');


let hideFilter = document.querySelector('.filter-hidden');
let hideSort = document.querySelector('.sort-hidden');

btnFilter.addEventListener('click', () => {
    hideFilter.classList.toggle('hidden')
})

btnSort.addEventListener('click', () => {
    hideSort.classList.toggle('hidden')
})


// Логика окна покупки и карзины
let closeBtns = document.querySelectorAll('.close');
let numberBag = document.querySelector('.bag');

let containers = document.querySelectorAll('.container');

let slides1 = document.querySelectorAll('.slide-orche');
let slides2 = document.querySelectorAll('.slide-panda');
let slides3 = document.querySelectorAll('.slide-force07');
let slides4 = document.querySelectorAll('.slide-munsell');

let containerOrche = document.querySelector('.buy-cart-orche');
let containerPanda = document.querySelector('.buy-cart-panda');
let containerForce07 = document.querySelector('.buy-cart-force07');
let containerMunsell = document.querySelector('.buy-cart-munsell');

slides1.forEach(slide1 => {
    slide1.addEventListener('click', () => {
        containerOrche.style.display = 'flex';
       
    })
})
slides2.forEach(slide2 => {
    slide2.addEventListener('click', () => {
        containerPanda.style.display = 'flex';
       
    })
})
slides3.forEach(slide3 => {
    slide3.addEventListener('click', () => {
        containerForce07.style.display = 'flex';
       
    })
})
slides4.forEach(slide4 => {
    slide4.addEventListener('click', () => {
        containerMunsell.style.display = 'flex';
       
    })
})

closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        containers.forEach(container => { 
            container.style.display = 'none';
        });
    });
});

// логика корзины
let inBagBtns = document.querySelectorAll('.in-bag');
let bagNumber = document.querySelector('.number');
numberI = 0;  
cartNum = 0;

function bagFn() {
numberI++;
bagNumber.innerHTML = numberI;
let bagCart = document.querySelector(`.bag-cart${cartNum}`);
let deleteBtn = document.querySelector(`.delete${cartNum}`);
deleteBtn.addEventListener('click', () => {
    bagCart.remove();
    numberI--;
    bagNumber.innerHTML = numberI;
    
    
})
} 

inBagBtns[0].addEventListener('click', () => {
    cartNum++;
    tableBag.innerHTML += ` 
                   <div class="bag-cart bag-cart${cartNum}">
                    <img src="photos/orche-two.png" alt="">
                    <div class="bag-info">
                        <p class="name">Air Force 1 Orche</p>
                        <div class="cart-footer">
                            <p class="price">$214</p>
                            <button class="delete delete${cartNum}">Delete</button>
                        </div>
                    </div>
                    <hr>
                </div>
 
             `
    bagFn()    
    containers.forEach(container => container.style.display = 'none');  
})

inBagBtns[1].addEventListener('click', () => {
    cartNum++;
    tableBag.innerHTML += `
    <hr>
                <div class="bag-cart bag-cart${cartNum}">
                    <img src="photos/panda-two.png" alt="">
                    <div class="bag-info">
                        <p class="name">Air Force Panda</p>
                        <div class="cart-footer">
                            <p class="price">$452</p>
                            <button class="delete delete${cartNum}">Delete</button>
                        </div>
                    </div>
                </div>      
             `
    bagFn()     
    containers.forEach(container => container.style.display = 'none');
})

inBagBtns[2].addEventListener('click', () => {
    cartNum++;
    tableBag.innerHTML += `
    <hr>
                <div class="bag-cart bag-cart${cartNum}">
                    <img src="photos/force07-two.png" alt="">
                    <div class="bag-info">
                        <p class="name">Air Force 1 ‘07</p>
                        <div class="cart-footer">
                            <p class="price">$196</p>
                            <button class="delete delete${cartNum}">Delete</button>
                        </div>
                    </div>
                </div>
             `
    bagFn()
    containers.forEach(container => container.style.display = 'none');      
})
inBagBtns[3].addEventListener('click', () => {
    cartNum++;
    tableBag.innerHTML += `
    <hr>
                <div class="bag-cart bag-cart${cartNum}">
                    <img src="photos/munsell-two.png" alt="">
                    <div class="bag-info">
                        <p class="name">327’ Munsell White</p>
                        <div class="cart-footer">
                            <p class="price">$253</p>
                            <button class="delete delete${cartNum}">Delete</button>
                        </div>
                    </div>
                </div>  
             `
    bagFn() 
    containers.forEach(container => container.style.display = 'none'); 
})
