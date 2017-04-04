// JavaScript Date and Time 

function renderTime() {
    var mydate = newDate();
    var year = mydate.getyear();
    if (year < 1000) {
        year += 1900
        var day = mydate.getDay();
        var month = mydate.getMonth();
        var daym = mydate.getDate();
        var dayarray = new Array("Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,", );
        var montharray = new Array("January,", "February,", "March,", "April,", "May,", "Juny", "July,", "August,", "September,", "October,", "November,", "December,", );
    }

}