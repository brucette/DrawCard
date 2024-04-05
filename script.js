const baseURI = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
const drawBtn = document.querySelector('#draw-btn');
const cardDisplay = document.querySelector('#card-display');

function drawCard() {

    let cardData = {};

    fetch(baseURI)
    .then(res => res.json())
    .then(data => {
        
        //check if success?
        if (data.success) {
            cardData = data.cards[0];

            const cardImage = createElement('img');
            cardImage.setAttribut('src', cardData.image);
            cardDisplay.innerHTML = `
                ${cardImage}
            `
        }
        // else
        //     return 'No card found'


    })
    .catch(err => console.log(err))
}


drawBtn.addEventListener('click', (event) => {
   console.log(event);
   // drawCard
});