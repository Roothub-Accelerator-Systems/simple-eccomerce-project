document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".bx-menu");
    const categoryList = document.querySelector(".categoryList ul");
    const navBarLeft = document.querySelector(".nav-bar-left");

    // Ensure category list is hidden initially
    categoryList.style.display = "none";

    // Apply absolute positioning and z-index for overlay effect
    categoryList.style.position = "absolute";
    categoryList.style.zIndex = "1000"; // Ensure it's on top
    categoryList.style.width = "70%";
    categoryList.style.background = "#164492";
    categoryList.style.paddingTop = "2rem";
    categoryList.style.paddingBottom = "2rem";
    categoryList.style.top = "0";
    categoryList.style.left = "0";
    categoryList.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)"; // Soft shadow for effect

    let menuOpen = false;

    menuIcon.addEventListener("click", () => {
        menuOpen = !menuOpen;

        if (menuOpen) {
            // Change menu icon to X
            menuIcon.classList.replace("bx-menu", "bx-x");
            menuIcon.style.fontSize = "2.5rem";
            menuIcon.style.color = "#fff"; // Make X white

            // Show category list
            categoryList.style.display = "block";
        } else {
            // Change X back to menu icon
            menuIcon.classList.replace("bx-x", "bx-menu");

            // Hide category list
            categoryList.style.display = "none";
        }
    });
});



// const categoryText = document.querySelector(".categoryInfoText");
// const categoryImage = document.querySelector(".categoryInfo");
// const categoryList = document.querySelector(".categoryList");

// //  categoryList.forEach(category => {
//     categoryList.addEventListener("mouseover", function(){
//         categoryImage.style.display = "none";
//         categoryText.style.display = "flex";
//     });

//     categoryList.addEventListener("mouseout", function(){
//         categoryImage.style.display = "block";
//         categoryText.style.display = "none";
//     });
// //  });

// const products = [
//     {
//         Name:"NeoFrame UHD Smart TV",
//         price:"₦980,000",
//         image:"images/tv1.jpg",
//         desc: "ffjrjg"
//     },
//     {
//         Name:"StrideX Pro Sneakers",
//         price: "₦250,000",
//         image:"images/shoes1.jpg",
//         desc: "hhiyy"
//     },
//     {
//         Name:" The Silent Patient",
//         price:"₦100,000",
//         image:"images/book1.jpg",
//         desc: ""
    
//     },
//     {
//         Name:"Velora Reserve Red Wine",
//         price:"₦1,980,000",
//         image:"images/wine1.jpg",
//         desc: ""
//     },
//     {
//         Name:"FlexFit Seamless Gym Set",
//         price:"₦350,000",
//         image:"images/cloth1.jpg",
//         desc: ""
//     },
//     {
//         Name:"PulseX 2.0 Smartwatch",
//         price:"₦4,000",
//         image:"images/smartwatch1[1].png",
//         desc: ""
//     }
// ]

// const productContainer = document.querySelector(".firstSection-Products");

// products.forEach(product => {
//     const productDiv = document.createElement("div");
//     productDiv.classList.add("product1");

//     productDiv.onclick = function(){
//         window.location.href = "ShopEasyProDet.html";
//     }

//     const productImg = document.createElement("img");
//     productImg.src = product.image;
//     productImg.alt = product.Name;
//     productImg.classList.add("firstSection-Products");

//     const productName = document.createElement("h4");
//     productName.innerText = product.Name;
//     productName.classList.add("product1-info");

//     const productPrice = document.createElement("h4");
//     productPrice.innerText = product.price;
//     productPrice.classList.add("product1-info");

//     productDiv.appendChild(productImg);
//     productDiv.appendChild(productName);
//     productDiv.appendChild(productPrice);

//     productContainer.appendChild(productDiv);
// })



const images = [
    'icon22.png',
    'icon23.png',
    'icon24.png',
    'icon25.png'
];

let currentIndex = 0;
const slideshowElement = document.getElementById('slideshow');

// Function to change the image
const changeImage = () => {
    // Update the image source
    slideshowElement.src = images[currentIndex];

    // Handle image loading errors
    slideshowElement.onerror = () => {
        console.error(`Failed to load image: ${images[currentIndex]}`);
        // Skip to the next image if the current one fails to load
        currentIndex = (currentIndex + 1) % images.length;
        slideshowElement.src = images[currentIndex];
    };

    // Increment the index, and reset if it exceeds the array length
    currentIndex = (currentIndex + 1) % images.length;
};

// Preload images to avoid delays
const preloadImages = () => {
    images.forEach(image => {
        const img = new Image();
        img.src = image;
    });
};

// Start the slideshow
const startSlideshow = () => {
    // Preload images
    preloadImages();

    // Change image every 2 seconds (2000 milliseconds)
    setInterval(changeImage, 5000);

    // Display the first image immediately
    changeImage();
};

// Start the slideshow when the page loads
window.onload = startSlideshow;