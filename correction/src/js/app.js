import '../scss/style.scss';

// A récupérer l'element du DOM "Game holder"
// J'utilise querySelector pour récupérer l'élément avec la classe (.) game-holder
let gameHolder = document.querySelector('.game-holder');


// Récupérer mon template (un patron comme dans le textile)
// J'utilise le querySelector pour récupérer l'élément avec l'id (#) card-template
const cardTemplate = document.querySelector('#card-template');

let flippedCards = [];

function handleClick(event) {
    // Je verifie que la carte n'est pas déjà retourné
    if (event.currentTarget.classList.contains('flipped') || event.currentTarget.classList.contains('matched')) return;

    if (flippedCards.length < 2) { // Si j'ai pas deux cartes retournés
        //event.currentTarget == c'est l'élément qui nous interesse, l'élement cliqué
        flippedCards.push(event.currentTarget);
        event.currentTarget.classList.add('card-flipped');

        console.log(flippedCards[0])

        // Si après avoir retourné une carte j'ai deux elements
        if (flippedCards.length === 2) {
            
            // si j'ai la même classe alors je les marque comme retourné 
            
            if(flippedCards[0].classList[1] === flippedCards[1].classList[1]){
                for(let card of flippedCards){
                    card.classList.add('matched');
                }
            }
            setTimeout(() => { // Je nettoie mes cartes après un compte a rebours de 2 secondes
                // retourner toutes les cartes
                clearAllCards();
                // vider ma liste
                flippedCards = [];
            }, 1000);
        }
    }

    console.log(`Nombre de cartes restantes : ${countCardsLeft()}`);
    if(countCardsLeft() === 0){
        alert('Bravo vous avez gagné !');
    }
}


function clearAllCards() {
    const allCards = document.querySelectorAll('.game-card');
    // Pour chacune de mes cartes, je retire la classe flipped
    for (let card of allCards) {
        card.classList.remove('card-flipped');
    }

}

function countCardsLeft() {
    let nbCardsLeft =0;

    const allCards = document.querySelectorAll('.game-card');
    // Pour chacune de mes cartes, je regarde si elle n'a PAS la classe matched
    for (let card of allCards) {
        if(!card.classList.contains('matched')){ // Si la liste des classes ne contient pas matched
            nbCardsLeft++;
        }
    }

    return nbCardsLeft;
}

function cheat() {
    // Je récupère TOUTES mes cartes
    const allCards = document.querySelectorAll('.game-card');
    // Pour chacune de mes cartes, je retire la classe flipped
    for (let card of allCards) {
        card.classList.add('card-flipped');
    }

    setTimeout(() => {
        for (let card of allCards) {
            card.classList.remove('card-flipped');
        }
    }, 2000);
}
let cheatBtn = document.querySelector('#cheat');
cheatBtn.addEventListener('click', cheat);

// Exemple
// const tousLesDivsDeMonDocument = document.querySelectorAll('div');

// Je crée un tableau qui va contenir les cartes
let cards = [];

// J'ai besoin de 36 cartes donc je boucle 36 fois
let nbCard = 0;
for (let i = 0; i < 36; i++) {
    // Je clone mon template
    // importNode == cloner le template
    let clone = document.importNode(cardTemplate.content, true);

    // Je récupère dans mon clone l'élément qui contient le game-card
    let gameCardItem = clone.querySelector('.game-card');
    // Je lui ajoute une classe qui va nous permettre de l'identifier (pour le CSS)

    gameCardItem.classList.add(`game-card-${nbCard}`);
    gameCardItem.setAttribute('id', `card-${i}`);

    gameCardItem.addEventListener('click', handleClick);



    // Avant de les ajouter, je vais ajouter chaque carte à un tableau
    cards.push(clone);
    // Je l'ajoute à mon game holder
    // gameHolder.appendChild(clone);
    nbCard++;

    if(nbCard > 17) { // quand j'arrive à la moitié des cartes je remet à 0 ce compteur
        nbCard = 0;
    }
}

//Une fois que j'ai mon tableau de cartes

// Je mélange mes cartes
ficherYatesShuffle(cards);

console.log(cards);

// Il ne me reste plus qu'a les ajouter au dom 
for (let card of cards) {
    gameHolder.appendChild(card);
}

function ficherYatesShuffle(array) {
    // Itérer sur mon tableau depuis le dernier element vers le premier
    for (let i = array.length - 1; i > 0; i--) {
        // Générer un nombre aleatoire entre 0 et i
        const randomIndex = Math.floor(Math.random() * (i + 1));

        //Echanger l'element à l'index i avec l'element à l'index randomIndex
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];

    }
}

// Les cartes apparaissent toujours dans le même ordre...
// Imaginez une solution pour qu'elles apparaissent dans un ordre différent...

