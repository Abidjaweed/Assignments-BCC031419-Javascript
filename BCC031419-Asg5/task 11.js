function isVowel (char){

    var userInputChar = prompt (" Input a character to find its a VOWEL family or not");
    var character = userInputChar.toLowerCase();
  
    switch(character){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return alert(true + " its a vowel");
            break;
        default:
            return alert(false + " its not a vowel");
        
    }
}

isVowel();