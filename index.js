const fun = () => {
    setTimeout(() => {
        const productsimg = document.querySelector('.productsImg')
        const prointro = document.querySelector('.pro-intro')
        prointro.innerHTML = "ALL GROCERY ITEMS"
        productsimg.src = `pro1-removebg-preview.png`;
    }, 3200);
    setTimeout(() => {
        const productsimg = document.querySelector('.productsImg')
        const prointro = document.querySelector('.pro-intro')
        prointro.innerHTML = "KITCHEN UTENSILS"
        productsimg.src = `pro2-removebg-preview.png`;
    }, 6000);
    setTimeout(() => {
        const productsimg = document.querySelector('.productsImg')
        var prointro = document.querySelector('.pro-intro')
        prointro.innerHTML = "ALL TYPES OF CLOTHS"
        productsimg.src = `pro3-removebg-preview.png`;
    }, 9000);
    setTimeout(() => {
        const productsimg = document.querySelector('.productsImg')
        var prointro = document.querySelector('.pro-intro')
        prointro.innerHTML = "SPORTS EQUIPMENT"

        productsimg.src = `pro4-removebg-preview.png`;
    }, 12000);
    setTimeout(() => {
        const product = document.querySelector('.productsImg')
        var prointro = document.querySelector('.pro-intro')
        prointro.innerHTML = "ALL IN ONE STORE"
        product.src = `an-logo-removebg-preview.png`;
    }, 15000);
    setTimeout(() => {
        fun()
    }, 15000)
}

fun()