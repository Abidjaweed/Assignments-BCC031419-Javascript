var str = ("<p><strong><em>Only Print this</p></strong></em>")
var strClean = str.replace( /(<([^>]+)>)/ig, '');

console.log(str)
console.log("after replacing html tags: " + strClean);


