

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    const categoryList = document.querySelector('.categoryList');
    const categoryText = document.querySelector(".categoryInfoText");
    const categoryImage = document.querySelector(".categoryInfo");

    menuIcon.addEventListener('click', function() {
        // Show close icon and hide menu icon
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'block';

        // Show the category list
        categoryList.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        // Hide close icon and show menu icon
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';

        // Hide the category list
        categoryList.style.display = 'none';
    });

    // Ensure elements exist before adding event listeners
    // if (categoryList && categoryText && categoryImage) {
    //     categoryList.addEventListener("mouseover", function(){
    //         categoryImage.style.display = "none";
    //         categoryText.style.display = "flex";
    //     });

    //     categoryList.addEventListener("mouseout", function(){
    //         categoryImage.style.display = "block";
    //         categoryText.style.display = "none";
    //     });
    // }
});



// const products = [
//     {
//         Name:"NeoFrame UHD Smart TV",
//         price:"₦980,000",
//         image:"images/tv1.jpg",
//         desc: "Smart TV – Access Netflix, YouTube, Prime Video, and more Full HD / 4K Resolution (if applicable) – Crystal-clear picture quality Built-in WiFi – Stream content effortlessly"
//     },
//     {
//         Name:"StrideX Pro Sneakers",
//         price: "₦250,000",
//         image:"images/shoe1.jpg",
//         desc: "Premium mesh for breathability Anti-slip rubber sole for all-day grip Perfect for casual wear, gym, or running"
//     },
//     {
//         Name:" The Silent Patient",
//         price:"₦100,000",
//         image:"images/cloth1.jpg",
//         desc: "Proven strategies to improve focus & productivity Real-life success stories & lessons Step-by-step guides to master new skills"
    
//     },
//     {
//         Name:"Velora Reserve Red Wine",
//         price:"₦1,980,000",
//         image:"images/book1.jpg",
//         desc: "Full-bodied with a hint of dark berries Smooth oak finish with a velvety texture Pairs beautifully with steaks, pasta & cheese"
//     },
//     {
//         Name:"FlexFit Seamless Gym Set",
//         price:"₦350,000",
//         image:"images/cloth2.jpg",
//         desc: "High-waist leggings for tummy control Breathable sports bra with full support Quick-dry & ultra-stretch fabri"
//     },
//     {
//         Name:"PulseX 2.0 Smartwatch",
//         price:"₦4,000",
//         image:"images/smartwatch1[1].png",
//         desc: "Heart Rate & Sleep Monitoring Step Counter & Fitness Tracking Sync Calls & Messages"
//     }
// ]

// localStorage.setItem("products", JSON.stringify(products));

// const productContainer = document.querySelector(".firstSection-Products");

// products.forEach(product => {
//     const productDiv = document.createElement("div");
//     productDiv.classList.add("product1");

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

//     productDiv.onclick = function(){
//         localStorage.setItem("selectedProduct", JSON.stringify(product));
//         window.location.href = "shopeasyprodet.html";
//     }

//     productDiv.appendChild(productImg);
//     productDiv.appendChild(productName);
//     productDiv.appendChild(productPrice);
//     productContainer.appendChild(productDiv);
// })


document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            Name: "NeoFrame UHD Smart TV",
            price: "₦980,000",
            image: "images/tv1.jpg",
            desc: "Smart TV – Access Netflix, YouTube, Prime Video, and more Full HD / 4K Resolution (if applicable) – Crystal-clear picture quality Built-in WiFi – Stream content effortlessly"
        },
        {
            Name: "StrideX Pro Sneakers",
            price: "₦250,000",
            image: "images/shoe1.jpg",
            desc: "Premium mesh for breathability Anti-slip rubber sole for all-day grip Perfect for casual wear, gym, or running"
        },
        {
            Name: "The Silent Patient",
            price: "₦100,000",
            image: "images/cloth1.jpg",
            desc: "Proven strategies to improve focus & productivity Real-life success stories & lessons Step-by-step guides to master new skills"
        },
        {
            Name: "Velora Reserve Red Wine",
            price: "₦1,980,000",
            image: "images/book1.jpg",
            desc: "Full-bodied with a hint of dark berries Smooth oak finish with a velvety texture Pairs beautifully with steaks, pasta & cheese"
        },
        {
            Name: "FlexFit Seamless Gym Set",
            price: "₦350,000",
            image: "images/cloth2.jpg",
            desc: "High-waist leggings for tummy control Breathable sports bra with full support Quick-dry & ultra-stretch fabric"
        },
        {
            Name: "PulseX 2.0 Smartwatch",
            price: "₦4,000",
            image: "images/smartwatch1[1].png",
            desc: "Heart Rate & Sleep Monitoring Step Counter & Fitness Tracking Sync Calls & Messages"
        }
    ];

    // Store products in localStorage
    localStorage.setItem("products", JSON.stringify(products));

    // Get the product container
    const productContainer = document.querySelector(".firstSection-Products");

    if (!productContainer) {
        console.error("Error: Element with class '.firstSection-Products' not found.");
        return;
    }

    // Clear previous content to prevent duplicates
    productContainer.innerHTML = "";

    // Dynamically create product elements
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product1");

        const productImg = document.createElement("img");
        productImg.src = product.image;
        productImg.alt = product.Name;
        productImg.classList.add("product-image");

        const productName = document.createElement("h4");
        productName.innerText = product.Name;
        productName.classList.add("product1-info");

        const productPrice = document.createElement("h4");
        productPrice.innerText = product.price;
        productPrice.classList.add("product1-info");

        // Add click event to store selected product and navigate
        productDiv.onclick = function () {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "shopeasyprodetmobile.html";
        };

        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);

        productContainer.appendChild(productDiv);
    });
});


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

function goToCart(){
    window.location.href = "shopeasyacmobile.html";
}