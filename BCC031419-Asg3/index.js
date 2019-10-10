//1 List of degrees using Array
var degrees = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];
    document.write(degrees[0]);
    document.write("<br>" + degrees[1]);
    document.write("<br>" + degrees[2]);
    document.write("<br>" + degrees[3]);
    document.write("<br>" + degrees[4]);
    document.write("<br>" + degrees[5]);
    document.write("<br>" + degrees[6]);
    document.write("<br>" + degrees[7]); 
    document.write("<br>");
    document.write("<br>");




//2 Marks & percentages using Array

var names = ["Ali", "Daniyal", "Aqeel"];
var score = [320, 230, 480];
var totalNumber = 500;
    document.write("Score of " + names[0] + " is " + score[0] + ". Percentage " + (score[0]/totalNumber) * 100 + "%");
    document.write("<br>" + "Score of " + names[1] + " is " + score[1] + ". Percentage " + (score[1]/totalNumber) * 100 + "%");
    document.write("<br>" + "Score of " + names[2] + " is " + score[2] + ". Percentage " + (score[2]/totalNumber) * 100 + "%");
    document.write("<br>");
    document.write("<br>");




//3(A) Ask user & Display colour name in ending

var colourInput = prompt("Enter your Colour that will add in starting");
    colourInput = colourInput.toLowerCase();
var colours = [" red", " blue", " green", " purple", " yellow", " brown", " pink", " white", " black", " grey"];
    colours.unshift(colourInput);
    document.write(colours);
    document.write("<br>");



//3(B)Ask the user what color he/she wants to add to the end & add that color to the end of the array. 

var colourInput = prompt("Enter your Colour that will add in the ending");
    colourInput = colourInput.toLowerCase();
var colours = [" red", " blue", " green", " purple", " yellow", " brown", " pink", " white", " black", " grey" ];
    colours.push(colourInput);
    document.write(colours);
    document.write("<br>");




//3(C) Add two more color to the beginning of the array. Display the updated

var colours = [" red", " blue", " green", " purple", " yellow", " brown", " pink", " white", " black" ];
    colours.splice(0, 2, " orange", " grey");
    document.write(colours);
    document.write("<br>");
    



//3(D) Delete the first color in the array. Display the updated 

var colours = [" red", " blue", " green", " purple", " yellow", " brown", " pink", " white", " black" ];
    colours.shift();
    document.write(colours);
    document.write("<br>");
  



//3(E) Delete the last color in the array. Display the updated

var colours = [" red", " blue", " green", " purple", " yellow", " brown", " pink", " white", " black" ];
    colours.pop();
    document.write(colours);
    document.write("<br>");
   



//3(F) Ask the user at which index he/she wants to add a color & color name

var colourInput = prompt("Enter your Colour you want to add");
var colourPosition = prompt("Enter the Position where you want to add this colour");
var colours = [" red", " blue", " green", " purple", " yellow", " brown", " pink", " white", " black", " grey"];
    colourPosition = parseInt(colourPosition);
    colours.splice( colourPosition , 0, colourInput);
    document.write(colours);
    document.write("<br>");
 



//3(G) Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 

var colourDeletation = prompt("How many colours you want to Delete");
var colourDelPosition = prompt("Enter the Position where you want to delete these colours\n(deletation will start just after your input number)");
var colours = [" 1. red", " 2. blue", " 3. green", " 4. purple", " 5. yellow", " 6. brown", " 7. pink", " 8. white", " 9. black", " 10. grey"];
    colours.splice(colourDelPosition, colourDeletation);
    document.write(colours);
    document.write("<br>");
	document.write("<br>");
  



//4 initialize array & copy 3 names into a seperate list

var cities = [" Karachi", " Lahore" , " Islamabad", " Peshawar", " Quetta"];
    document.write("<b>Cities List:</b>");
    document.write(cities);
var citiesUpdated = cities.slice(3, 5)
	document.write("<br>");
    document.write("<b>Selected Cities List:</b>")
    document.write(citiesUpdated)
    document.write("<br>");
    document.write("<br>");



//5 remove all duplicate items from an array

var arr1=[3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3, "c", "c"];
var unique = [...new Set(arr1)];
    document.write("Set of Array: " + arr1);
    document.write("<br>" + "After Removing Duplicates: " + unique);
    document.write("<br>");
    document.write("<br>");



//6 JavaScript program to display using following sequence

var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];
    document.write("1" + o[1] + " Choice is " + aCities[0]);
    document.write("<br>" + "2" + o[2] + " Choice is " + aCities[1]);
    document.write("<br>" + "3" + o[3] + " Choice is " + aCities[2]);
    document.write("<br>" + "4" + o[0] + " Choice is " + aCities[3]);
    document.write("<br>");
    document.write("<br>");



//7  compute the union of two arrays. (Merge two arrays by removing all duplicates

var a = [10,20,20,10,11,11,11,4,40,60,70,1,2,3,4,5,6];
var b = [1,2,3,4,5,6,7,8,9,10];
var union = [...new Set([...b, ...a])];
    document.write("union: "+ union);
    document.write("<br>");
    document.write("<br>");



//8(A) Counting:

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    document.write("Counting: " + numbers);


//8(B) Reverse counting:   

var revNumbers = numbers.reverse();    
    document.write("<br>" + "Reverse Counting: " + revNumbers)
    document.write("<br>");



//8(C) Even numbers
//8(d) Odd numbers

for (var i = 0; i < 14; i++) { 
    if ((i % 2) === 0) {
        document.write(i + ",");
    }
}
document.write("<br>");
for (var i = 0; i < 14; i++) { 
    if ((i % 2) !== 0) {
        document.write(i + ",");
    }
}
    document.write("<br>");



//8(e) series

for (var i = 2; i < 14; i++) { 
    if ((i % 2) === 0) {
        document.write(i + "k, ");
    }
}
    document.write("<br>");
    document.write("<br>");



//9 identify the largest number

var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}

    document.write(largest + " is the largest number");
    document.write("<br>");
    document.write("<br>");



//10 Sort an array from smallest to largest value

var numArray = [20,53,78,4,91,12];
numArray = numArray.sort((a, b) => a - b);
document.write("Smallest to largest " + numArray);



