const container = document.querySelector('.container');
const main = document.querySelector('main');

const images = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot',
];

let firstCard = null;
let secondCard = null;
let moves = 0;
let matchedPairs = 0;
let lockBoard = false;

function numCard() {
    let numCards = parseInt(prompt("Digite um número par de cartas (entre 4 e 14):"));
    while (isNaN(numCards) || numCards < 4 || numCards > 14 ||
        numCards % 2 !== 0) { numCards = parseInt(prompt("Número inválido. Digite um número par de cartas (entre 4 e 14):")); }
    return numCards;
}

const numCards = numCard();