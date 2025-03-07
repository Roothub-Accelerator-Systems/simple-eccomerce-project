
const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

const productName = document.querySelector(".productName");
const productImg = document.querySelector(".product-img");
const productPrice = document.querySelector(".price1");
const productPrice2 = document.querySelector(".mainPrice");
const productPrice3 = document.querySelector(".productPrice");
const number = document.querySelector(".noOfProducts");

productName.innerHTML = selectedProduct.Name;
productImg.src = selectedProduct.image;
productPrice.innerHTML = selectedProduct.price;
productPrice2.innerHTML = selectedProduct.price;
productPrice3.innerHTML = selectedProduct.price;2



let quantityElement = document.querySelector(".quantity");
quantityElement.innerHTML = JSON.parse(localStorage.getItem("productQuantity"));
let productQuantity = JSON.parse(localStorage.getItem("productQuantity"));


const quantityPerProduct = document.querySelector(".quantityPerProduct");




const plussBtn = document.querySelector(".plusBtn");
const minussBtn = document.querySelector(".minusBtn");

function updateQuantity(change) {
    productQuantity += change;
    if (productQuantity < 1) productQuantity = 1; 
    quantityElement.innerText = productQuantity;
    localStorage.setItem("productQuantity", productQuantity);
    quantityPerProduct.innerText = JSON.parse(localStorage.getItem("productQuantity"));
    number.innerText = JSON.parse(localStorage.getItem("productQuantity"));
}

plussBtn.addEventListener("click", () => updateQuantity(1));
minussBtn.addEventListener("click", () => updateQuantity(-1));

function goToCart(){
    window.location.href = "shopeasyacmobile.html";
}

function goToHome(){
    window.location.href = "testing.html";
}

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".nav-bar");

    navbar.style.width = "100%";
    
    if (window.scrollY > 10) {
        navbar.style.backgroundColor = "grey";
    } else {
        navbar.style.backgroundColor = "transparent"; 
    }
});




