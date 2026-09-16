const PIERRE = 'PIERRE';
const PAPIER = 'PAPIER';
const CISEAUX = 'CISEAUX';

const buttonPierre = document.getElementById('pierre');
const buttonPapier = document.getElementById('papier');
const buttonCiseaux = document.getElementById('ciseaux');

const paraVictoire = document.getElementById('nbVictoire');
const paraDefaite = document.getElementById('nbDefaite');
const paraEgalite = document.getElementById('nbEgalite');

const coups = [PIERRE, PAPIER, CISEAUX];

buttonPapier.addEventListener("click", () => played(PAPIER));
buttonPierre.addEventListener("click", () => played(PIERRE));
buttonCiseaux.addEventListener("click", () => played(CISEAUX));

let victoire = 0;
let defaite = 0;
let egalite = 0;

function updateScores(){
    paraDefaite.innerText = defaite;
    paraVictoire.innerText = victoire;
    paraEgalite.innerText = egalite;
    
}

function clearCompteur(){
    victoire = 0;
    defaite = 0;
    egalite = 0;
    updateScores()
}

function played(coup){
    const index = Math.floor(Math.random() * coups.length);
    const aiChoice = coups[index];
    console.log(`Coup du bot : ${aiChoice}`);
    
    let resultat = "Coup invalide";

    switch(coup){
        case PIERRE:
            switch(aiChoice){
                case PIERRE: egalite++; resultat = "Égalité"; break;
                case PAPIER: defaite++; resultat = "Perdu"; break;
                case CISEAUX: victoire++; resultat = "Gagné"; break;
            }
            break;
        case PAPIER:
            switch(aiChoice){
                case PIERRE: victoire++; resultat = "Gagné"; break;
                case PAPIER: egalite++; resultat = "Égalité"; break;
                case CISEAUX: defaite++; resultat = "Perdu"; break;
            }
            break;
        case CISEAUX:
            switch(aiChoice){
                case PIERRE: defaite++; resultat = "Perdu"; break;
                case PAPIER: victoire++; resultat = "Gagné"; break;
                case CISEAUX: egalite++; resultat = "Égalité"; break;
            }
            break;
        default:
            // reste "Coup invalide"
    }

    console.log(`Vous avez ${resultat}`);
    console.log(`Score -> Gagné: ${victoire}, Perdu: ${defaite}, Égalité: ${egalite}`);
    updateScores()

    return resultat;
}