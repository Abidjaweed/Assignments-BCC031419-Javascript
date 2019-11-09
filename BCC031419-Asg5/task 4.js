function calcCircumference (radius){
    var pi = 3.142
    var circumference = 2 * pi * radius;
    return ("Circumference of Circle: " + circumference)
}

function calcArea(radius){
    var pi = 3.142
    var area = pi * (radius * radius);
    return ("Area of circle: " + area)
}

document.write(calcCircumference(5));
document.write("<br>" + calcArea(5));