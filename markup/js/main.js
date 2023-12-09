let suit = ['clubs', 'spades', 'diamonds', 'hearts'];
let person = ['jack', 'queen', 'king', 't'];
let card = [];

for (let i = 2; i <= 14; i++) {
    if (i <= 10) {
        for (let j = 0; j < suit.length; j++) {
            let cardInfo = `<div class="card__info">${i}<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`;
            
            card.push(`<div class="card">
            ${cardInfo}
            ${cardInfo}
            </div>`);
        }
    } else {
        let index = i - 11;
        for (let j = 0; j < person.length; j++) {
            let cardInfo = `<div class="card__info">${person[index][0].toUpperCase()}<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`;
    
            cardCenterImg = person[index] !== 't' ? person[index] : suit[j];
    
            card.push(`<div class="card card--person">
                ${cardInfo}
                <img class="person" src="images/${cardCenterImg}.svg" alt="${person[index]}">
                ${cardInfo}
            </div>`);
        }
    }
}




// for (let i = 2; i <= 10; i++) {
//     for (let j = 0; j < suit.length; j++) {
//         let cardInfo = `<div class="card__info">${i}<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`;
        
        // card.push(`<div class="card">
        // ${cardInfo}
        // ${cardInfo}
        // </div>`);
//     }
// }

// for (let i = 0; i < person.length; i++) {
//     for (let j = 0; j < suit.length; j++) {
//         let cardInfo = `<div class="card__info">${person[0][i].toUpperCase()}<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`;

        // cardCenterImg = person[i] !== 't' ? person[i] : suit[j];

        // card.push(`<div class="card card--person">
        //     ${cardInfo}
        //     <img class="person" src="images/${cardCenterImg}.svg" alt="${person[i]}">
        //     ${cardInfo}
        // </div>`);
//     }
// }

document.write(`<div class="wrapper">${card.join('')}</div>`);