"use strict";
function applyAllTests() {
    CheckNames();
    Checkradio();
}
function test_2() {
    verifierFormulaire();
    CheckNames();
}
function CheckNames() {
    let name = document.getElementById('nom');
    let firstname = document.getElementById('prenom');
    if (name.value == " " || name.value == "Votre nom") {
        name.value = " Votre nom svp !!!";
        name.style.color = "red";
        name.style.fontSize = "12px";
    }
    else {
        name.style.color = "black";
    }
    if (firstname.value == " " || firstname.value == "Votre prénom") {
        firstname.value = " Votre prenom svp !!!";
        firstname.style.color = "red";
        firstname.style.fontSize = "12px";
    }
    else {
        firstname.style.color = "black";
    }
}
function Checkradio() {
    let display = "";
    let display1 = "";
    let display2 = "";
    let good_answer1 = document.getElementById("choix2");
    let client_choice1 = document.querySelector(`input[name="books"]:checked`);
    if (client_choice1.value != good_answer1.value) {
        display = " - Vous n'avez pas la bonne réponse à 'Quel auteur a écrit \"The Final Empire\" ?' ";
    }
    else {
        display = " - Bonne réponse";
    }
    let good_answer2 = document.getElementById("choix6");
    let client_choice2 = document.querySelector(`input[name="books2"]:checked`);
    if (client_choice2.value != good_answer2.value) {
        display1 = " - Vous n'avez pas la bonne réponse à 'Quel livre a reçu la note 9,5/10 dans ma collection ?'";
    }
    else {
        display1 = " - Bonne réponse";
    }
    let good_answer3 = document.getElementById("choix12");
    let client_choice3 = document.querySelector(`input[name="books3"]:checked`);
    if (client_choice3.value != good_answer3.value) {
        display2 = "- Vous n'avez pas la bonne réponse à 'Combien de pages compte La Première Loi - Tome 3 ' ";
    }
    else {
        display2 = " - Bonne réponse ";
    }
    alert(display + "\n" + display1 + "\n" + display2);
}
function verifierFormulaire() {
    let reponse1 = document.querySelectorAll("fieldset#Qun input")[0].value.toLowerCase();
    let reponse2 = document.querySelectorAll("fieldset#Qun input")[1].value.toLowerCase();
    let reponse3 = document.querySelectorAll("fieldset#Qun input")[2].value;
    let reponse4 = document.querySelectorAll("fieldset#Qun input")[3].value.toLowerCase();
    let reponse5 = document.querySelectorAll("fieldset#Qun input")[4].value.toLowerCase();
    let reponse6 = document.querySelectorAll("fieldset#Qun input")[5].value.toLowerCase();
    if (reponse1 != "kentaro miura") {
        alert("Erreur : L'auteur est Kentaro Miura");
    }
    if (reponse2 != "1989") {
        alert("Erreur : Berserk tome 1 est sortie en 1989");
    }
    if (reponse3 != "incendie") {
        alert("Le livre de Wajdi Mouawad est Incendie");
    }
    if (reponse4 != "2018") {
        alert("Erreur : date de 12 règles pour une vie incorrecte");
    }
    if (reponse5 != "12 nouvelles règles pour une vie") {
        alert("Erreur : nom du livre manquant ou incorrect");
    }
    if (reponse6 != "robert greene") {
        alert("Erreur : auteur des 48 lois du pouvoir incorrect");
    }
    let choix1 = document.querySelectorAll("fieldset#Qdeux select")[0].value;
    let choix2 = document.querySelectorAll("fieldset#Qdeux select")[1].value;
    let choix3 = document.querySelectorAll("fieldset#Qdeux select")[2].value;
    let choix4 = document.querySelectorAll("fieldset#Qdeux select")[3].value;
    if (choix1 != "12 règles pour une vie") {
        alert("Erreur : Jordan B. Peterson est l’auteur de 12 règles pour une vie");
    }
    if (choix2 != "Berserk Tome 1") {
        alert("Erreur : le livre publié en 1989 est Berserk Tome 1");
    }
    if (choix3 != "Les 48 lois du pouvoir") {
        alert("Erreur : Robert Greene a écrit Les 48 lois du pouvoir");
    }
    if (choix4 != "Wajdi Mouawad") {
        alert("Erreur : Incendies a été écrit par Wajdi Mouawad");
    }
    let berserk1 = document.getElementById("berserk1").checked;
    let berserk2 = document.getElementById("berserk2").checked;
    let berserk3 = document.getElementById("berserk3").checked;
    let berserk4 = document.getElementById("berserk4").checked;
    let berserk5 = document.getElementById("berserk5").checked;
    if (!berserk1 || !berserk2 || !berserk4 || berserk3 || berserk5) {
        alert("Erreur dans les cases de Berserk");
    }
    let incendies1 = document.getElementById("incendies1").checked;
    let incendies2 = document.getElementById("incendies2").checked;
    let incendies3 = document.getElementById("incendies3").checked;
    let incendies4 = document.getElementById("incendies4").checked;
    if (!incendies1 || !incendies2 || !incendies4 || incendies3) {
        alert("Erreur dans les cases d'Incendies");
    }
    let r1_regles = document.getElementById("12regles1").checked;
    let r2_regles = document.getElementById("12regles2").checked;
    let r3_regles = document.getElementById("12regles3").checked;
    let r4_regles = document.getElementById("12regles4").checked;
    if (!r1_regles || !r2_regles || !r3_regles || r4_regles) {
        alert("Erreur dans les cases de 12 règles pour une vie");
    }
    let n1_nv_regles = document.getElementById("12nouvelle1").checked;
    let n2_nv_regles = document.getElementById("12nouvelle2").checked;
    let n3_nv_regles = document.getElementById("12nouvelle3").checked;
    let n4_nv_regles = document.getElementById("12nouvelle4").checked;
    if (!n1_nv_regles || !n2_nv_regles || !n3_nv_regles || n4_nv_regles) {
        alert("Erreur dans les cases de 12 nouvelles règles");
    }
    let l1_lois = document.getElementById("48lois1").checked;
    let l2_lois = document.getElementById("48lois2").checked;
    let l3_lois = document.getElementById("48lois3").checked;
    let l4_lois = document.getElementById("48lois4").checked;
    if (!l1_lois || !l3_lois || l2_lois || l4_lois) {
        alert("Erreur dans les cases des 48 lois du pouvoir");
    }
}
