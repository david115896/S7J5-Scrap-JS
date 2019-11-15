function changeTitles() {
//Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris à THP"
//Pointer vers le sous-titre ("Something short and leading about…") et le changer en "THP est une formation qui, en 3 mois,
//à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs,
//pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"

document.getElementsByTagName('h1')[0].innerHTML = "Ce que j'ai appris à THP";
document.getElementsByClassName('lead')[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n\'auront plus de secret pour vous !";

};

function changeCallToActions() {
//Changer le texte du bouton "Main call to action" en "OK je veux tester !"
//Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer : "http://www.thehackingproject.org"
//Changer le texte du bouton "Secondary action" en "Non Merci"
//Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : "https://www.pole-emploi.fr/accueil/"

document.getElementsByClassName('btn-primary')[0].innerHTML = "OK je veux tester !";
document.getElementsByClassName('btn-primary')[0].setAttribute("href", "http://www.thehackingproject.org");
document.getElementsByClassName('btn-secondary')[0].innerHTML = "Non Merci";
document.getElementsByClassName('btn-secondary')[0].setAttribute("href", "https://www.pole-emploi.fr/accueil/");
};

function changeLogoName() {
//Change "Album" par "The THP Experience" ;
//Change la taille du texte pour le passer en 2em.

document.querySelector('.navbar-brand>strong').innerHTML = "The THP Experience";
document.querySelector('.navbar-brand>strong').style.fontSize = '2em';
console.log()

};

function populateImages() {
//Écris une fonction populateImages() qui va ajouter, dans chacune des 9 cards, une image dont l'URL est contenue dans l'array suivant :
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

let cards = document.querySelectorAll('.album .card>img');
for (var i=0; i<cards.length; i++) {
    cards[i].setAttribute("src", imagesArray[i]);
};

};

function deleteLastCards() {
//Écris une fonction deleteLastCards() qui va supprimer les 3 dernières cards via une boucle.
let cards = document.querySelectorAll('.album .card');
for (var i=0; i<cards.length; i++) {
    if (i >= 6){
    cards[i].remove()
    }
};
};

function changeCardsText() {
let array = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets,forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]

let cards = document.querySelectorAll('.album .card-text');
for (var i=0; i<cards.length; i++) {
    if (i <=2){
    cards[i].innerHTML = array[i]
    }
};

};

function changeViewButtons() {
//Écris une fonction changeViewButtons() qui va modifier tous les boutons "View" des cards pour les passer en vert.
//En gros il faut leur mettre la classe btn-success et enlever btn-outline-secondary. Les boutons Edit ne doivent pas changer.
 //Évite bien sûr de faire les 6 modifications une à une ... faut de la boucle là !

    let buttons = document.querySelectorAll('.album .btn-outline-secondary');

    buttons.forEach(button => {
    console.log(button.classList[2])
        if  (button.textContent === "View") {
            button.classList.remove('btn-outline-secondary')
            button.classList.add('btn-success')

        }
    });
};


changeTitles();
changeCallToActions();
changeLogoName();
populateImages();
deleteLastCards();
changeCardsText();
changeViewButtons();
