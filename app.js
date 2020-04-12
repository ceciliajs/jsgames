document.addEventListener('DOMContentLoaded', () => {

 //card options
 const cardArray = [
     {
         name: 'ArianaGrande',
         img: 'images/ArianaGrande.jpeg'

     },
     {
        name: 'ArianaGrande',
        img: 'images/ArianaGrande.jpeg'

    },
     {
        name: 'bey',
        img: 'images/bey.jpeg'

    },
    {
        name: 'bey',
        img: 'images/bey.jpeg'

    },
    {
        name: 'BlakeLively',
        img: 'images/BlakeLively.jpeg'

    },
    {
        name: 'BlakeLively',
        img: 'images/BlakeLively.jpeg'

    },
    {
        name: 'jlo',
        img: 'images/jlo.jpeg'

    },
    {
        name: 'jlo',
        img: 'images/jlo.jpeg'

    },
    {
        name: 'lilireinhart',
        img: 'images/lilireinhart.jpeg'

    },
    {
        name: 'LiliReinhart',
        img: 'images/lilireinhart.jpeg'

    },
    {
        name: 'tswift',
        img: 'images/tswift.jpeg'

    },
    {
        name: 'tswift',
        img: 'images/tswift.jpeg'

    },
 ] 
 
 cardArray.sort(() => 0.5 - Math.random())

 const grid = document.querySelector('.grid');
 const resultDisplay = document.querySelector('#result')
 var cardsChosen = []
 var cardsChosenId = []
 var cardsWon = []
 
 //create your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blankfront.jpeg')
        card.setAttribute('data-id', i)
        //card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/whitesquare.png')
        cards[optionTwoId].setAttribute('src', 'images/whitesquare.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blankfront.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/blankfront.jpeg')
        alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textcontent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congrats! You matched all these incredible women!!'
    }
}

//flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}



createBoard()



})





























