//display of selected product
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

//product quantity number

let quantityElement = document.querySelector(".quantity");
quantityElement.innerHTML = JSON.parse(localStorage.getItem("productQuantity"));
let productQuantity = JSON.parse(localStorage.getItem("productQuantity"));

//
const quantityPerProduct = document.querySelector(".quantityPerProduct");


//function to update quantity

const plussBtn = document.querySelector(".plusBtn");
const minussBtn = document.querySelector(".minusBtn");

function updateQuantity(change) {
    productQuantity += change;
    if (productQuantity < 1) productQuantity = 1; // Prevent negative values
    quantityElement.innerText = productQuantity;
    localStorage.setItem("productQuantity", productQuantity);
    quantityPerProduct.innerText = JSON.parse(localStorage.getItem("productQuantity"));
    number.innerText = JSON.parse(localStorage.getItem("productQuantity"));
}

plussBtn.addEventListener("click", () => updateQuantity(1));
minussBtn.addEventListener("click", () => updateQuantity(-1));

function goToCart(){
    window.location.href = "shopeasyac.html";
}

function goToHome(){
    window.location.href = "testing.html.html";
}
//product quantity per product
// let cart = JSON.parse(localStorage.getItem("cart")) || {};

// // Define a sample product ID (replace with actual product ID)
// let productId = "exampleProduct";

// // Get the saved quantity from localStorage, defaulting to 1
// let savedQuantity = cart[productId] || 1;

// // Display the saved quantity in the HTML
// document.getElementById("quantity").innerText = savedQuantity;

// // Function to update the cart dynamically
// function updateCart(productId, change) {
//     if (!cart[productId]) {
//         cart[productId] = 1; // Default to 1 if not present
//     }
//     cart[productId] += change; // Increase or decrease quantity
//     if (cart[productId] < 1) cart[productId] = 1; // Prevent negative values

//     // Save updated cart to localStorage
//     localStorage.setItem("cart", JSON.stringify(cart));

//     // Update quantity display
//     document.getElementById("quantity").innerText = cart[productId];
// }