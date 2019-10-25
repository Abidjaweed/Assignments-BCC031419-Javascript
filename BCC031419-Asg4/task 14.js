var date = new Date();
var currentDate = new Date();

currentDate.setHours(currentDate.getHours() + 1);

document.write("CurrentDate: " + currentDate);

document.write("<br><br> 1-hour Ago, It Was " + date);