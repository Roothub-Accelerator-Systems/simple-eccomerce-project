const categoryText = document.querySelector(".categoryInfoText");
const categoryImage = document.querySelector(".categoryInfo");
const categoryList = document.querySelector(".categoryList");

//  categoryList.forEach(category => {
    categoryList.addEventListener("mouseover", function(){
        categoryImage.style.display = "none";
        categoryText.style.display = "flex";
    });

    categoryList.addEventListener("mouseout", function(){
        categoryImage.style.display = "block";
        categoryText.style.display = "none";
    });
//  });

const products = [
    {
        Name:"NeoFrame UHD Smart TV",
        price:"₦980,000",
        image:"SEimages/tv1.jpg",
        desc: "Smart TV – Access Netflix, YouTube, Prime Video, and more Full HD / 4K Resolution (if applicable) – Crystal-clear picture quality Built-in WiFi – Stream content effortlessly"
    },
    {
        Name:"StrideX Pro Sneakers",
        price: "₦250,000",
        image:"SEimages/shoes1.webp",
        desc: "Premium mesh for breathability Anti-slip rubber sole for all-day grip Perfect for casual wear, gym, or running"
    },
    {
        Name:" The Silent Patient",
        price:"₦100,000",
        image:"SEimages/book1.jpeg",
        desc: "Proven strategies to improve focus & productivity Real-life success stories & lessons Step-by-step guides to master new skills"
    
    },
    {
        Name:"Velora Reserve Red Wine",
        price:"₦1,980,000",
        image:"SEimages/wine1.jpeg",
        desc: "Full-bodied with a hint of dark berries Smooth oak finish with a velvety texture Pairs beautifully with steaks, pasta & cheese"
    },
    {
        Name:"FlexFit Seamless Gym Set",
        price:"₦350,000",
        image:"SEimages/womengym2.jpeg",
        desc: "High-waist leggings for tummy control Breathable sports bra with full support Quick-dry & ultra-stretch fabri"
    },
    {
        Name:"PulseX 2.0 Smartwatch",
        price:"₦4,000",
        image:"SEimages/smartwatch1.webp",
        desc: "Heart Rate & Sleep Monitoring Step Counter & Fitness Tracking Sync Calls & Messages"
    }
]

localStorage.setItem("products", JSON.stringify(products));

const productContainer = document.querySelector(".firstSection-Products");

products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product1");

    const productImg = document.createElement("img");
    productImg.src = product.image;
    productImg.alt = product.Name;
    productImg.classList.add("firstSection-Products");

    const productName = document.createElement("h4");
    productName.innerText = product.Name;
    productName.classList.add("product1-info");

    const productPrice = document.createElement("h4");
    productPrice.innerText = product.price;
    productPrice.classList.add("product1-info");

    productDiv.onclick = function(){
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "ShopEasyProDet.html";
    }

    productDiv.appendChild(productImg);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);

    productContainer.appendChild(productDiv);
})

function goToCart(){
    window.location.href = "ShopEasyAC.html";
}