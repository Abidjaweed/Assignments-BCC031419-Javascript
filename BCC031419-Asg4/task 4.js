var num = 12345;
var inputEmail = prompt ("Enter your email");

var emailBeLike = /\S+@\S+\.\S+/;

if (inputEmail.match(emailBeLike)) {
    alert("Email is validated Successfully") 
} 
else {
    document.write("Please Enter a valid email")
}
