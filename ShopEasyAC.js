const myUsername = document.querySelector(".username");
const user = JSON.parse(localStorage.getItem("Username")) || "";
// console.log(user);
const capitalized = user.charAt(0).toUpperCase() + user.slice(1);
myUsername.textContent = capitalized;

//account dropdown fucntionality
const accountDiv = document.querySelector(".accountIcon-Div2");
const accDropdown = document.querySelector(".accDropDown");
const dropdownIcon = document.querySelectorAll(".bx-chevron-down");

document.addEventListener("click", function(e){
   accountDiv.addEventListener("click", function(){
    accDropdown.classList.toggle("accountDropdown");
    dropdownIcon
    dropdownIcon.classList.add("bx-chevron-up");
    dropdownIcon.classList.remove("bx-chevron-up");
    e.stopPropagation();
   });

   document.addEventListener("click", function(e){
    if(!accountDiv.contains(e.target) && !accDropdown.contains(e.target)){
        accDropdown.classList.remove("accountDropdown");
    }
   })
})

//display of selected product
const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

const productName = document.querySelector(".productName");
const productImg = document.querySelector(".product-img");
const productPrice = document.querySelector(".price1");
const productPrice2 = document.querySelector(".mainPrice");
const productPrice3 = document.querySelector(".productPrice");
const numberbyQuantity = document.querySelector(".noOfProducts");
const number = document.querySelector(".numberProducts");
const totalPrice = document.querySelector(".totalPrice");

productName.innerHTML = selectedProduct.Name;
productImg.src = selectedProduct.image;
productPrice.innerHTML = selectedProduct.price;
productPrice2.innerHTML = selectedProduct.price;
productPrice3.innerHTML = selectedProduct.price;
totalPrice.innerHTML = selectedProduct.price;

//product quantity number


let quantityElement = document.querySelector(".quantity");
quantityElement.innerHTML = JSON.parse(localStorage.getItem("productQuantity"));
number.innerHTML = JSON.parse(localStorage.getItem("productQuantity"));
numberbyQuantity.innerHTML = JSON.parse(localStorage.getItem("productQuantity"));

let productQuantity = JSON.parse(localStorage.getItem("productQuantity"));

//
// const quantityPerProduct = document.querySelector(".quantityPerProduct");


//function to update quantity

const plussBtn = document.querySelector(".plusBtn");
const minussBtn = document.querySelector(".minusBtn");

function updateQuantity(change) {
    productQuantity += change;
    if (productQuantity < 1) productQuantity = 1; // Prevent negative values
    quantityElement.innerText = productQuantity;
    
    localStorage.setItem("productQuantity", productQuantity);

    number.innerText = JSON.parse(localStorage.getItem("productQuantity"));
    numberbyQuantity.innerText = JSON.parse(localStorage.getItem("productQuantity"));

    let unitPrice = parseFloat(selectedProduct.price.replace("₦", "").replace(/,/g, "").trim());

    // console.log(unitPrice)
    // console.log(typeof(unitPrice))
    let totalPricee = unitPrice * productQuantity;
    // console.log(totalPricee)
    // totalPricee = 
    // console.log(totalPrice)

    const totalPriceStandard = `₦${totalPricee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    console.log(totalPriceStandard)

    totalPrice.innerHTML = `₦${totalPricee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    productPrice3.innerHTML = `₦${totalPricee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    localStorage.setItem("Total Price", totalPriceStandard);
    // quantityPerProduct.innerText = JSON.parse(localStorage.getItem("productQuantity"));
}

plussBtn.addEventListener("click", () => updateQuantity(1));
minussBtn.addEventListener("click", () => updateQuantity(-1));

function goToCart(){
    window.location.href = "ShopEasyAC.html";
}

function sendReceipt(){
    (function(){
        emailjs.init("Tj-TaXdZQfkupje8L");

    })();

    var params = {
            username: capitalized,
            productName:selectedProduct.Name,
            productPrice:selectedProduct.price,
            productQuantity:productQuantity,
            productTotalPrice:localStorage.getItem("Total Price"),
            productDesc:selectedProduct.desc,
            emailAddress:JSON.parse(localStorage.getItem("Email Address")),
    };

    emailjs.send("service_uii0qj9", "template_iwu2fal", params)
    .then( res => {
        alert("Email sent successfully!");
    })
    .catch();
}

function goToHome(){
    window.location.href = "ShopEasy.html";
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

