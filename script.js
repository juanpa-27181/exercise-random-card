function generateCard() {
    const suits = [
        {Symbol:'♣', class: "spade"},
        {Symbol:'♥',  class : "heart"},
        {Symbol:'♦',  class : "diamond"},
        {Symbol:'♠',  class : "club"} 
             
    ];
    const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    //Induccion a los elementos del DOM
    const card = document.getElementById('card');
    const topSuit = document.getElementById('top-suit');
    const bottomSuit = document.getElementById('botton-suit');
    const number = document.getElementById('number');


card.className = "card";

card.classList.add(randomSuit.class);
topSuit.className = "top-suit " + randomSuit.class;
bottomSuit.className = "botton-suit " + randomSuit.class;
topSuit.textContent = randomSuit.Symbol;
bottomSuit.textContent = randomSuit.Symbol;
number.textContent = randomNumber;
} 
generateCard();