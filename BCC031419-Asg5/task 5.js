var amount = prompt("Enter the amount you wish to withdraw");

function currNotes() {
    var hundredNotes = Math.floor(amount / 100);
    var fiftyNotes = Math.floor((amount % 100) / 50);
    var tenNotes = Math.floor((amount % 100) % 50) / 10;
    var remaining = Math.floor(((amount % 100) % 50) % 10);

    document.write("You will have " + hundredNotes + " hundred notes, " + fiftyNotes + 
                    " fifty notes and " + tenNotes + " ten notes.");
}

currNotes();