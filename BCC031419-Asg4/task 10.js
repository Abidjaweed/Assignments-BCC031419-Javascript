
var input = [16.765 , 12.37982 , -9.3079499];

    document.write("<b>Input:</b>");

for (i =0 ; i < 3; i++){
    document.write("<br>" + input[i]);
}
    document.write("<br>");
    document.write("<br><b>Rounded Output:</b>");

for (i = 0; i < 2; i++){
    document.write("<br>" + input[i].toFixed(2));
}

    document.write("<br>" + input[2].toFixed(4));