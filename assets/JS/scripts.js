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
    document.getElementById('innerWeek').style.display = "block";
    document.getElementById('innerDay').style.display = "none";
    document.getElementById('innerMonth').style.display = "none";
}

function changeDay () {
    document.getElementById('innerDay').style.display = "block";
    document.getElementById('innerWeek').style.display = "none";
    document.getElementById('innerMonth').style.display = "none";
}

function createMonth () {
    let thisDay = dayNames[dayName];
    let thisMonth = monthOrder[month];
    let thisMonthName = monthNames[month];
    let thisYear = year
    // console.log(thisDay)
    // console.log(thisMonth)
    // console.log(thisMonthName)
    // console.log(dateNumber)
    // console.log(todaysDate)
    for (var i = 0; i < thisMonth.length; i++) {
        let matchedDate = new Date()
        matchedDate.setFullYear(year, month, i)
        document.getElementById('innerMonth');
        const dayBox = document.createElement('div');
        dayBox.className = 'col-sm-12 displayMonth bb layout';
        dayBox.innerHTML = dayNames[matchedDate.getDay()] + " " + thisMonth[i];
        document.getElementById('innerMonth').appendChild(dayBox);
    } 
}



function createWeek() {
    let weekOrder = dayNames; 
    for (var a = 0; a < weekOrder.length; a++) {
        document.getElementById('innerWeek');
        const dayBox = document.createElement('div');
        dayBox.className = 'col-sm-12 displayMonth bb layout';
        dayBox.innerHTML = weekOrder[a];
        document.getElementById('innerWeek').appendChild(dayBox);
        // if (i + 1 === dateNumber){
        //     dayBox.innerHTML = thisMonth[i] + " " + thisDay;
        // }   
        // console.log(weekOrder[i])
        // console.log(i)
     
    }   
}

// while(todaysDate.getDay()!= 1) todaysDate.setDate(--dateNumber);

// console.log(todaysDate.getDay()1), todaysDate.setDate(--dateNumber);