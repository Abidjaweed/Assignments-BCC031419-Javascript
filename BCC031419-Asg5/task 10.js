function countingOfVowels(str){
    
    var userInput = prompt("Type a string & get the quantity of vowels");
   
    var vowelsCount = 0;
    var stringToLower = userInput.toLowerCase();
        
    for (var i = 0; i < stringToLower.length; i++){
            switch(stringToLower.charAt(i)){
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                    vowelsCount += 1;
                    break;
            }
        }
        console.log("String " +"("+ userInput +")"+ " has " + vowelsCount + " Vowels.")
}

countingOfVowels();