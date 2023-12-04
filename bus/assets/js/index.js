let register = document.getElementById("btn2");
register.addEventListener("click", function (e) {
e.preventDefault();
check();
});
function check() {
    // Retrieve input fields
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let number = document.getElementById("number");
    let confirmPassword = document.getElementById("confirmPassword");
    let num = /[^0-9\-\/]/;

    if (name.value === "") {
    document.querySelector("small").innerHTML = "Please enter a name";
    return false;
    } else if (!/^[A-Z][a-z]+$/.test(name.value)) { // Regular expression to check if first letter is uppercase
    document.querySelector("small").innerHTML = "First letter of name must be capitalized";
    return false;
    } else {
    document.querySelector("small").innerHTML = "";
    }

    if (email.value === "") {
    document.querySelector("#small2").innerHTML = "Please enter an email address";
    return false;
    } else {
    document.querySelector("#small2").innerHTML = "";
    }

    if (password.value === "") {
    document.querySelector("#small3").innerHTML = "Please enter a password";
    return false;
    } else {
    document.querySelector("#small3").innerHTML = "";
    }
    if (confirmPassword.value === "") {
        document.querySelector("#small5").innerHTML = "Please confirm your password";
        return false;
      } else if (confirmPassword.value !== password.value) { // Check if confirm password matches password
        document.querySelector("#small5").innerHTML = "Passwords do not match";
        return false;
      } else {
        document.querySelector("#small5").innerHTML = "";
      }

      if (number.value === "") {
        document.querySelector("#small4").innerHTML = "Please enter a phone number";
        return false;
      }
      else if(num.test(number.value)){
        document.querySelector("#small4").innerHTML = "Please enter a valid number";
        return false;
      }
      else if (number.value.length < 10 || number.value.length > 10) {
        document.querySelector("#small4").innerHTML = "Phone number should not exceed more than 10 digits and should not be less than 10";
        return false;
      } else {
        document.querySelector("#small4").innerHTML = "";
      }
      

    let Data = {
    name: name.value,
    email: email.value,
    password: password.value,
    number: number.value
    };

    localStorage.setItem(Data.email, JSON.stringify(Data));
    alert("Registration successful!");
}
