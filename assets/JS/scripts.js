var todaysDate = new Date();
var year = todaysDate.getFullYear();
var month = (todaysDate.getMonth())
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

var monthOrder = [January, February, March, April, May, June, July, August, September, October, November, December];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// $(document).on('DOMContentLoaded', function () {

//     let thisMonth = monthOrder[month];
//     let thisMonthName = monthNames[month];
//     console.log(thisMonth)
//     console.log(thisMonthName) 
// });


// console.log(todaysDate);

// console.log(year);

// console.log(february);

$(document).on('DOMContentLoaded', function () {
    document.getElementById('innerMonth').style.display = "d-block";
    document.getElementById('innerDay').style.display = "none";
    document.getElementById('innerWeek').style.display = "none";
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
    let thisMonth = monthOrder[month];
    let thisMonthName = monthNames[month];
    console.log(thisMonth)
    console.log(thisMonthName)
    month = monthOrder[month]
    for (var i = 0; i < thisMonth.length; i++) {
        document.getElementById('innerMonth');
        const dayBox = document.createElement('div');
        dayBox.className = 'col-sm-4 displayMonth bb layout';
        dayBox.innerHTML = thisMonth[i];
        document.getElementById('innerMonth').appendChild(dayBox);
    }
}




