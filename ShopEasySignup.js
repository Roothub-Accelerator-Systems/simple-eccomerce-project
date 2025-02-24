const loginBtn = document.querySelector(".loginBtn");

loginBtn.addEventListener("click", function(){
    const username = document.querySelector(".username").value;


    localStorage.setItem("Username", JSON.stringify(username));
    

    window.location.href = "ShopEasy.html";
    username.textContent = "";
})
