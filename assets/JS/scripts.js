// var year = new Date().getFullYear();
var year = 2024;
let january = 31;
if (year % 4 == 0){
    var february = 29
} else {
    var february = 28
}
let march = 31;
let april = 30;
let may = 31;
let june = 30;
let july = 31;
let august = 31;
let september = 30;
let october = 31;
let november = 30;
let december = 31;

// if (year % 4 == 0){
//     console.log("yes");}

console.log(year);

console.log(february);

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




