var temp = ("<b>The quick brown fox jumps over the lazy dog</b>");
var templower = temp.toLowerCase();

var count = (templower.match(/the/g) || []).length;

    document.write(temp);
    document.write("<br> There are " + count + " occurrences of word 'The'");

