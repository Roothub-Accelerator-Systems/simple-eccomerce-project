  //username from signup page
const myUsername = document.querySelector(".username");
const user = JSON.parse(localStorage.getItem("Username")) || "";
// console.log(user);
const capitalized = user.charAt(0).toUpperCase() + user.slice(1);
myUsername.textContent = capitalized;

// Electronics products list
  const electronicsProducts = [
    { 
        name: "Laptop", 
        price: 500,
        image:"SEimages/laptop.avif",
        desc:"random",
    },
    { 
        name: "Smartphone", 
        price: 300,
        image:"SEimages/smartphone.avif",
        desc:"random",
    },
    { 
        name: "Headphones", 
        price: 100,
        image:"SEimages/headphones.avif",
        desc:"random", 
    },
    { 
        name: "TV", 
        price: 700,
        image:"SEimages/tv2.webp",
        desc:"random",
     },
    { 
        name: "Smartwatch", 
        price: 200,
        image:"SEimages/smartwatch.avif",
        desc:"random", 
    }
];

const productList = document.getElementById("productList");
const sortSelect = document.getElementById("sort");

function displayProducts(products) {
    productList.innerHTML = ""; // Clear previous list

    products.forEach(product => {

        const productDiv = document.createElement("div");
        productDiv.classList.add("product1");
    
        const productImg = document.createElement("img");
        productImg.src = product.image;
        productImg.alt = product.name;
        productImg.classList.add("firstSection-Products");
        productImg.classList.add(".firstSection-ProductsImg");
    
        const productName = document.createElement("h4");
        productName.innerText = product.name;
        productName.classList.add("product1-info");
    
        const productPrice = document.createElement("h4");
        productPrice.innerText = product.price;
        productPrice.classList.add("product1-info");
    
        // productDiv.onclick = function(){
        //     localStorage.setItem("selectedProduct", JSON.stringify(product));
        //     window.location.href = "ShopEasyProDet.html";
        // }
    
        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
    
        productList.appendChild(productDiv);

        // let productDiv = document.createElement("div");
        // productDiv.classList.add("product");
        // productDiv.dataset.price = product.price; // Store price as a dataset attribute

        // productDiv.innerHTML = `
        //     <h3>${product.name}</h3>
        //     <p>Price: $${product.price}</p>
        // `;
        // productList.appendChild(productDiv);
    });
}

// Display products initially
displayProducts(electronicsProducts);

// Sorting functionality
sortSelect.addEventListener("change", function() {
    let sortedProducts = [...electronicsProducts];

    if (this.value === "low-high") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (this.value === "high-low") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(sortedProducts);
});
