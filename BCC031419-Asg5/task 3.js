var userInput = prompt("Enter a word to find whether its a palindrome or not? ")

function palindrome(str) {
    var string = str.toLowerCase();
    var len = string.length;
    var twoParts = Math.floor(len / 2);

    for (var i = 0; i < twoParts; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return alert("False: " + userInput + " is not a palindrome ");
        }
        else{
            return alert("True: " + userInput + " is a palindrome ");
        }
    }
}

palindrome(userInput);