const buttonPierre = document.getElementById('pierre');
const buttonPapier = document.getElementById('papier');
const buttonCiseaux = document.getElementById('ciseaux');

const coups = [PIERRE,PAPIER,CISEAUX];

buttonPapier.addEventListener("click",played(coups.PAPIER));
buttonPierre.addEventListener("click",played(coups.PIERRE));
buttonCiseaux.addEventListener("click",played(coups.CISEAUX));

let victoire = 0;
let defaire = 0;
let egalite = 0;

function played(coup){
    var index = Math.floor(Math.random() * coups.length);
    let aiChoice = coups[index];
    console.log(`Coup du bot : ${aiChoice}`);
    
    // switch sur le coup du joueur
        let resultat;
    switch(coup){
        case coups.PIERRE:
            switch(aiChoice){
                case coups.PIERRE: egalite++; break;
                case coups.PAPIER: defaite++; break;
                case coups.CISEAUX: victoire++; break;
            }
            break;
        case coups.PAPIER:
            switch(aiChoice){
                case coups.PIERRE: resultat = "Gagné"; break;
                case coups.PAPIER: resultat = "Égalité"; break;
                case coups.CISEAUX: resultat = "Perdu"; break;
            }
            break;
        case coups.CISEAUX:
            switch(aiChoice){
                case coups.PIERRE: resultat = "Perdu"; break;
                case coups.PAPIER: resultat = "Gagné"; break;
                case coups.CISEAUX: resultat = "Égalité"; break;
            }
            break;
        default:
            resultat = "Coup invalide";
    }

    console.log(`Vous avez ${resultat}`);
    return resultat;

}