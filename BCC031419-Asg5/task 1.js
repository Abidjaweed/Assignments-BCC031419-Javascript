var userInput = prompt("Enter a number to find its factorial");

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
        
    }
}

document.write(userInput+" ----> "+factorial(userInput));