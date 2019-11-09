// (i)Arguments as variable
var width = Number(prompt("Enter the width of Rectengle"));
var height = Number(prompt("Enter the Height of Rectengle"));

function sum() {
    var area = height * width
    return document.write("Area of rectangle is " + area)
}

sum();

// (ii)Argument as value
function area(length, width){
    var area = length * width
    return console.log("area of rectangle is " + area) 
}

area(12, 12);
