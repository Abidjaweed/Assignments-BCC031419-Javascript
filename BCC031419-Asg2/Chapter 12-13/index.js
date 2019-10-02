//1 checking the letters
/*
var character = prompt ("type a letter");
var checkcharacter = character.charCodeAt(0);
if (checkcharacter >= 48 && checkcharacter <= 57) {
    alert("You've Entered A NUMBER");
} else if (checkcharacter >= 65 && checkcharacter <= 90) {
    alert("You've Entered An UPPERCASE-LETTER");
} else if (checkcharacter >= 97 && checkcharacter <= 122) {
    alert("You've Entered A LOWERCASE-LETTER");
}*/


//2**  accept two integers and display the larger.
/*
var a = prompt ("type a number");
var b = prompt("type another number");
  if (a > 0 && b > 0 && a > b) {
    document.write("The larger number is " + a );
  } 
  else if (a > 0 && b > 0 && a < b) {
    document.write("The larger number is " + b);
  } 
  else if (a === b && a > 0 && b > 0) {
    document.write("Both numbers are equal!")
  } 
  else {
    document.write("Please add an integer!");
}*/



//3**  input a number and show the number is positive, negative or zero.
/*
var num = prompt ("Enter A Number To Check If It's\nPositive, Negative, Zero.", 0);
if (num > 0){
	alert(num + " is Positive number");
}
else if (num < 0){
	alert(num + " is Negative number");
}
else if (num == 0 && -num == 0){
	alert("This is Zero");
}
else {
	alert("please type numeric only!");
}*/


//4** input string of length 1 and returns true if it is a vowel, false otherwise
/*
var vowels = prompt ("Type a word");
vowels = vowels.toLowerCase();
if (vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u"){
	document.write("True! it's a vowel");
}
else {
	document.write("false! its not vowel");
}*/


//5** input pass and validate it
/*
var pass = "12345"
var passInput = prompt ("Please Enter Your Password");
if (passInput === pass){
	alert("Correct!\nThe Password You've Entered Matches.");
}
else {
	alert("Incorrect password! \nTry Again.");
}*/


//6** if/else statement try to fix it
/*
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
} else {
    greeting = "Good evening";
    alert(greeting);
}*/


//7**  input from user in 24hours format, Implement case using if, else & else if 
/*
var time = prompt ("Enter Current Time\n(24-HR Format)");
if (time >= 0000 && time < 1200 ){
	alert("Good Morning");
}
else if (time >= 1200 && time < 1700){
	alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100){
	alert("Good Evening");
}
else if (time >= 2100 && time <= 2359){
	alert("Good night");
}
else {
	alert("wrong input");
}*/


