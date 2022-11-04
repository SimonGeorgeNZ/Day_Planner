$(document).ready(function () {
    document.getElementById('innerMonth').style.display = "block";
    document.getElementById('innerDay').style.display = "none";
    document.getElementById('innerWeek').style.display = "none";
});

function changeMonth () {
    document.getElementById('innerMonth').style.display = "block";
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




