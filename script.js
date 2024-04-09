const baseURI = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
const drawBtn = document.querySelector('#draw-btn');
const cardDisplay = document.querySelector('#card-display');

function drawCard() {

    let cardData = {};
    cardDisplay.innerHTML = "";

    fetch(baseURI)
    .then(res => {
        if(res.ok)
                return res.json();
            throw new Error('Error when fetching') 
    })
    .then(data => {
        if (data.success) {

            cardData = data.cards[0];
            const cardImage = document.createElement('img');
            cardImage.setAttribute('src', cardData.image);
            cardDisplay.appendChild(cardImage);
        }
        else {
            cardDisplay.innerHTML = "Could not find a card, try again!";
        }
    })
    .catch(err => { 
        console.log(err);
        cardDisplay.innerHTML = "Something went wrong, try again!";
    })
}

drawBtn.addEventListener('click', () => {
   drawCard();
});