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

    
    if(isPasswordValid == true && isEmailValid == true) {
        alert("Welcome");
    } else if(isEmailValid == false && isPasswordValid == false) {
        alert("The information you entered is not correct. Please check your email and password and try again.")
    } else if(isPasswordValid == true) {
        alert("Your email is not valid or supported.")
    } else {
        alert("Your password is not valid.")
    }
});
