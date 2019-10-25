var newDate = new Date();

var milseconds= newDate.getTime();
var minutes = (milseconds/60000);

document.write("Current Date: " + newDate);
document.write("<br>Elapsed Milliseconds Since Jan 1, 1970: " + milseconds);
document.write("<br>Elapsed Minutes Since Jan 1, 1970: " + minutes);
