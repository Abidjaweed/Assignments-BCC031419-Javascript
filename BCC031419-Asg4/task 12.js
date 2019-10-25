var rightNow = new Date();
var theDate = rightNow.getDate();

if (theDate < 16){
	document.write("First fifteen days of the month")
}
else{
	document.write("last days of the month")
}
