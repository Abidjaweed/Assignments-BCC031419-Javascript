var num = prompt("Enter some numbers tp FIND NUMBERS");
num = num.toString();
var array = [];
var numLength = num.toString().length;
var sum = 0;

for (var i = 0; i < numLength; i++) {
    array[i] = num.charAt(i); 
}

for (var j = 0; j < numLength; j++) {
    sum += Number(array[j]);
}

var findMean = (sum / numLength);
var fixed = Number(findMean.toFixed(2))
document.write(fixed);