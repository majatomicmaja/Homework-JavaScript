document.querySelector("#loginButton").addEventListener("click", function() {
    const email = document.getElementById("email").value;

    const regexEmail = /^[a-z]{8,}\@(gmail|yahoo).com$/;

    const isEmailValid = regexEmail.test(email);

    if(!isEmailValid) {
        document.getElementById("email").classList.add("invalidField");
    } else {
        document.getElementById("email").classList.remove("invalidField");
    }
    
    const password = document.getElementById("password");
    const regexPassword = new RegExp(/^\S{9,}$/);

    const isPasswordValid = regexPassword.test(password.value);

    if(!isPasswordValid) {
        password.classList.add("invalidField");
    } else {
        password.classList.remove("invalidField");
    }

    if(isPasswordValid == true) {
        alert("Your email is not valid or it's not supported");
    } else if(isEmailValid == true) {
        alert("Your password is not correct")
    } else {
        alert("Please check your email and password and try again")
    }
});