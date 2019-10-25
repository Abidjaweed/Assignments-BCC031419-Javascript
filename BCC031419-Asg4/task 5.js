var num = prompt("Type a number");

var num = Number(num);

var roundNum = Math.round(num);
var floorNum = Math.floor(num);
var ceilNum = Math.ceil(num);

document.write("Number: " + num)
document.write("<br>" + "Round of Value: " + roundNum);
document.write("<br>" + "Floor Value: " + floorNum);
document.write("<br>" + "Ceil Value: " + ceilNum);
