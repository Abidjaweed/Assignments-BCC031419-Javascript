function add_week(num){
    
    var now = new Date();
    now.setDate(now.getDate() + num * 7)
    return console.log (now);
}

add_week(2)
add_week(4)