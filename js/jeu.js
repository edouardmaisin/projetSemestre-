"use strict"
var personnages = [];

function newPersonnage (nom, prenom, age, sabre, race,sentiment, ambition){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.sabre = sabre;
    this.race = race;
    this.sentiment = sentiment;
    this.ambition = ambition;
}


function informationsPerso() {
    for (let i = 0; i<personnages.length; i++){
        console.log(personnages[i]);
    }
}
function ajouterPersonnage (formulaire) {
    var nouveau = new newPersonnage(formulaire.nom.value,  formulaire.prenom.value, formulaire.age.value, formulaire.sabre.value, formulaire.race.value, formulaire.sentiment.value, formulaire.ambition.value);
    personnages.push(nouveau);
    console.log(personnages);
    document.getElementById("affichagePersonnage").innerHTML = formulaire.nom.value + " " + formulaire.prenom.value + " " + "a bien été crée";
    console.log(informationsPerso());
    return false;
}

function infoSabre (){
    for(let i = 0; personnages.length; i++) {
        if (personnages[i].sabre == "bleu") {
            console.log(personnages[i].nom + " " + personnages[i].prenom +  " " + "tu as Un esprit de justice et de protection. Utilisé par les Chevaliers Jedi qui veulent se battre pour le côté lumineux et ceux qui manient très bien le sabre. Sabre de Obi-Wan Kenobi et Anakin Skywalker.");
            document.getElementById("sabreReponse").innerHTML = personnages[i].nom + " " + personnages[i].prenom + " " + "tu as Un esprit de justice et de protection. Utilisé par les Chevaliers Jedi qui veulent se battre pour le côté lumineux et ceux qui manient très bien le sabre. Sabre de Obi-Wan Kenobi et Anakin Skywalker.";
        }
        if (personnages[i].sabre == "vert") {
            console.log(personnages[i].nom + " " + personnages[i].prenom + " " +"tu préferes Obtenir la paix par la force, uniquement quand c'est nécessaire. Utilisé par les consulaires Jedi qui préfèrent la négociation et la méditation au combat, mais qui sont quand même doués. Sabre de Luke, Yoda et Qui-Gon Jinn.");
            document.getElementById("sabreReponse").innerHTML = personnages[i].nom + " " + personnages[i].prenom + " " + "tu préferescObtenir la paix par la force, uniquement quand c'est nécessaire. Utilisé par les consulaires Jedi qui préfèrent la négociation et la méditation au combat, mais qui sont quand même doués. Sabre de Luke, Yoda et Qui-Gon Jinn.";
        }
        if (personnages[i].sabre  == "jaune") {
            console.log(personnages[i].nom + " " + personnages[i].prenom +  " " +"Synonyme de curiosité, d'intrigue, ce sabre symbolise un sentiment très fort de vouloir détruire le côté obscur, et ses activités sont liées à l'espionnage. Utilisé par les Sentinelles Jedi. Sabre de Yarael Poof et Plo Koon.");
            document.getElementById("sabreReponse").innerHTML = personnages[i].nom + " " + personnages[i].prenom + " " + "Synonyme de curiosité, d'intrigue, ce sabre symbolise un sentiment très fort de vouloir détruire le côté obscur, et ses activités sont liées à l'espionnage. Utilisé par les Sentinelles Jedi. Sabre de Yarael Poof et Plo Koon.";
        }
    }
}

function creerHtmlLi() {
    var htmlLi = "";
    for (let i = 0; i < personnages.length; i++) {
        htmlLi += "<li>" + personnages[i].prenom + "</li>";
    }

    document.getElementById("reponseFinale").innerHTML = "<ul>" + creerHtmlLi() + "</ul>";
}