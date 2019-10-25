var passInput = prompt("TYPE YOUR PASSWORD");

var letterNumber = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var numbers = /^[0-9]+$/;

if (passInput.match(letterNumber) && !passInput.charAt(0).match(numbers)){
   
    document.write("<h2>Login Successful.</h2>");
}
else {
    var passInput = prompt("Enter a Valid Password");

}