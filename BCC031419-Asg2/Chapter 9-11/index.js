//1** Welcoming karachi People
/*
var city = prompt("In which City do you Live");
city = city.toLowerCase ();
if (city == "karachi") {
document.write("<h1>Welcome to the city of Lights</h1>");
}
else {
document.write("<h1>Sorry, This isn't a City of lights</h1>");	
}*/


//2** input of gender then morning msg
/*
var gen = prompt("What is your Gender");
gen = gen.toLowerCase();
if (gen == "male") {
	document.write("<h2>Good Morning, Sir.</h2>")
}
else if (gen == "female") {
	document.write("<h2>Good Morning Ma'am.</h2>")
}
else {
	document.write("<h2>Try Again!!!</h2>")
}*/


//3** traffic signal colors & output msg
/*
var sig = prompt("what is the colour of signal ");
sig = sig.toLowerCase();
if (sig === "red"){
	document.write("<h2>Must Stop!</h2>");
}
else if (sig === "yellow"){
	document.write("<h2>Ready to move.</h2>");
}
else if (sig === "green"){
	document.write("<h1>Move Now.</h1>");
}
else {
	document.write("<h1>Invalid Color!!!</h1>");
}*/


//4**  input remaining fuel in car then show msg about refill
/*
var fuel = prompt("Remaining Fuel In The Tank?\n(In Litres)");
if (fuel > 0.25){
	document.write("<h2><i>Refill the fuel later..</i></h2>");
}
else if (fuel <= 0.25){
	document.write("<h2>Please Refill the fuel in your car!!!</h2>");
}*/


//5
/*
var a = 4; // alert displayed
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82; // no alert
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12; 
if (c++ === 13){ // no alert
alert("condition 1 is true");
}
if (c === 13){ // alert displayed 
alert("condition 2 is true");
}
if (++c < 14){ // no alert
alert("condition 3 is true");
}
if(c === 14){ // alert displayed
alert("condition 4 is true");
}
var materialCost = 20000; // alert displayed
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){ // alert displayed
alert("True");
}
if (false){ // no alert
alert("False");
}
if("car" < "cat"){ // alert displayed
alert("car is smaller than cat");
}*/


//6** Marksheet and percentage, grade, remakrs
/*
var totalmarks = 300;
var marks = prompt("Type your total marks out of 300 (in three subjects)?");
document.write("<h1>*MARK SHEET*</h2>");
document.write("<br>" + "Total Marks: " + totalmarks);
document.write("<br>" + "Obtained Marks: " + marks);
document.write("<br>" + "Percentage: " + (marks / totalmarks) * 100);
if (marks > 239){
	document.write("<br>" + "Grade: A-one");
	document.write("<br>" + "Remarks: Excellent");
}
else if (marks > 209){
	document.write("<br>" + "Grade: A");
	document.write("<br>" + "Remarks: Good");
}
else if (marks > 179){
	document.write("<br>" + "Grade: B");
	document.write("<br>" + "Remarks: You Need to Improve");
}
else if (marks <= 179){
	document.write("<br>" + "Grade: Fail..!!");
	document.write("<br>" + "Remarks: Sorry..");
}*/


//7** Guess game
/*
var secNum = prompt ("Guess the Seceret Number 1 to 10");
var secNum = parseInt(secNum);
if (secNum == 7) {
	alert("Bingo! Correct answer");
}
else if (secNum == 6){
	alert("Close enough to the correct answer.");
}

else {
	alert("Try Again..");
}*/


//8** check given number is divisible by 3
/*
var value_number = prompt("Enter Number To Check \nIt's Divisiblility By 3: ");
value_number = parseInt(value_number);
if(value_number % 3 == 0){
	document.write("The number " + value_number + " is divisible by 3.");
}
else{
	document.write("The number " + value_number + " is not divisible by 3");
}*/


//9** Find odd or even?
/*
var num = prompt ("Type a number to and Find odd or even?");
num = parseInt(num);
if ( num % 2 == 0) {
	alert('Even Number');
}else{
	alert('Odd Number');
}*/



//10** take temperature & then msg about weather
/*
var temp = prompt("what is the temperature today?");
temp = parseInt(temp);
if (temp >= 40){
	alert("It is too hot outside.");
}
else if (temp >= 30){
	alert("The Weather today is Normal.");
}
else if (temp >= 20){
	alert("Todays Weather is cool.");
}
else if (temp >= 10){
	alert("OMG! Todays weather is so Cool.");
}
else {
	alert("Nan");
}*/



//11** input 1 value, then 2nd then input the calculation sign
/*
var a = Number(prompt("Input Your first Value"));
var opr = prompt("Input your calculation sign");
var b = Number(prompt("Put Your Second Value"));
if (opr == "*"){
	alert(a + " * " + b + " = " + a*b + " is the answer");
}
else if (opr == "/"){
	alert(a + " / " + b + " = " + a/b + " is the answer"); 
}
else if (opr == "+"){
	alert(a + " + " + b + " = " + (a+b) + " is the answer"); 
}
else if (opr == "-"){
	alert(a + " - " + b + " = " + (a-b) + " is the answer"); 
}
else if (opr == "%"){
	alert(a + " % " + b + " = " + (a%b) + " is the answer"); 
}
else {
	alert("invalid intput")
}*/





