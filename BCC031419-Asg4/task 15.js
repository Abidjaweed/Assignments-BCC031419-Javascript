var ageInput = prompt("Type your age\nfind your birth year")

var rightNow = new Date();
var currentYear = rightNow.getFullYear();
	
	document.write("Your Age is: " + ageInput);
	document.write("<br>" + "Your Birth Year is: " + (currentYear - ageInput));