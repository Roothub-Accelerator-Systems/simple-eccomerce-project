document.addEventListener("DOMContentLoaded", function() {
    let selectedCategory = localStorage.getItem("selectedCategory");

    // Dummy products (Ideally, this comes from an API or database)
    const allProducts = [
        { name: "Laptop", category: "electronics", price: 500 },
        { name: "Smartphone", category: "electronics", price: 300 },
        { name: "Headphones", category: "electronics", price: 100 },
        { name: "T-Shirt", category: "clothing", price: 50 },
        { name: "Jeans", category: "clothing", price: 80 }
    ];

    let filteredProducts = allProducts.filter(p => p.category === selectedCategory);

    function displayProducts(products) {
        const productList = document.getElementById("productList");
        productList.innerHTML = ""; // Clear existing products

        products.forEach(product => {
            let productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.dataset.price = product.price;

            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
            `;
            productList.appendChild(productDiv);
        });
    }

    displayProducts(filteredProducts);

    // Sorting functionality
    document.getElementById("sort").addEventListener("change", function() {
        let sortOption = this.value;

        if (sortOption === "low-high") {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === "high-low") {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        displayProducts(filteredProducts);
    });
});