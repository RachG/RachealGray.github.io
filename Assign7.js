//JavaScript Day and Time 
function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }
}

function validateForm() {
    var y = document.forms["myForm"]["lastname"].value;
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
}

function validateForm() {
    var z = document.forms["myForm"]["email"].value;
    if (z == "") {
        alert("Email must be filled out");
        return false;
    }
}

function validateForm() {
    var s = document.forms["myForm"]["Question", "Problem", "Order Status Update"].value;
    if (s == "") {
        alert("Please select Options");
        return false;
    }
}

function validateForm() {
    var c = document.forms["myForm"]["message"].value;
    if (c == "") {
        alert("Please fill out the message box");
        return false;
    }
}

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

    document.getElementById("dateTime").innerHTML =
        "Today is " + month + "/" + day + "/" + year +
        " and the time is " + hours + ":" + minutes + ":" + second;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + 1
    }
}