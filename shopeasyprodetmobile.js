document.addEventListener("DOMContentLoaded", function () {
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    console.log(localStorage.getItem("selectedProduct"));

    if (selectedProduct) {
        const mainPictureImg = document.querySelector(".mainPictureImg");
        
        if (mainPictureImg) { // Ensure the element exists before setting its properties
            mainPictureImg.src = selectedProduct.image;
        } else {
            console.error("Error: .mainPictureImg element not found!");
        }

        document.querySelector(".productDetails-Section1h3").innerHTML = selectedProduct.Name;
        document.querySelector(".productDetails-Section1Desc").innerHTML = selectedProduct.desc;
        document.querySelector(".productDetails-Section2Price").innerHTML = selectedProduct.price;
    }
});

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

});

function addToCart(){
    window.location.href = "shopeasyacmobile.html";
}

function goToCart(){
    window.location.href = "shopeasyacmobile.html";
}

document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchFormContainer = document.getElementById('searchFormContainer');
    const backArrow = document.getElementById('backArrow');
    const content = document.querySelector('.content');

    searchIcon.addEventListener('click', function() {
        searchFormContainer.style.display = 'flex';
        content.style.display = 'none';
    });

    backArrow.addEventListener('click', function() {
        searchFormContainer.style.display = 'none';
        content.style.display = 'block';
    });
});

