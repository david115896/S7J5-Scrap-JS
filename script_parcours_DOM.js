//Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.

var p = document.getElementsByTagName('p');
console.log(p.length)

//Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
var text = document.getElementById('coucou');
console.log(text.textContent)

//Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.

var a = document.getElementsByTagName('a');
console.log(a[2].href)

//Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.

var classD = document.getElementsByClassName('compte-moi');
console.log(classD.length)

//Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
var classC = document.querySelectorAll('li.compte-moi');
console.log(classC.length)

//Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
var classB = document.querySelectorAll('ol>li.compte-moi');
console.log(classB.length)

//La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>,
//le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu.
 //Affiche-le dans la console.

var classA = document.querySelector('div>ul:last-child>li:first-child');
console.log(classA.textContent)

