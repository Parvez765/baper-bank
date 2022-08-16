document.getElementById("login-btn").addEventListener("click", function () {
    const emailField = document.getElementById("email");
    const emailFieldValue = emailField.value
   
    const passwordField = document.getElementById("password");
    const passwordFieldValue = passwordField.value;
    
    if (emailFieldValue === "sontan@baap.com" && passwordFieldValue === "Sontan") {
        location.href = "bank.html";
    } else {
        alert("Invalid User")
    }
})



