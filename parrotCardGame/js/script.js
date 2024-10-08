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