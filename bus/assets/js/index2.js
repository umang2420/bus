let SignIn= document.getElementById("btn2");
SignIn.addEventListener("click", function (e) {
e.preventDefault();
check();
});

function check() {
let email = document.getElementById("email");
let password = document.getElementById("password");

if (email.value === "") {
    document.querySelector("#small2").innerHTML = "Please enter email";
}
else {
    document.querySelector("#small2").innerHTML = "";
}
if (password.value === "") {
    document.querySelector("#small3").innerHTML = "Please enter password";
}
else {
    document.querySelector("#small3").innerHTML = "";
}
}

    






