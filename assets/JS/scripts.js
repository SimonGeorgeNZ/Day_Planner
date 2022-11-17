var todaysDate = new Date();
var year = todaysDate.getFullYear();
var month = (todaysDate.getMonth())
// var year = 2024;
let monthOrder = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let january = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
if (year % 4 == 0){
    var february = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
} else {
    var february = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
}
let march = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let april = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];;
let may = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let june = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];;
let july = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let august = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let september = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];;
let october = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let november = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];;
let december = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];


$(document).on('DOMContentLoaded', function () {

    console.log(monthOrder[month])
});


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

// function createMonth () {
//     document.getElementById('innerMonth');
//     const dayBox = document.createElement('div');
//     dayBox.className = 'col-sm-4 displayMonth bb layout';
//     dayBox.innerHTML = 'Month';
//     document.getElementById('innerMonth').appendChild(dayBox);
// }




