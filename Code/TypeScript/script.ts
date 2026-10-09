interface Window {
    date_begin : Date ;
    date_end : Date ;
}



function mysubmit( ) : void {
    alert("merci pour votre participation " + (<HTMLInputElement>document.getElementById('nom')).value
        + " "
        + (<HTMLInputElement>document.getElementById('prenom')).value);
}


function initReadOnlyTextInput(): void {
    window.date_begin = new Date();

    let dateInput = document.getElementById('Date') as HTMLInputElement;
    dateInput.value = window.date_begin.toString();
}




function colorblind_switch(): void {
    let altSheet = document.getElementById("alt-sheet") as HTMLLinkElement;
    if (altSheet.disabled) {
        altSheet.disabled = false; // Désactive
    } else {
        altSheet.disabled = true; // Active
    }

}

function getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
}

function random_file(): void {
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


function displayHour() : void {
    window.date_begin = new Date();

    let dateInput = document.getElementById('date') as HTMLInputElement;
    dateInput.value = window.date_begin.toString()
}


function average() {
    let averageInput = document.getElementById('average') as HTMLInputElement;
    let sum = 0;
    let rangeValues = Array.from(
        document.querySelectorAll('input[type="range"]:not(#average)')
    ).map(input => parseInt((input as HTMLInputElement).value, 10)); // Conversion en nombres


    for (let i = 0; i < rangeValues.length; i++) {
        sum += rangeValues[i]; // Addition cumulative
    }

    let res = sum / rangeValues.length;
    averageInput.value = res.toFixed(2); // Arrondi à 2 décimales
}