
// console.log(email);

// const signUp = document.querySelector(".signup");
function nextPage(){
    let userName = document.querySelector(".username").value;
    if(userName){
        localStorage.setItem("Username", JSON.stringify(userName));
    }

    let email = document.querySelector(".emailAddress").value;
    if(email){
        localStorage.setItem("EmailAdd", JSON.stringify(email));
    }
    window.location.href = "ShopEasy.html";
    // console.log(localStorage.getItem("Username"));

}

    
