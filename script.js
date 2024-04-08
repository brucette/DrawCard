const baseURI = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
const drawBtn = document.querySelector('#draw-btn');
const cardDisplay = document.querySelector('#card-display');

function drawCard() {

    let cardData = {};

    fetch(baseURI)
    .then(res => res.json())
    .then(data => {

        console.log(data)
        console.log(data.success)
        
        //check if success?
        if (data.success) {

            cardDisplay.innerHTML = "";
            cardData = data.cards[0];

            const cardImage = document.createElement('img');
            cardImage.setAttribute('src', cardData.image);
            
            cardDisplay.appendChild(cardImage);
            
        }
        console.log('from fetch')
        // else
        //     return 'No card found'


    })
    .catch(err => console.log(err))
}


drawBtn.addEventListener('click', () => {
   console.log('moi');
   drawCard();
});