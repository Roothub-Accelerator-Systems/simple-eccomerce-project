//username from signup page
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

//hovering over category list
const categoryText = document.querySelector(".categoryInfoText");
const categoryImage = document.querySelector(".categoryInfoImg");
const categoryList = document.querySelector(".categoryList");

categoryList.addEventListener("mouseover", function(){
    categoryImage.style.display = "none";
    categoryText.style.display = "flex";
});

categoryList.addEventListener("mouseout", function(){
    categoryImage.style.display = "block";
    categoryText.style.display = "none";
}); 
    // up ratatouolle monster inc finding nemo incredibles son of big foot good dinosaur
//  });

//dynmaic products display
const products = [
    {
        Name:"NeoFrame UHD Smart TV",
        price:"₦980,000",
        image:"SEimages/tv.avif",
        desc: "Smart TV – Access Netflix, YouTube, Prime Video, and more Full HD / 4K Resolution (if applicable) – Crystal-clear picture quality Built-in WiFi – Stream content effortlessly"
    },
    {
        Name:"StrideX Pro Sneakers",
        price: "₦250,000",
        image:"SEimages/sneakers.webp",
        desc: "Premium mesh for breathability Anti-slip rubber sole for all-day grip Perfect for casual wear, gym, or running"
    },
    {
        Name:" The Silent Patient",
        price:"₦100,000",
        image:"SEimages/courtbook.avif",
        desc: "Proven strategies to improve focus & productivity Real-life success stories & lessons Step-by-step guides to master new skills"
    
    },
    {
        Name:"Velora Reserve Red Wine",
        price:"₦1,980,000",
        image:"SEimages/chianti.avif",
        desc: "Full-bodied with a hint of dark berries Smooth oak finish with a velvety texture Pairs beautifully with steaks, pasta & cheese"
    },
    {
        Name:"FlexFit Seamless Gym Set",
        price:"₦350,000",
        image:"SEimages/gymset.avif",
        desc: "High-waist leggings for tummy control Breathable sports bra with full support Quick-dry & ultra-stretch fabri"
    },
    {
        Name:"PulseX 2.0 Smartwatch",
        price:"₦4,000",
        image:"SEimages/smartwatch.avif",
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

//cart icon button
function goToCart(){
    window.location.href = "ShopEasyAC.html";
}
