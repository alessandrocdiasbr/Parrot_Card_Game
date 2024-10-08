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

function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}


function revealCard(event) {
    if (lockBoard) return;
    const card = event.currentTarget;

    if (card === firstCard || card.classList.contains ('reveal-card')) {
        return;
    }
    card.classList.add('reveal-card');
    moves++;
    updateMoveCounter();

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    checkCard();
}



function createCard(image) {
    const card = document.createElement('div');
    card.classList.add('card');

    const front = document.createElement('div');
    front.classList.add('front');
    const imageFront = document.createElement('img');
    imageFront.src = `images/${image}.gif`;
    imageFront.alt = image;

    const back = document.createElement('div');
    back.classList.add('back');
    const imageBack = document.createElement('img');
    imageBack.src = `images/back.png`;
    imageBack.alt = 'Carta de trás';

    front.appendChild(imageFront);
    back.appendChild(imageBack);

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-image', image);

    return card;
}

function checkCard() {
    const firstImage = firstCard.getAttribute('data-image');
    const secondImage = secondCard.getAttribute('data-image');

    if (firstImage === secondImage) {
        matchedPairs++;
        resetBoard();

        if (matchedPairs === numCards / 2) {
            setTimeout(() => {
                alert(`Parabéns! Você venceu em ${moves} jogadas.`);
            }, 500);
        }
    } else {
        lockBoard = true; 
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}