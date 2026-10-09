"use strict";
function mysubmit() {
    alert("merci pour votre participation " + document.getElementById('nom').value
        + " "
        + document.getElementById('prenom').value);
}
function initReadOnlyTextInput() {
    window.date_begin = new Date();
    let dateInput = document.getElementById('Date');
    dateInput.value = window.date_begin.toString();
}
function colorblind_switch() {
    let altSheet = document.getElementById("alt-sheet");
    if (altSheet.disabled) {
        altSheet.disabled = false; // Désactive
    }
    else {
        altSheet.disabled = true; // Active
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function random_file() {
    // Liste des pages possibles
    const pages = [
        'Content/nabil/fb.xhtml',
        'Content/nabil/mistborn.xhtml',
        'Content/nabil/red_rising.xhtml',
        'Content/nabil/the_first_law_1.xhtml',
        'Content/nabil/the_first_law_2.xhtml',
        'Content/nabil/the_first_law_3.xhtml',
        'Content/enzo/berserk.xhtml',
        'Content/enzo/Incendie.xhtml',
        'Content/enzo/Lois48.xhtml',
        'Content/enzo/page12regles.xhtml',
        'Content/enzo/page12regles_suite.xhtml',
        'Content/enzo/pageHHhh.xhtml'
    ];
    let randomIndex = Math.floor(Math.random() * pages.length);
    window.location.href = pages[randomIndex];
}
function displayHour() {
    window.date_begin = new Date();
    let dateInput = document.getElementById('date');
    dateInput.value = window.date_begin.toString();
}
function average() {
    let averageInput = document.getElementById('average');
    let sum = 0;
    let rangeValues = Array.from(document.querySelectorAll('input[type="range"]:not(#average)')).map(input => parseInt(input.value, 10)); // Conversion en nombres
    for (let i = 0; i < rangeValues.length; i++) {
        sum += rangeValues[i]; // Addition cumulative
    }
    let res = sum / rangeValues.length;
    averageInput.value = res.toFixed(2); // Arrondi à 2 décimales
}
