var todaysDate = new Date();
var year = todaysDate.getFullYear();
var month = todaysDate.getMonth();
var dayName = todaysDate.getDay();
var dateNumber = todaysDate.getDate();
// var year = 2024;
let January = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
if (year % 4 == 0){
    var February = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
} else {
    var February = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
}
let March = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let April = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];;
let May = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let June = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];;
let July = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let August = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let September = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];;
let October = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let November = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];;
let December = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];


var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthOrder = [January, February, March, April, May, June, July, August, September, October, November, December];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var hours = ["0000", "0100", "0200", "0300", "0400", '0500', "0600", "0700","0800","0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900", "2000", "2100", "2200", "2300" ]

// $(document).on('DOMContentLoaded', function () {

    // let thisMonth = monthOrder[month];
    // let thisMonthName = monthNames[month];
    // console.log(thisMonth)
    // console.log(thisMonthName) 
    // let thisDay = dayNames[dayName];
    // console.log(thisDay + "!!")
// });


// console.log(dayName);
// console.log(dayNames);
// console.log(dayNames[dayName]);


// console.log(february);

$(document).on('DOMContentLoaded', function () {
    document.getElementById('innerMonth').style.display = "";
    document.getElementById('innerWeek').style.display = "none";
    document.getElementById('innerDay').style.display = "none";
});

function changeMonth () {
    document.getElementById('innerMonth').style.display = "";
    document.getElementById('innerWeek').style.display = "none";
    document.getElementById('innerDay').style.display = "none";
}

function changeWeek () {
    document.getElementById('innerWeek').style.display = "";
    document.getElementById('innerDay').style.display = "none";
    document.getElementById('innerMonth').style.display = "none";
}

function changeDay () {
    document.getElementById('innerDay').style.display = "";
    document.getElementById('innerWeek').style.display = "none";
    document.getElementById('innerMonth').style.display = "none";
}

function createMonth () {
    let thisDay = dayNames[dayName];
    let thisMonth = monthOrder[month];
    let thisMonthName = monthNames[month];
    let thisYear = year
    for (var i = 0; i < thisMonth.length; i++) {
        let matchedDate = new Date()
        matchedDate.setFullYear(year, month, i)
        document.getElementById('innerMonth');
        const dayBoxleft = document.createElement('div');
        const dayBoxright = document.createElement('div');
        dayBoxleft.className = 'col-sm-3 displayMonthLeft bb layout';
        dayBoxright.className = 'col-sm-9 displayMonthRight bb layout';
        dayBoxleft.innerHTML = dayNames[matchedDate.getDay()] + " " + thisMonth[i];
        document.getElementById('innerMonth').appendChild(dayBoxleft);
        document.getElementById('innerMonth').appendChild(dayBoxright);
    } 
}



function createWeek() {
    let weekOrder = dayNames; 
    for (var a = 0; a < weekOrder.length; a++) {
        document.getElementById('innerWeek');
        const dayBoxleft = document.createElement('div');
        const dayBoxright = document.createElement('div');
        dayBoxleft.className = 'col-sm-3 displayMonthLeft bb layout';
        dayBoxright.className = 'col-sm-9 displayMonthRight bb layout';
        dayBoxleft.innerHTML = weekOrder[a];
        document.getElementById('innerWeek').appendChild(dayBoxleft);
        document.getElementById('innerWeek').appendChild(dayBoxright);
     
    }   
}


function createDay() {
    for (h = 0; h < hours.length; h++) {
        document.getElementById('innerDay');
        const dayDivide = document.createElement('div');
        dayDivide.className = 'col-sm-12 dayDivide bb layout';
        dayDivide.innerHTML = hours[h];
        document.getElementById('innerDay').appendChild(dayDivide);
    }
}


