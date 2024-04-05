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
            cardData = data.cards[0];

            //const cardImage = createElement('img');
            //cardImage.setAttribut('src', cardData.image);
            
            cardDisplay.innerHTML = 
            `
            <p>somethinghere</p>
                
            `
            
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