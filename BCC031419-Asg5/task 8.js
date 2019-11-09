function ageCalculator(dateOfBirth){

    var dateOfBirth = prompt("Type date of birth and get your Detailed age \nformat: Jan 1, 1970")
    
    var currDate = new Date();
    var BirthDate = new Date(dateOfBirth);
    
    var days = Math.floor((currDate - BirthDate) / (1000 * 60 * 60 * 24));
    var calcuYears = Math.floor(days / 365);
    var calcuMonths = Math.floor((days % 365) / 31);
    var calcuDays = days - (calcuYears * 365) - (calcuMonths * 31);
    
    return document.write("You are " + calcuYears + " Years, " 
    + calcuMonths + " months and " + calcuDays + " days old");
}

ageCalculator();