const myUsername = document.querySelector(".username");
const user = JSON.parse(localStorage.getItem("Username")) || "";
// console.log(user);
const capitalized = user.charAt(0).toUpperCase() + user.slice(1);
myUsername.textContent = capitalized;

let selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
console.log((localStorage.getItem("selectedProduct")));

if(selectedProduct){
    document.querySelector(".mainPictureImg").src = selectedProduct.image;
    document.querySelector(".productDetails-Section1h3").innerHTML = selectedProduct.Name;
    document.querySelector(".productDetails-Section1Desc").innerHTML = selectedProduct.desc;
    document.querySelector(".productDetails-Section2Price").innerHTML = selectedProduct.price;
}

document.addEventListener("DOMContentLoaded", function () {
    const quantityElement = document.querySelector(".quantity");
    const plusBtn = document.querySelector(".plusBtn");
    const minusBtn = document.querySelector(".minusBtn");

    // Get stored quantity or default to 1
    let productQuantity = localStorage.getItem("productQuantity") ? parseInt(localStorage.getItem("productQuantity")) : 1;
    quantityElement.innerText = productQuantity;

    // Function to update localStorage
    function updateQuantity(change) {
        productQuantity += change;
        if (productQuantity < 1) productQuantity = 1; // Prevent negative values
        quantityElement.innerText = productQuantity;
        localStorage.setItem("productQuantity", productQuantity);
    }
    plusBtn.addEventListener("click", () => updateQuantity(1));
    minusBtn.addEventListener("click", () => updateQuantity(-1));

    
    window.onload = function () {
        // document.getElementById("quantity").value = 1; // Set default quantity to 1
    };

});

function addToCart() {
    let alertBox = document.querySelector(".successAlertDiv");

    // Get the user's current scroll position
    let scrollY = window.scrollY || window.pageYOffset;

    // Set the alert position at the bottom of the visible screen
    alertBox.style.top = (scrollY + window.innerHeight - 100) + "px";

    // Show the alert
    alertBox.classList.add("show");

    alertBox.style.position = "fixed";
    alertBox.style.top = "auto";
    alertBox.style.bottom = "20px";
}

const closeBtn = document.querySelector(".closeBtn")

closeBtn.addEventListener("click", function(){
    document.querySelector(".successAlertDiv").classList.remove("show");
})
    

function goToCart(){
    window.location.href = "ShopEasyAC.html";
}