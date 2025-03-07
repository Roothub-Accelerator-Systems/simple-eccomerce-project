const loginBtn = document.querySelector(".loginBtn");

loginBtn.addEventListener("click", function(){
    const username = document.querySelector(".username").value;
    const email = document.querySelector(".email").value;

    localStorage.setItem("Username", JSON.stringify(username));
    localStorage.setItem("Email Address", JSON.stringify(email));

    window.location.href = "ShopEasy.html";
    username.textContent = "";
})
