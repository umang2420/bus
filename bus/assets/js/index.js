let register = document.getElementById("btn2");
register.addEventListener("click", function (e) {
e.preventDefault();
check();
});
function check() {
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");

if (name.value === "") {
    document.querySelector("small").innerHTML = "Please enter a name";
    return false;
} else {
    document.querySelector("small").innerHTML = "";
}

if (email.value === "") {
    document.querySelector("#small2").innerHTML = "Please enter email";
    return ;
}
else {
    document.querySelector("#small2").innerHTML = "";
}
if (password.value === "") {
    document.querySelector("#small3").innerHTML = "Please enter password";
    return ;
}
else {
    document.querySelector("#small3").innerHTML = "";
}
let Data = {
    name: name.value,
    email: email.value,
    password: password.value
};

    localStorage.setItem(Data.email, JSON.stringify(Data));
    alert('Registration successful!');
}







    






