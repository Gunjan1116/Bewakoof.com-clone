let btn=document.querySelector("#login-btn");
//console.log(btn);
btn.addEventListener("click",()=>{
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#password").value;
    if(email=="admin@gmail.com"&&pass=="admin"){
        alert("Welcome Back To Admin Home Page!!");
        window.location.href="../html/AdminHome.html";
    }else{
        alert("Wrong Credentials!!");
    }
})
