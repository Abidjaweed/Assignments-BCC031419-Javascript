var num = prompt("type numeric get inwords");

var number = num.toString();

var oneDigitTwoDigit = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
                 "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

                 var TenToNinety = ["", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

var threeDigits = ["", "One Hundred", "Two Hundred", "Three Hundred", "Four Hundred", "Five Hundred", "Six Hundred",
                 "Seven Hundred", "Eight Hundred", "Nine Hundred"];

var Thous1ToThous9 = ["", "One Thousand", "Two Thousand", "Three Thousand", "Four Thousand", "Five Thousand", "Six Thousand",
                 "Seven Thousand", "Eight Thousand", "Nine Thousand",];


// from numeric 1 - 99 (1 digit & Two digit)

if (num < 20) {
    console.log(oneDigitTwoDigit[num]);
} else if (number.length === 2 && number.charAt(1) === "0") {
    console.log(TenToNinety[number.charAt(0)]);
} else if (num < 100) {
    console.log(TenToNinety[number.charAt(0)] + " " + oneDigitTwoDigit[number.charAt(1)]);
} 

// from numeric 100 - 999 (2 digit & three digit)

else if (number.length === 3 && number.charAt(1) === "0" && number.charAt(2) === "0") {
    console.log(threeDigits[number.charAt(0)]);
} else if (number.length === 3 && number.charAt(1) === "1") {
    console.log(threeDigits[number.charAt(0)] + " & " + oneDigitTwoDigit[number.charAt(1) + number.charAt(2)]);
} else if (number.length === 3 && number.charAt(1) === "0") {
    console.log(threeDigits[number.charAt(0)] + " & " + oneDigitTwoDigit[number.charAt(2)]);
} else if (num > 100 && num < 1000) {
    console.log(threeDigits[number.charAt(0)] + " & " + TenToNinety[number.charAt(1)] + " " + oneDigitTwoDigit[number.charAt(2)]);
} 

// fromm numeric 1000 - 9999 (4 digits) too complex

else if (number.length === 4 && number.charAt(1) === "0" && number.charAt(2) === "0" && number.charAt(3) === "0") {
    console.log(Thous1ToThous9[number.charAt(0)])
} else if (number.length === 4 && number.charAt(1) === "0" && number.charAt(2) === "1") {
    console.log(Thous1ToThous9[number.charAt(0)] + " & " +oneDigitTwoDigit[number.charAt(2) + number.charAt(3)]);
}  else if (number.length === 4) {
    console.log(Thous1ToThous9[number.charAt(0)] + " " + threeDigits[number.charAt(1)] + " & " + TenToNinety[number.charAt(2)] + " " + oneDigitTwoDigit[number.charAt(3)]);
}