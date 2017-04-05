//JavaScript Day and Time 

function startTime() {
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var second = today.getSeconds();
    minutes = checkTime(minutes);
    second = checkTime(second);

    document.getElementById('dateTime').innerHTML =
        "Today is " + month + "/" + day + "/" + year +
        " and the time is " + hours + ":" + minutes + ":" + second;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + 1
    }
}