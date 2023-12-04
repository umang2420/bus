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
    return false;
}
else {
    document.querySelector("#small2").innerHTML = "";
}
if (password.value === "") {
    document.querySelector("#small3").innerHTML = "Please enter password";
    return false;
}
else {
    document.querySelector("#small3").innerHTML = "";
}
}
   
document.getElementById('form').addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   
    
    const storedUserData = JSON.parse(localStorage.getItem(email));
    if (!/^[a-zA-Z0-9._@]+$/.test(email)) {
        alert('Invalid email format. Please enter a valid email address.');
        return;
      }
    if (storedUserData.password === password) {
    alert('Welcome to Bus Ticket Booking');
    window.location.href = './register.html';
    } else {
    alert('Invalid login credentials');
    }
})






